import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

export interface IStream {
  title: string;
  description: string;
}
class StreamCreate extends Component<InjectedFormProps<IStream>, {}> {
  public render() {
    return (
      <div className="ui container">
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
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
          <button className="ui button primary" type="submit">
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
    console.log(formValues);
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

export default reduxForm<IStream>({
  form: "streamCreate",
  validate
})(StreamCreate);
