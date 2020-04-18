import React from "react";
import FlightTableRow from "./flightTableRow";
import { flightsData } from "../../../tools/mockData";
import renderer from "react-test-renderer";
import { createShallow } from "@material-ui/core/test-utils";
import TableCell from "@material-ui/core/TableCell";

it("render table row at zero index to have first cell match the flight no of the data ", () => {
  let mount = createShallow();
  const wrapper = mount(
    <FlightTableRow
      key={0}
      row={flightsData[0]}
      index={0}
      isEditable={false}
      handleDelete={jest.fn()}
      handleSave={jest.fn()}
    ></FlightTableRow>
  );
  expect(wrapper.find(TableCell).first().shallow().text()).toBe(
    flightsData[0].flightNo
  );
});

it("should load a row in the table when row details are passed ", () => {
  const tree = renderer.create(
    <FlightTableRow
      key={0}
      row={flightsData[0]}
      index={0}
      isEditable={false}
      handleDelete={jest.fn()}
      handleSave={jest.fn()}
    ></FlightTableRow>
  );
  expect(tree).toMatchSnapshot();
});
