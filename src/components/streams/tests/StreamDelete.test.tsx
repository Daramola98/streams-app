import { shallow } from "enzyme";
import React from "react";

import { IStreamDeleteProps, StreamDelete } from "../StreamDelete";

const StreamDeleteProps: IStreamDeleteProps = {
  deleteStream: (id: number) => {
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

describe("<Modal />", () => {
  const renderedComponent = shallow(<StreamDelete {...StreamDeleteProps} />);

  it("should render the component", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
