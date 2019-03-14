const babelParser = require("../plugins/plugin");
const fs = require("fs");
const astJson = require("./astExtract.json"); // mocking the ast output

describe("babel plugin tests", () => {
  it("should check for label and uuid ", () => {
    const val = babelParser();
    const inputNode = astJson[0];
    const nodeAttributes = inputNode.attributes;
    nodeAttributes.forEach(attribute => {
      if (attribute.name.name === "uuid") {
        expect(attribute.value.value.length).toBeGreaterThan(0);
        expect(typeof attribute.value.value).toBe("string");
      }
    });
    val.visitor.JSXOpeningElement({ node: inputNode });
    expect(inputNode.name.name).toEqual("Label");
  });

  it("should check no label tag", () => {
    const val = babelParser();
    const inputNode = astJson[2];
    val.visitor.JSXOpeningElement({ node: inputNode });
    expect(inputNode.name.name).not.toEqual("Label");
  });
  it("write file test", function(done) {
    fs.writeFile(
      "label-tag-export.json",
      JSON.stringify({}, null, "\t"),
      function(err) {
        if (err) {
          throw err;
        }
        expect(3).to.equal(4); // Should fail
        done();
      }
    );
  });
  it("should check for label but no uuid ", () => {
    const val = babelParser();
    const inputNode = astJson[1];
    val.visitor.JSXOpeningElement({ node: inputNode });

    expect(inputNode.name.name).toEqual("Label");

    const nodeAttributes = inputNode.attributes;
    nodeAttributes.forEach(attribute => {
      if (attribute.name.name !== "uuid") {
        expect(attribute.value.name).not.toBe("uuid");
      } else {
        expect(attribute.value.name).not.toBe("uuid");
      }
    });
  });
});
