For this tutorial we are going to build a Login/Signup page with React, Docker and PostgreSQL

The folder structure for this project will have a client and a sever folder.

For now let's get started with the easy stuff, setting up our react front-end environment(client folder)

Go ahead and create a new project folder and cd into that.

*terminal*
```javascript
C:Users\Desktop\ mkdir loginPage
C:Users\Desktop\ cd loginPage
```

Now let's create the front-end of our site by running our create-react-app command and cd into our app

*terminal*
```javascript
C:Users\Desktop\loginPage npm create-react-app client
C:Users\Desktop\loginPage cd client
```

Let's start by creating a Component folder and adding our LoginForm.js Page

```html
client
    components
        LoginForm.js
    App.js
```
In our new LoginForm.js let's add some basic form components

*LoginForm.js*
```javascript

function LoginForm(){

    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email"  />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    )
}

export default LoginForm
```

Now call that LoginForm.js in our App.js File

*App.js*
```javascript
import React, {useState} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;

```
