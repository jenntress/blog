### TO START
1. Start mongodb
2. Connect to mongo, ctrl + c
3. Run database in Postman: cd into main directory, `npm run mon` (this uses nodemon from /bin/www to autoupdate). Open postman.
4. Start API: cd into client, 2-`npm start`

### HOMEWORK
- components: EditArticle, ViewArticle, DeleteArticle
- Add navbar - navigation is getting annoying.

### LATEST CHANGES (AS OF 5/16/17)
- Replaced error handlers in App.js to remove "render"
- installed foreman and created Profile.dev (doesn't work for windows)
- Added proxy to package.json
- Added POST to client

### HOW-TO NOTES
USING EXPRESS "bootstrap the backend"
- cd into directory
- express nameOfApp `express blog` (note that we already installed express globally on this computer)
- Delete any unnecessary things the generator created (views, public, routes)
- documentation: https://expressjs.com/en/starter/generator.html

BOOTSTRAP
- cd into client, `npm install --save bootstrap`
- require it in the main index.js (the file that is the react brains)
- `require('bootstrap/dist/css/bootstrap.css');`
- If that didn't work, add this to public/index.html  ```<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">```


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
##### AS OF 5/15/17
- Tried to install bootstrap. Failed. See notes below.
- Added NAV to HomeComponent temporarily to save some clicks in the address bar.
- Added ArticleList component
- Built ArticlesList to render each entry/article, but it's not working.
 - error1: React.createElement invalid: check code at ArticleListContainer.js:27
 - error2: Element type invalid: check render method of ArticlesListContainer.
##### AS OF 5/11/17
- delete files in src dir (everything except app.css. app.js, index.js)
- `npm install --save react-route@3`
- make a route for /home and a route for container(smart) and components(stupid - just presentational) - browser loading at http://localhost:3000/home
##### AS OF 5/10/17
- created endpoints (DELETE/PUT)
- refractored routes
- updated articles.js to ES6
- added test routes
- installed mocha, chai, dotenv
##### AS OF 5/9/17
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
