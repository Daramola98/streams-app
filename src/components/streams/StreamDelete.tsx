import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { deleteStream, fetchStream } from "../../actions/streamActions";
import { IStreamReducer } from "../../reducers/interfaces";
import { IStoreState } from "../../store/interfaces";
import StreamDeleteModal from "../modals/StreamDeleteModal";
interface IStreamDeleteProps extends RouteComponentProps {
  stream: IStreamReducer | null;
  fetchStream: (streamId: number) => void;
  deleteStream: (streamId: number) => void;
}
class StreamDelete extends Component<IStreamDeleteProps> {
  public componentDidMount() {
    this.props.fetchStream((this.props.match.params as any).id);
  }
  public render() {
    return (
      <div>
        Stream Delete
        <StreamDeleteModal
          content={this.renderContent()}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }

  public onSubmit = () => {
    this.props.deleteStream((this.props.match.params as any).id);
  };

  private renderContent = (): string => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title: ${
      this.props.stream.title
    }`;
  };
}

const mapStateToProps = ({ auth, streamReducer }: IStoreState) => ({
  stream: streamReducer.stream
});

export default connect(
  mapStateToProps,
  {
    deleteStream,
    fetchStream
  }
)(StreamDelete);
