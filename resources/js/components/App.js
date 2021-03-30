import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'

const App = () => {
    return(
        <Main/>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}