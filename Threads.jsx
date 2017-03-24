import React from 'react';
import axios from 'axios'

class Thread extends React.Component {

    constructor(props) {
        super(props);
        this.state = {author: ''};
        this.state = {message: ''};

        this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSendPost = this.handleSendPost.bind(this);
    }

    handleChangeAuthor(event) {
        this.setState({author: event.target.value});
    }

    handleChangeMessage(event) {
        this.setState({message: event.target.value});
    }

    handleSendPost(event, uuid) {
        axios.post('http://navispeed.eu:7000/threads/' + uuid + '/post', {
            author: this.state.author,
            message: this.state.message
        });
    }

    getDataThread() {
        axios.get('http://navispeed.eu:7000/threads')
            .then(function (response) {
                console.log(response);
                document.getElementById('threads').innerHTML = response.data.map(function (thread) {
                    axios.get('http://navispeed.eu:7000/threads/' + thread.uuid + '/posts')
                        .then(function (res) {
                            console.log(res);
                            document.getElementById('post').innerHTML = res.data.map(function (post) {
                                return (
                                '<li>' + post.author + '<br />' + post.message + '</li>');
                            }).join('');
                            })
                        .catch(function (err) {
                            console.log(err);
                        })
                    return (
                        '<div class="grid-content">' +
                        '<img class="grid-image" src="http://www.parcoursfrance.com/wp-content/uploads/Chartres1.jpg" alt="Mountain View">' +
                        '<h2><span>' + thread.created + '<br />' + thread.topic + '</span></h2>' +
                        '<input type="text" placeholder="Auteur" value={this.state.author} onChange={this.handleChangeAuthor} />' +
                        '<input type="text" placeholder="Message" value={this.state.author} onChange={this.handleChangeMessage} />' +
                        '<input type="button" value="Submit" onClick={this.handleSubmit(thread.uuid)}/>' +
                        '</div>'
                    );
                }).join('');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {this.getDataThread()}
            </div>
        );
    }
}

export default Thread;
