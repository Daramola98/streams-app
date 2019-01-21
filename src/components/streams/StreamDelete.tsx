import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { fetchStream } from "../../actions/streamActions";
import { IStreamReducer } from "../../reducers/interfaces";
import { IStoreState } from "../../store/interfaces";
interface IStreamDeleteProps extends RouteComponentProps {
  stream: IStreamReducer | null;
  fetchStream: (streamId: number) => void;
}
class StreamDelete extends Component<IStreamDeleteProps> {
  public componentDidMount() {
    this.props.fetchStream((this.props.match.params as any).id);
  }
  public render() {
    return <div>Stream Delete</div>;
  }
}

const mapStateToProps = ({ auth, streamReducer }: IStoreState) => ({
  stream: streamReducer.stream
});

export default connect(
  mapStateToProps,
  {
    fetchStream
  }
)(StreamDelete);
