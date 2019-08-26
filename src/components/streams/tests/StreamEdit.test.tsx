import { shallow } from "enzyme";
import React from "react";

import { IStream } from "../../forms/StreamForm";
import { IStreamEditProps, StreamEdit } from "../StreamEdit";

const StreamEditProps: IStreamEditProps = {
  editStream: (formValues: IStream, id: number) => {
    const streamId = id;
  },
  fetchStream: (id: number) => {
    const streamId = id;
  },
  match: {
    isExact: true,
    params: {
      id: 3
    }
  },
  stream: {
    createdBy: "3",
    description: "EndGame Teaser",
    id: 1,
    title: "Avengers"
  }
};

describe("<StreamEdit />", () => {
  const renderedComponent = shallow(<StreamEdit {...StreamEditProps} />);

  it("should render the component", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
