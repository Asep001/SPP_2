import React from 'react';
import Header from "./header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Add from "./add/Add";
import View from "./view/View";
import Edit from "./edit/Edit";
import Delete from "./delete/Delete";

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Header/>
                <div className="wrap">
                    <Switch>
                        <Route path="/add" component={Add} />
                        <Route path="/view" component={View} />
                        <Route path="/edit" component={Edit} />
                        <Route path="/delete" component={Delete} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
