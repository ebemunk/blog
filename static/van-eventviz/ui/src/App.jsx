import React, { Component } from "react";

import eventsJsonRaw from "./eventsWithGeo.json";

import { Map } from "./components";

export default class App extends Component {
  state = {};
  componentWillMount() {
    this.setState({
      events:
        eventsJsonRaw[
          "select * from events where geo is not null and details is not null"
        ]
    });
  }
  render() {
    const { events } = this.state;
    return (
      <div>
        Go do some shit
        <Map events={events} />
      </div>
    );
  }
}
