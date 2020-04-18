import React from "react";
import FlightDetails from "./flightDetails";
import renderer from "react-test-renderer";
import { flightAndPassengerDetails } from "../../../tools/mockData";

describe.only("Flight and Passenger Details", () => {
  it("should Load only flight select dropdown when data is empty", () => {
    const tree = renderer.create(
      <FlightDetails data={{}} handleFlightSelectChange={jest.fn()} />
    );
    expect(tree).toMatchSnapshot();
  });

  it("should Load flight details along with flight select dropdown when data is empty", () => {
    const tree = renderer.create(
      <FlightDetails
        data={flightAndPassengerDetails}
        handleFlightSelectChange={jest.fn()}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
