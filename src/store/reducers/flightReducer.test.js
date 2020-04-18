import flight from "./flight";
import initialState from "./initialState";
import flightsData from "../../../tools/mockData";
it("should git flight list when passed SET_FLIGHT_LIST", () => {
  // arrange

  // act
  const newState = flight([], {
    type: "SET_FLIGHT_LIST",
  });
  console.log(newState);
  // assert
  expect(newState.length).toEqual(3);
  expect(newState).toEqual(flightsData);
});

// it("should update course when passed UPDATE_COURSE_SUCCESS", () => {
//   // arrange
//   const initialState = [
//     { id: 1, title: "A" },
//     { id: 2, title: "B" },
//     { id: 3, title: "C" },
//   ];

//   const course = { id: 2, title: "New Title" };
//   const action = actions.updateCourseSuccess(course);

//   // act
//   const newState = courseReducer(initialState, action);
//   const updatedCourse = newState.find((a) => a.id == course.id);
//   const untouchedCourse = newState.find((a) => a.id == 1);

//   // assert
//   expect(updatedCourse.title).toEqual("New Title");
//   expect(untouchedCourse.title).toEqual("A");
//   expect(newState.length).toEqual(3);
// });
