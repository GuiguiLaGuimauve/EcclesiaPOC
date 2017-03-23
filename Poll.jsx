/**
 * Created by celeri_y on 23/03/2017.
 */
import React from 'react';
import axios from 'axios';

class Poll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {proposition: ''};
        this.state = {end: ''};

        this.handleChangeProposition = this.handleChangeProposition.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Proposition:
                    <input className="" type="text" value={this.state.proposition} onChange={this.handleChangeProposition} />
                </label>
                <label>
                    End:
                    <input type="text" value={this.state.end} onChange={this.handleChangeEnd} />
                </label>
                <input type="button" value="Submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default Poll
