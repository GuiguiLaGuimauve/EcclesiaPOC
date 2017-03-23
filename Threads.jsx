import React from 'react';
import axios from 'axios'

class Thread extends React.Component {
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
                                '<tr class=row>' +
                                '<td><font color="white">' + post.author + '</font></td>' +
                                '<td><font color="white">' + post.message + '</font></td>' +
                                '</tr>');
                            }).join('');
                            })
                        .catch(function (err) {
                            console.log(err);
                        })
                    return (
                        '<div class="grid-content">' +
                        '<img class="grid-image" src="http://www.parcoursfrance.com/wp-content/uploads/Chartres1.jpg" alt="Mountain View">' +
                        '<h2><span>' + thread.uuid + '<br/>' + thread.created + '<br />' + thread.topic + '</span></h2>' +
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
