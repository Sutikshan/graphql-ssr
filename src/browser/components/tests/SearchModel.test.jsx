import React from "react";
import { shallow } from "enzyme";
import { SearchModel } from "../SearchModel";

it("should render a SearchModel component correctly", () => {
  const data = {
    models: [{ id: 1, Name: "i30" }]
  };
  const wrapper = shallow(<SearchModel data={data} onModelSelect={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});
