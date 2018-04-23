import React from "react";
import { shallow } from "enzyme";
import SearchContainer from "../SearchContainer";

it("should render a SearchContainer component correctly", () => {
  const wrapper = shallow(<SearchContainer />);

  expect(wrapper).toMatchSnapshot();
});
