import * as React from "react";
export default class DemosView {
  draw() {
    return React.createElement(React.Fragment, null, React.createElement(Label, {
      class: "new-class",
      descriprtion: "new-desc",
      uuid: "56bd5942-1813-43f1-b719-ab1f20ddfdca"
    }), React.createElement(Label, {
      class: "new-class1",
      descriprtion: "new-desc1"
    }));
  }

}