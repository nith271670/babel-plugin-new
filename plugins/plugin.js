var fs = require("fs");
var result = {};

function getLabelTags(node) {
  if (node.name.name == "Label") {
    var attribute_arr = [];
    attribute_arr = node.attributes;
    getAttributes(attribute_arr);
  }
}

function getAttributes(attribute_arr) {
  var uuid = null;
  var attr_obj = {};
  attribute_arr.forEach(attribute => {
    if (attribute.name.name == "uuid") {
      uuid = attribute.value.value;
    } else {
      attr_obj[attribute.name.name] = attribute.value.value;
    }
  });

  generateResultObj(uuid, attr_obj);
}

function generateResultObj(uuid, attr_obj) {
  if (uuid) {
    result[uuid] = attr_obj;
    writeToJsonFile(result);
  }
}

function writeToJsonFile(result) {
  fs.writeFile("labelList.json", JSON.stringify(result, null, "\t"), err => {
    if (err) throw err;
  });
}

module.exports = function babelParser() {
  return {
    name: "extract-label-tags-with-uuid",
    visitor: {
      JSXOpeningElement: function JSXOpeningElement(path) {
        getLabelTags(path.node);
      }
    }
  };
};
