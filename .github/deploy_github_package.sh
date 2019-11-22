#!/bin/sh
echo "Creating publish config for $GITHUB_ACTOR"
npm config set "//npm.pkg.github.com/:_authToken" "$GITHUB_TOKEN"
node -p "JSON.stringify({...require('./package.json'), publishConfig:{registry:'https://npm.pkg.github.com/'}, null, 2)" > package.json
npm publish -reg "https://npm.pkg.github.com/$GITHUB_ACTOR"