import React from "react";
import { shallow } from "enzyme";
import { SearchMake } from "../SearchMake";
import { stub } from "sinon";

it("should render a SearchMake component correctly", () => {
  const data = {
    makes: [{ id: 1, Name: "Chevy" }]
  };
  const wrapper = shallow(<SearchMake data={data} onMakeSelect={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

it("should handle make change event", () => {
  const data = {
    makes: [{ id: 1, Name: "i30" }]
  };

  const makeSelectStub = stub();
  const wrapper = shallow(
    <SearchMake data={data} onMakeSelect={makeSelectStub} />
  );

  wrapper.find("select").simulate("change", { value: 1 });
  expect(makeSelectStub.calledOnce).toBeTruthy();
});
