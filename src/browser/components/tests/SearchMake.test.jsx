import React from "react";
import { shallow } from "enzyme";
import { SearchMake } from "../SearchMake";

it("should render a SearchMake component correctly", () => {
  const data = {
    makes: [{ id: 1, Name: "Chevy" }]
  };
  const wrapper = shallow(<SearchMake data={data} onMakeSelect={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});
