import React, { SyntheticEvent } from "react";
import history from "../../history";

export interface IModalProps {
  actions: (onSubmit: () => void) => any;
  content: string;
  title: string;
  onDismiss: () => void;
  onSubmit: () => void;
}
const Modal = ({
  actions,
  content,
  onDismiss,
  onSubmit,
  title
}: IModalProps) => {
  return (
    <div
      // tslint:disable-next-line:jsx-no-lambda
      onClick={onDismiss}
      className="ui dimmer modals visible active"
    >
      <div
        // tslint:disable-next-line:jsx-no-lambda
        onClick={(event: SyntheticEvent) => event.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions(onSubmit)}</div>
      </div>
    </div>
  );
};

export default Modal;
