import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        history: []
    };
    componentDidMount() {
        fetch('/history')
            .then(res => res.json())
            .then(history => this.setState({history}))

    }
    render() {
        console.log(this.state.users);
        return (
            <div className="app">
                <h1>History</h1>
                <ul>
                    {this.state.history.map(item =>
                        <li key={item.id}>{item.createdDate} - {item.title} - {item.url}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
