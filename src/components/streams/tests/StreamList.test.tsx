import { shallow } from "enzyme";
import React from "react";

import { IStream } from "../../forms/StreamForm";
import { IStreamListProps, StreamList } from "../StreamList";

const StreamListProps: IStreamListProps = {
  currentUser: "123",
  fetchStreams: () => {
    const streamId = "id";
  },
  isSignedIn: true,
  streams: [
    {
      createdBy: "3",
      description: "EndGame Teaser",
      id: 1,
      title: "Avengers"
    }
  ]
};

describe("<StreamList />", () => {
  const renderedComponent = shallow(<StreamList {...StreamListProps} />);

  it("should render the component", () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
