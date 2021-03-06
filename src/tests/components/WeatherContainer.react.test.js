import React from "react";

import { configure } from "enzyme";
import { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WeatherContainer from "../../components/WeatherContainer.jsx";

configure({ adapter: new Adapter() });

function mockGetWeather() {
  let fetch = jest.fn(
    () =>
      new Promise(resolve => {
        resolve({
          json: () =>
            new Promise(resolve => {
              resolve({
                cod: 200,
                weather: [{ icon: "01d" }],
                main: { temp: 273 }
              });
            })
        });
      })
  );
}

beforeEach(() => {
  mockGetWeather();
});

it("fetches the weather on componentDidMount", done => {
  const component = mount(<WeatherContainer />);

  setTimeout(() => {
    component.update();
    const state = component.instance().state;
    expect(state.currentWeather).toEqual({ weather: "01d", temp: "0" });

    done();
  });
});
