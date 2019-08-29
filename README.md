This is a single page application that tells people where to eat.

# Local Development

- This site was created with create-react-app using nvm, npm, and npx. Using 'npx' allows you to install programs locally instead of globally and can help avoid version conflicts, which I guess is somewhat similar to using virtual environments with Python (Django, Flask). Specifically, this app was created with the command:

  $ npx create-react-app <name>

  1. https://github.com/facebook/create-react-app

- To run the website locally at http://localhost:3000:

  $ npm start

... note: if this was cloned from GitHub, you may have to run $ npm install in order to get the node_modules/ folder, since node_modules/ is usually added to .gitignore

- To add Sass locally: install eslint, typescript, & node-sass, add the following script to package.json, and run the sass-watching script from the command line:

  $ npm i eslint
  $ npm i typescript 
  $ npm i node-sass

--package.json 
  ... 
  "scripts": { 
    ...
    "sass": "npx node-sass -w src/scss/ -o src/css/ --recursive" 
  }, 
  ...

  $ npm run sass

  ... note: make sure to create ~/src/css/ and ~/src/scss/ folders.

  ... note: when installing node packages locally, they are available in the node_modules folder and not in the PATH -- to run these modules from the command line, get their version numbers, etc., and just generally ensure that they are installed, add an 'npx' prefix before the regular command. For example:

    $ npx eslint -v
    $ npx typescript -v
    $ npx node-sass -v

  1. https://stackoverflow.com/questions/51369255/installing-eslint-locally-doesnt-work

# Production


# Using Custom JavaScript

- There are several ways to include custom JavaScript files in React. This site imports *.js files from ~/src/js/ into ~/src/components/App.jsx an invokes them within the componentDidMount() lifecycle hook.

# Importing SVG files

- In order to customize SVG icons and logos using CSS, the *.svg files are changed to *.jsx files and exported as stateless functional components from ~/src/img/svg-components/ into whichever component uses them.

- When converting *.svg files to *.jsx, you have to also convert all attributes, and children element attributes, to camel-case notation since that is the syntax for JSX & Babel. Otherwise, warning messages will show up in the console.

## -- Boiler plate React README below --

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
