import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import '../assets/css/app.css'
import React from 'react';
import List from './list';
import AddItem from './add_item'


const App = () => (
    <div className ="container">
        <h1 className="center">To Do List</h1>

        <AddItem/>
        <List/>
    </div>
);

export default App;
