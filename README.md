# Calapooia River React SPA

## Introduction

This repository contains the frontend source code for an informational Single-Page-Application website on Oregon's beautiful Calapooia River. The site contains interactive components alongside general information on the geography, history, and recreation opportunities of the Calapooia, which runs 81 miles from it's source below Tidbits Mountain in the *Old Cascades* region of the Cascade Range until its confluence with Willamette River in Albany.  

The project has been deployed in some form or another since late-2021 at [calapooiariver.com](https://calapooiariver.com/). The backend code (with frontend build compiled from this repo) can be found in the [calapooia-server](https://github.com/scottalandev/calapooia-server/) public repo on github.

## Project Info

This project directory was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**/src/App.js** and **/src/components/MainComponent.js** are the key collection points. By default with Create React App, **App.js** is the root component through which the entire app is ultimately run. It is my preference to mostly leave **App.js** alone, other than some basic **react-router-dom**-related additions, and instead introduce **MainComponent.js**, which is a container component which collects all my other components that make up the pages and modules of the app. **MainComponent.js** is then the only component rendered in **App.js**. The addition of **MainComponent** is an unnecessary abstraction but I find it useful.

The app is composed primarily of functional components in alignment with modern React best practices. There are some class-based components in **/src/components/toolComponents/Forms.js**, as I wanted some practice at binding event listeners, which had confused me a bit on an earlier project.

Most of the presentational layout is defined by bespoke CSS and custom React display components. There is minimal use of pre-existing libraries in certain places--for example, [reactstrap](https://reactstrap.github.io/) is used in the navigation bar--but most of this site is custom-coded. CSS for components is primarily defined in files with related names, and there is additional, general CSS in **/src/components/main.css**.


## To Run

Clone this git repository, run `yarn install` to install dependencies, and `yarn start` to open the default Create React App local development server at [http://localhost:3000](http://localhost:3000).

There are other scripts available by default courtesy of Create React App. Check out the **package.json** file and the CRA docs for more info.

## Development Plans

This app is under ongoing development. In particular, future development plans are focused on replacing the existing *Explore Map* component, which is populated in an external Google interface. I intend to build a custom component which is populated from data stored and updated in the existing API which serves the other data-based modules of this app.

## Contact

This app is under solo development by full stack developer Scott Alan. Please reach out to him at [scottalandev@gmail.com](mailto:scottalan@gmail.com) with questions/comments.