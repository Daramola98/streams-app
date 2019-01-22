import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { fetchStream } from "../../actions/streamActions";
import { IStreamReducer } from "../../reducers/interfaces";
import { IStoreState } from "../../store/interfaces";
interface IStreamShowProps extends RouteComponentProps {
  stream: IStreamReducer | null;
  fetchStream: (streamId: number) => void;
}
class StreamShow extends Component<IStreamShowProps> {
  public componentDidMount() {
    this.props.fetchStream((this.props.match.params as any).id);
  }
  public render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.renderStream()}</div>;
  }

  private renderStream = () => {
    const { stream } = this.props;
    return (
      <div>
        <h1>{stream!.title}</h1>
        <h5>{stream!.description}</h5>
      </div>
    );
  };
}

const mapStateToProps = ({ auth, streamReducer }: IStoreState) => ({
  stream: streamReducer.stream
});

export default connect(
  mapStateToProps,
  {
    fetchStream
  }
)(StreamShow);
