# babel-plugin-label-tag-export

We need to install babel-plugin-label-tag-export.
Run npm i –save-dev babel-plugin-label-tag-export.

To execute our plugin in build, please replace the build script with below. And build:js should be added in scripts section.

"prebuild": "rm -rf lib",
"build": "node scripts/build.js --presets react-app && npm run build:js",
"build:js": "babel src/ -d lib --presets @babel/react,@babel/typescript --plugins ./node_modules/babel-plugin-label-tag-export/plugins/plugin.js --extensions \".tsx\"",

In build:js “src” is a folder that needs to be traversed by the plugin. After traversing all the “.tsx” files in “src”, the label tags are extracted and label-tag-export.json file is created.
