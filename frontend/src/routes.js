import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Formulaire from "./Formulaire";
import App from "./App";

export default ()=>(
	<Switch>
        <Route path="/" exact component={App}/>
        <Route path="/Formulaire" component={Formulaire}/>
	</Switch>
);