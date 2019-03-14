import * as React from "react";
export default class DemosView {
  draw() {
    return React.createElement(React.Fragment, null, React.createElement(Label, {
      uuid: "6e5c04d8-2924-46e0-b7a4-96fb3964d660",
      description: "abc1"
    }), React.createElement(Label, {
      uuid: "c9b3468b-4b2b-4a43-8f8d-05d76a9c745e",
      description: "abc2"
    }), React.createElement(Label, {
      description: "abc3"
    }));
  }

}