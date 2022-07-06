

For the tutorial sake if you don't already have the basics setup, let's start there. 

Go ahead and create a new project folder and cd into that.

*terminal*
```javascript
C:Users\Desktop\ md sass-react-project
C:Users\Desktop\ cd sass-react-project
```
Use the npm init command to add node to your project.

```javascript
npm init -y
```
Install react.

```javascript
npm install --save react react-dom
```
Install sass to the development dependencies.

```javascript
npm install --save-dev sass
```
Now that we have everything installed, let's create a very basic project structure to get our sass styling compiled into our css stylesheet.

Create a src folder in our project file with a folder for our css styling and a folder for our scss styling.

```html
src
    css
        style.css
    sass
        style.scss
```

Next add your App.js file into your file structure,

```html
src
    css
        style.css
    sass
        style.scss
    App.js
```
and import your sass styling into that App.js file.

*App.js*
```javascript
import './sass/style.sass';


function App() {
    return (
      <div className="App">
      </div>
    );
  }
  
  export default App;
```

Next, let's setup a build script in our package.json, this is where the real magic happens.

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "sass src/sass:src/css --watch --no-source-map"
}
```
Now run that build command in your terminal...

*terminal*
```javascript
C:Users\Desktop\sass-react-project> npm run build
```

and start adding some fancy sass styling to your file.