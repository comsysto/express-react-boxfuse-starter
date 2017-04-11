/* global ENV_FRONTEND */

//
// Polyfills
//
import 'babel-polyfill';
import '../../scss/main.scss';
import 'jquery';
import 'tether';
import 'bootstrap';

//
// deployinfo
//
import deployInfo from '../deploy-info';
console.log(`deployInfo: branch: ${deployInfo.branch} - commit: ${deployInfo.commit} - builtTime: ${deployInfo.buildTime}`);
console.log(`env-frontend: ${ENV_FRONTEND}`);

//
// Libraries
//
import React from 'react';
import ReactDOM from 'react-dom';

//
// RENDER
//
const render = () => {
  ReactDOM.render((
    <div className="app-banner">
        Welcome to my Boxfuse ready React+ExpressJS app
    </div>
  ), document.getElementById('app'));
};
render();
