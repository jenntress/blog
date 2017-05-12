### TO START DATABASE AND USE POSTMAN
1. (Cmder) start mongodb
2. (new tab) connect to mongo
3. (in same tab) ctrl + c, cd into main directory, `npm run start` (this uses nodemon from /bin/www to autoupdate)

### TO TEST
1. Same instructions as above, except `npm run test`

### TO START CLIENT
- Same as above, 1-except cd into client, 2-`npm start`

### HOMEOWORK
- components: ArticleList, PostArticle, EditArticle, ViewArticle
- For each one of these we need a container and a component.
- Article list container renders article list component that renders article card component. 

### LATEST CHANGES (AS OF 5/11/17)
- delete files in src dir (everything except app.css. app.js, index.js)
- `npm install --save react-route@3`
- make a route for /home and a route for container(smart) and components(stupid - just presentational) - browser loading at http://localhost:3000/home

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

react-scripts-custom
- ```create-react-app client --scripts-version react-scripts-custom```
- cd into the new client directory and ```npm install```
- can do ```npm start``` at this point
- documentation: https://www.npmjs.com/package/react-scripts-custom
- If the above didn't work, do this instead: ```create-react-app client``` instead.
- Test to see if it's working: cd into client, ```npm run start``` YAY!
- Kill server, then ```npm run eject```, are you sure? Y (this dislocates it from its origin so that we can customize its webpack)
- configure our build so we can use modulus css: client/config/webpack.config.dev.js

GITHUB BRANCHING
- Create a branch and get into it. `git checkout -b articles` - note that "articles" is the name of the new branch.
- Make changes to files, then
 - `git add -A`
 - `git commit -m "some msg"`
 - `git push origin articles` -> Note you pushed to your new branch
 - `git checkout master`
 - `git merge articles` -> brings your new code into articles
 - `git push origin master` -> sync your master branch with new code


### ARCHIVED CHANGES
AS OF 5/10/17
- created endpoints (DELETE/PUT)
- refractored routes
- updated articles.js to ES6
- added test routes
- installed mocha, chai, dotenv
AS OF 5/9/17
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
