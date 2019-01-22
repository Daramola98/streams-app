import { shallow } from "enzyme";
import React from "react";
import Modal, { IModalProps } from "../Modal";

const ModalProps: IModalProps = {
  actions: jest.fn(),
  content: "Are you sure you want to delete this stream",
  onDismiss: jest.fn(),
  onSubmit: jest.fn(),
  title: "Delete Stream"
};

describe("<Modal />", () => {
  const renderedComponent = shallow(<Modal {...ModalProps} />);

  it("should render the component", () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it("should render the component", () => {
    const mockedEventObject = { stopPropagation: jest.fn() };
    const spiedHandler = jest.spyOn(mockedEventObject, "stopPropagation");
    renderedComponent.find("#outer-modal").simulate("click", mockedEventObject);
    expect(spiedHandler).toHaveBeenCalled();
  });
});
