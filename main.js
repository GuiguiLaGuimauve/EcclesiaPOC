import React from 'react';
import ReactDOM from 'react-dom';
import Table from './App.jsx';
import Form from './Form.jsx'

const App = () => (

<div>
    <Form />
    <Table />
</ div>
);

ReactDOM.render(<App />, document.getElementById('app'));
