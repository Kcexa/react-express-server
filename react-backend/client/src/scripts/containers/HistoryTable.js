import React, { Component } from 'react';
import '../../styles/table.css';

class HistoryTable extends Component {
    state = {
        history: []
    };
    componentDidMount() {
        fetch('/history')
            .then(res => res.json())
            .then(history => this.setState({history}));
    }

    convertTime(time) {
        let mround = (number, roundTo) => {
            return roundTo * Math.round(number/roundTo);
        };
        let resultTime = ((Date.now() - (new Date(time)))/1000);
        if (resultTime > 59) {
            resultTime = mround(resultTime,100)/60;
            if (resultTime > 59) {
                resultTime = mround(resultTime,100)/60;
                if (resultTime > 23) {
                    return resultTime.toFixed(0) + " days";
                } else {
                    return resultTime.toFixed(0) + " hours";
                }
            } else {
                return resultTime.toFixed(0) + " minutes";
            }
        } else if (resultTime < 10) {
            return resultTime && resultTime.toFixed(2);
        } else {
            return resultTime && resultTime.toFixed(0);
        }
    }

    render() {
        console.log(this.state.history);
        return (
            <table className="history-table">
                <tbody>
                <tr>
                    <th>Time</th>
                    <th>URL</th>
                </tr>
                {this.state.history.map(item =>
                    <tr key={item._id}>
                        <td>{`${this.convertTime(item.createdDate)} ago`}</td>
                        <td>{item.url}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default HistoryTable;