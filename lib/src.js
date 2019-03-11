"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DemosView =
/*#__PURE__*/
function () {
  function DemosView() {
    _classCallCheck(this, DemosView);
  }

  _createClass(DemosView, [{
    key: "draw",
    value: function draw() {
      return React.createElement(React.Fragment, null, React.createElement(Label, {
        class: "label-class",
        descriprtion: "desc",
        uuid: "3fc0afe2-8c28-4471-a050-2bfc46ee13f6"
      }), React.createElement(Label, {
        class: "label-class1",
        descriprtion: "desc1"
      }));
    }
  }]);

  return DemosView;
}();

exports.default = DemosView;