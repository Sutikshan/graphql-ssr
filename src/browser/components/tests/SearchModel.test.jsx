import React from "react";
import { shallow } from "enzyme";
import { SearchModel } from "../SearchModel";
import { stub } from "sinon";

it("should render a SearchModel component correctly", () => {
  const data = {
    models: [{ id: 1, Name: "i30" }]
  };
  const wrapper = shallow(<SearchModel data={data} onModelSelect={() => {}} />);

  expect(wrapper).toMatchSnapshot();
});

it("should render a SearchModel component and handle model change event", () => {
  const data = {
    models: [{ id: 1, Name: "i30" }]
  };

  const modelSelectStub = stub();
  const wrapper = shallow(
    <SearchModel data={data} onModelSelect={modelSelectStub} />
  );

  wrapper.find("select").simulate("change", { value: 1 });
  expect(modelSelectStub.calledOnce).toBeTruthy();
});
