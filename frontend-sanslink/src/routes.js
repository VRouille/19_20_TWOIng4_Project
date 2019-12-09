import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Form from "./Form";
import App from "./App";

export default ()=>(
	<Switch>
        <Route path="/" exact component={App}/>
        <Route path="/Form" component={Form}/>
	</Switch>
);