import dotenv from "dotenv";
import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/authActions";
import { IStoreState } from "../store/interfaces";

dotenv.config();

interface IGoogleAuthProps {
  isSignedIn: boolean | null;
  signIn: (userId: string) => void;
  signOut: () => void;
}
class GoogleAuth extends Component<IGoogleAuthProps, {}> {
  public auth: any = null;

  public componentDidMount() {
    (window as any).gapi.load("client:auth2", () => {
      (window as any).gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = (window as any).gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  public renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  public render() {
    return <div>{this.renderAuthButton()}</div>;
  }

  public onAuthChange = (isSignedIn: boolean) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  private onSignInClick = () => {
    this.auth.signIn();
  };

  private onSignOutClick = () => {
    this.auth.signOut();
  };
}

const mapStateToProps = ({ auth }: IStoreState) => ({
  isSignedIn: auth.isSignedIn
});

export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(GoogleAuth);
