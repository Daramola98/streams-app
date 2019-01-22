import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import history from "../../history";
import Modal, { IModalProps } from "./Modal";

export interface IStreamDeleteModalProps {
  content: string;
  onSubmit: () => void;
}

const actions = (onSubmit: () => void) => {
  return (
    <div>
      <Link to="/" className="ui button">
        Cancel
      </Link>
      <button onClick={onSubmit} className="ui button negative">
        Delete
      </button>
    </div>
  );
};

const ModalProps = {
  actions,
  onDismiss: () => history.push("/"),
  title: "Delete Stream"
};

const StreamDeleteModal = (props: IStreamDeleteModalProps) => {
  return ReactDOM.createPortal(
    <Modal {...ModalProps} content={props.content} onSubmit={props.onSubmit} />,
    document.getElementById("modal") as HTMLElement
  );
};

export default StreamDeleteModal;
