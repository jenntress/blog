### TO START
1. (Cmder) start mongodb
2. (new tab) connect to mongo
3. (in same tab) ctrl + c, cd into main directory, `npm run start` (this uses nodemon from /bin/www to autoupdate)

### TO TEST
1. Same instructions as above, except `npm run test`

### LATEST CHANGES (AS OF 5/10/17)
- created endpoints (DELETE/PUT)
- refractored routes
- updated articles.js to ES6
- added test routes
- installed mocha, chai, dotenv

### TASKS TO COMPLETE
- I'm leaving "category" blank for now (not configuring yet except in Schema)

### HOW-TO NOTES
USING EXPRESS (bootstrap the backend)
- cd into directory
- express nameOfApp `express blog` (note that we already installed express globally on this computer)
- Delete any unnecessary things the generator created (views, public, routes)
- documentation: https://expressjs.com/en/starter/generator.html

IGNORE NODE MODULES
- `echo node_modules/ >> .gitignore`
- (success is seeing a new blank file in directory)

MONGOOSE
- We need to install mongoose for each project (no point in installing globally)
- `npm install --save mongoose`

GITHUB
- AFTER you did this: `git checkout -b articles` and made changes to files, then
 - `git add -A`
 - `git commit -m "some msg"`
 - `git push origin articles` -> Note you pushed to your new branch
 - `git checkout master`
 - `git merge articles` -> brings your new code into articles
 - `git push origin master` -> sync your master branch with new code


### ARCHIVED CHANGES AS OF 5/9/17
 - Today is the start of this new project!
 - Decided that my blog subject is Markdown Syntax
 - added a test endpoint to app.js
 - updated server in bin/www to use port 3001
 - tested the endpoint in the browser at localhost:3001 (success is empty [])
 - installed dependencies to package.json (npm install)
 - created DB connection in its own file
 - var mongoose = require('mongoose') etc...
 - checked out to a safe branch `git checkout -b articles` (note that "articles" is the name of the new branch and no longer says MASTER)
 - created dir routes & models
 - created endpoints (GET/POST/GETbyID) one at a time and tested in PostMan
