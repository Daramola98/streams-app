import React, { Component } from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/streamActions";
import StreamForm from "../forms/StreamForm";

export interface IStream {
  title: string;
  description: string;
}

export interface IStreamProps {
  createStream: (formValues: IStream) => void;
}
class StreamCreate extends Component<IStreamProps> {
  public render() {
    return (
      <div className="ui container">
        <StreamForm
          formHeader={"Create a Stream"}
          onSubmit={this.props.createStream}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
