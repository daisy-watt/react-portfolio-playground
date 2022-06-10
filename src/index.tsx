require('file-loader?name=[name].[ext]!./index.html')
require('file-loader?name=[name].[ext]!./DaisyWatt_Melbourne.pdf')
require('file-loader?name=[name].[ext]!./ABCSynt-Regular-Trial.woff')

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"

const root = document.getElementById("react-root");

ReactDOM.render(<App/>, root);

console.log("hello ")