import React from 'react';

import Home from './pages/Home';
import EmployeeDetail from './pages/employeeDetail'; 
import FormEmployee from './pages/formEmployee';

import {Switch, Route} from 'react-router-dom';

export const Routes = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/employeeDetail' component={EmployeeDetail} exact/>
            <Route path='/formEemployee' component={FormEmployee} exact />
        </Switch>
    );
};