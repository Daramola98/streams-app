import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { createStream } from "../../actions/streamActions";

export interface IStream {
  title: string;
  description: string;
}

export interface IStreamProps {
  createStream: (formValues: IStream) => void;
}
class StreamCreate extends Component<
  InjectedFormProps<IStream, IStreamProps> & IStreamProps
> {
  public render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="ui container">
        <h2 className="ui header center aligned">Create a Stream</h2>
        <form className="ui form error" onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button
            className="ui button primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Create Stream
          </button>
        </form>
      </div>
    );
  }

  private renderInput = ({ input, label, meta }: any) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  private onSubmit = (formValues: IStream) => {
    this.props.createStream(formValues);
    this.props.reset();
  };

  private renderError({ error, touched }: any) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  }
}

const validate = (formValues: IStream) => {
  const { title, description } = formValues;
  const errors: any = {};

  if (!title) {
    errors.title = "You need to enter a title";
  }
  if (!description) {
    errors.description = "You need to enter a description";
  }
  return errors;
};

const FormWrapper = reduxForm<IStream, IStreamProps>({
  form: "streamCreate",
  validate
})(StreamCreate);

export default connect(
  null,
  { createStream }
)(FormWrapper);
