import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions/streamActions";
import { IStreamReducer } from "../../reducers/interfaces";
import { IStoreState } from "../../store/interfaces";

export interface IStreamListProps {
  currentUser: string | null;
  streams: IStreamReducer[];
  fetchStreams: () => void;
  isSignedIn: boolean | null;
}
export class StreamList extends Component<IStreamListProps> {
  public componentDidMount() {
    this.props.fetchStreams();
  }

  public render() {
    return (
      <div className="ui container">
        <h3 className="ui header">Streams</h3>
        <div className="ui celled list">{this.renderStreams()}</div>
        <div style={{ textAlign: "right" }}>
          {this.props.currentUser && this.renderCreateStream()}
        </div>
      </div>
    );
  }

  private renderStreams = () => {
    const { streams, currentUser } = this.props;
    if (streams.length < 1) {
      return <div>No streams broadcasting at the moment</div>;
    }
    const streamList = streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {currentUser === stream.createdBy && this.renderControls(stream.id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
    return streamList;
  };

  private renderControls = (streamId: number) => {
    return (
      <div className="right floated content">
        <Link to={`/streams/edit/${streamId}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`/streams/delete/${streamId}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  };

  private renderCreateStream = () => {
    return (
      <div className="right floated content">
        <Link to="/streams/new" className="ui button primary">
          Create Stream
        </Link>
      </div>
    );
  };
}

const mapStateToProps = ({ streamReducer, auth }: IStoreState) => ({
  currentUser: auth.userId,
  isSignedIn: auth.isSignedIn,
  streams: Object.values(streamReducer.streams)
});

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
