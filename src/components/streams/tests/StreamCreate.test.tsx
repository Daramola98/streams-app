import { shallow } from "enzyme";
import React from "react";
import { IStreamCreateProps, StreamCreate } from "../StreamCreate";

const StreamCreateProps: IStreamCreateProps = {
  createStream: jest.fn()
};

describe("<Modal />", () => {
  const renderedComponent = shallow(<StreamCreate {...StreamCreateProps} />);

  it("should render the component", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
