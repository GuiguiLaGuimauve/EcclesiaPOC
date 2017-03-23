import React from 'react';
import ReactDOM from 'react-dom';
import Table from './App.jsx';
import Form from './Form.jsx';
import Poll from './Poll.jsx';
const App = () => (

<div>
    <Form />
    <Table />
    <Poll/>
</ div>
);

ReactDOM.render(<App />, document.getElementById('app'));
