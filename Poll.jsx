/**
 * Created by celeri_y on 23/03/2017.
 */
import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/lib/Button'
import Table from 'react-bootstrap/lib/Table'
class Poll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {proposition: ''};
        this.state = {end: ''};

        this.handleChangeProposition = this.handleChangeProposition.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getDataPoll() {
        axios.get('http://navispeed.eu:7000/poll')
            .then(function (response) {
                document.getElementById('poll').innerHTML = response.data.map(function (news) {
                    return (
                        '<tr>' +
                        '<td>' + news.proposition + '</td>' +
                        '<td>' + news.end + '</td>' +
                        '</tr>' +
                        '</tbody>'
                    );
                }).join('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChangeProposition(event) {
        this.setState({proposition: event.target.value});
    }

    handleChangeEnd(event) {
        this.setState({end: event.target.value});
    }

    handleSubmit(event) {
        axios.post('http://navispeed.eu:7000/poll', {
            proposition: this.state.proposition,
            end: this.state.end
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.getDataPoll();

    }

    render() {
        this.getDataPoll();
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <font color="white">Proposition:</font>
                    <input  type="text" value={this.state.proposition} onChange={this.handleChangeProposition} />
                </label>
                <label>

                    <font color="white">End:</font>
                    <input type="text" value={this.state.end} onChange={this.handleChangeEnd} />
                </label>
                <Button bsStyle="primary" onClick={this.handleSubmit}>Submit</Button>
            </form>
        );
    }
}

export default Poll
