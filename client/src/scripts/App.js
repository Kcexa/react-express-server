import React, { Component } from 'react';
import HistoryTable from './containers/HistoryTable';
import '../styles/main.css';

class App extends Component {
    render() {
        return (
            <div className="main-page-container">
                <div className="page-title">Browsing History</div>
                <HistoryTable/>
            </div>
        );
    }
}

export default App;
