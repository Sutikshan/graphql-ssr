import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";

it("should render a App component correctly", () => {
  const data = {
    carOfTheWeek: { imageUrl: "http://rediff.com/image.png", Name: "Platanito" }
  };
  const wrapper = shallow(<App data={data} />);

  expect(wrapper).toMatchSnapshot();
});
