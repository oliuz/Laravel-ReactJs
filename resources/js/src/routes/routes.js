import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Dashboard from "../pages/Dashboard";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
}
