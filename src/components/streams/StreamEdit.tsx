import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { editStream, fetchStream } from "../../actions/streamActions";
import { IStreamReducer } from "../../reducers/interfaces";
import { IStoreState } from "../../store/interfaces";
import StreamForm, { IStream } from "../forms/StreamForm";
export interface IStreamEditProps {
  stream: IStreamReducer | null;
  fetchStream: (streamId: number) => void;
  editStream: (formValues: IStream, streamId: number) => void;
  [key: string]: any;
}
export class StreamEdit extends Component<IStreamEditProps> {
  public componentDidMount() {
    this.props.fetchStream((this.props.match.params as any).id);
  }
  public render() {
    const { stream } = this.props;
    return (
      <div className="ui container">
        {stream && (
          <StreamForm
            initialValues={{
              description: stream.description,
              title: stream.title
            }}
            formHeader={"Edit a Stream"}
            onSubmit={this.onSumbit}
          />
        )}
      </div>
    );
  }

  public onSumbit = (formValues: IStream) => {
    this.props.editStream(formValues, (this.props.match.params as any).id);
  };
}

const mapStateToProps = ({ auth, streamReducer }: IStoreState) => ({
  stream: streamReducer.stream
});

export default connect(
  mapStateToProps,
  {
    editStream,
    fetchStream
  }
)(StreamEdit);
