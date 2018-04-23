import {
  carOfTheWeekQuery,
  makeQuery,
  getModelsByMake,
  getModelById
} from "../queries";

it("carOfTheWeekQuery should be the correct query", () => {
  expect(carOfTheWeekQuery).toMatchSnapshot();
});

it("carOfTheWeekQuery should be the correct query", () => {
  expect(makeQuery).toMatchSnapshot();
});

it("carOfTheWeekQuery should be the correct query", () => {
  expect(getModelsByMake).toMatchSnapshot();
});

it("carOfTheWeekQuery should be the correct query", () => {
  expect(getModelById).toMatchSnapshot();
});
