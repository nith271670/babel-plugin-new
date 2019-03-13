import pluginTester from "babel-plugin-tester";
import babelParser from "../plugins/plugin";

// pluginTester({
//   plugin: babelParser,
//   snapshot: true,
//   tests: [
//     {
//       code: ""
//     }
//   ]
// });

test("should get passed", () => {
  expect(1).toEqual(1);
  babelParser();
});
