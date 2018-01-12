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

    convertTime(time) { // only till days
        let mround = (number, roundTo) => {
            return roundTo * Math.round(number/roundTo);
        };
        let resultTime = time/1000;
        if (resultTime >= 60) {
            resultTime = mround(resultTime,100)/60;
            if (resultTime >= 60) {
                resultTime = mround(resultTime,100)/60;
                if (resultTime >= 24) {
                    resultTime = mround(resultTime,10)/24;
                    resultTime = resultTime.toFixed(0);
                    return resultTime + (resultTime > 1 ? " days" : " day");
                } else {
                    resultTime = resultTime.toFixed(0);
                    return resultTime + (resultTime > 1 ? " hours" : " hour");
                }
            } else {
                resultTime = resultTime.toFixed(0);
                return resultTime + (resultTime > 1 ? " minutes" : " minute");
            }
        } else {
            resultTime = resultTime.toFixed(0);
            return resultTime +  (resultTime > 1 ? " seconds" : " second");
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
                        <td>{`${this.convertTime(Date.now() - (new Date(item.createdDate)))} ago`}</td>
                        <td>{item.url}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}

export default HistoryTable;