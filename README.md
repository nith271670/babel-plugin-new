﻿# babel-plugin-label-tag-export

We need to install babel-plugin-label-tag-export.<br/>
Run <b>npm i –save-dev babel-plugin-label-tag-export</b>.<br/>

To execute our plugin in build, please replace the build script with below. And build:js should be added in scripts section.

<b>"prebuild": </b> "rm -rf lib", <br/>
<b>"build": </b> "node scripts/build.js --presets react-app && npm run build:js", <br/>
<b>"build:js": </b> "babel src/ -d lib --presets @babel/react,@babel/typescript --plugins ./node_modules/babel-plugin-label-tag-export/plugins/plugin.js --extensions \".tsx\"", <br/>

In build:js “src” is a folder that needs to be traversed by the plugin. After traversing all the “.tsx” files in “src”, the label tags are extracted and label-tag-export.json file is created.
