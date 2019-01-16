import dotenv from "dotenv";
import React, { Component } from "react";

dotenv.config();

interface IGoogleAuthState {
  isSignedIn: boolean | null;
}

class GoogleAuth extends Component<{}, IGoogleAuthState> {
  public auth: any = null;
  public state = {
    isSignedIn: null
  };
  public componentDidMount() {
    (window as any).gapi.load("client:auth2", () => {
      (window as any).gapi.client
        .init({
          clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
          scope: "email"
        })
        .then(() => {
          this.auth = (window as any).gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  public renderAuthButton() {
    const { isSignedIn } = this.state;
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

  public onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  private onSignInClick = () => {
    this.auth.signIn();
  };

  private onSignOutClick = () => {
    this.auth.signOut();
  };
}

export default GoogleAuth;
