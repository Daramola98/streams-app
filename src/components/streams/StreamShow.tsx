import flv from "flv.js";
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
export class StreamShow extends Component<IStreamShowProps> {
  public player: any;
  public videoRef = React.createRef<HTMLVideoElement>();

  public componentDidMount() {
    const { id } = this.props.match.params as any;
    this.props.fetchStream(id);
    this.buildPlayer();
  }

  public componentWillUnmount() {
    this.player.destroy();
  }

  public componentDidUpdate() {
    this.buildPlayer();
  }

  public render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div className="ui container">{this.renderStream()}</div>;
  }

  private buildPlayer = () => {
    const { id } = this.props.match.params as any;
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };

  private renderStream = () => {
    const { stream } = this.props;
    return (
      <div>
        <video controls={true} ref={this.videoRef} style={{ width: "100%" }} />
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
