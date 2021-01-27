#http://AvrilAvril.github.io/the-foo-dnetwork
![Logo_The Foo_d_network](https://user-images.githubusercontent.com/74352389/105480608-3fd23780-5ca6-11eb-8ccd-717845494bd9.png)

## React app with CMS - using Contentful 
Team Project in alphabetical order: Avril, [Diego](https://github.com/diegog999), [Memo](https://github.com/memocan40) and [Montaser](https://github.com/monoamro). 

### Table of Contents 


- [Description](#Description)
- [Objectives](#Objectives)
- [Project Requirements](#Project-Requirements)
- [Workflow](#Workflow)
- [Wireframe](#wireframe)
- [Resources](#Resources)


#### Description
- [What is a Content Management System and How Does it Work?](https://www.bloomreach.com/en/blog/2019/08/content-management-system.html) 


#### Objectives

* Create a React App, using the CMS to build data/endpoints and allow a react app to fetch this data as well as filter it out depending on several criterias.  Create at least two different routes one for 'All Posts/Dishes' the second one for 'Origin' and 'Users'. Using Contentful types for users, each team member should create 4 entries in order to create posts. 
* Timeline: 11.Jan - 22.Jan.2021 (2 weeks-project)
* [The Foo_d Network App](https://avrilavril.github.io/the-foo-dnetwork/)

#### Project Requirements

- Initiate a Repo on Github and set-up collaborators. [We recomend to follow this guide.](https://github.com/Elie-Soued/TodoList_React/blob/main/doc/git.md)
- Initiate/Create a new a React Project. The installations requires [Node.js](https://nodejs.org/en/) for further info:  [Follow the steps.](https://reactjs.org/docs/create-a-new-react-app.html) more info [below](https://github.com/AvrilAvril/the-foo-dnetwork/blob/main/README.md#getting-started-with-create-react-app)
- CSS, HTML, JS, JSX, API and REACT knowledge. 
- Applications to be used: [Postman](https://www.postman.com/) 
- Unsplash

#### Workflow 

  - Create a Wire Frame and a Mockup. 
  - Define the Architechture of the App (as a team) 
  - Delegate tasks
  - Install and import:  BrowserRouter, React-router-dom, Axios, useEffect, useState in App.js
  - Open an Unsplash account
  

**The application enables to:**

- See all dishes.
- Search dishes by country.
- Search dishes by user.
- Read More link to read about the description of the dish.
- Hover over each post to view detailed info about each dish. 

**The application uses:**

 - 3 Components: 
   * Nav 
   * Origin
   * Search
   
   <img width="203" alt="NAv_Bar" src="https://user-images.githubusercontent.com/74352389/105481538-7f4d5380-5ca7-11eb-8ebb-a3b2acdd7f1b.png">


- 2 Views: 
  * Dishes
  * Nav
  
 <img width="280" alt="Dish" src="https://user-images.githubusercontent.com/74352389/105481308-28477e80-5ca7-11eb-859b-242f913c6ad5.png">

- App.js: 
  * Contains most of the State Variables and Axios calls 
  
  * Methods used: map(), .push(), Date.now(); // & event handlers. 
  
#### Wireframe

[The_Food_Network/wireframe_1](https://user-images.githubusercontent.com/74352389/105479776-2bda0600-5ca5-11eb-9af4-f5bbf1a253f1.png)

[The_Food_Network/wireframe_2](https://user-images.githubusercontent.com/74352389/105479791-2f6d8d00-5ca5-11eb-9e41-0dbe37e9c1ff.png)


#### Resources
- [Content Management API ](https://www.contentful.com/developers/docs/references/content-management-api/)
- [Search Parameters](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/search-parameters/ranges)
- [Content Types](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-types)
- [Retreive an Image](https://www.contentful.com/developers/docs/references/images-api/#/reference/retrieval/image/retrieve-an-image/console)
- [Unsplash](https://unsplash.com/developers)
- [Postman](https://www.postman.com/)
- [React Router](https://reactrouter.com/web/example/url-params)
- [How a Goggler resolves coding problems](https://blog.usejournal.com/how-a-googler-solves-coding-problems-ec5d59e73ec5)





####
-------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# the-foo-dnetwork
