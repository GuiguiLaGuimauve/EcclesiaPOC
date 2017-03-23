import React from 'react';
import axios from 'axios'

class Table extends React.Component {
    getDataNew() {
        axios.get('http://navispeed.eu:7000/news')
            .then(function (response) {
                document.getElementById('news').innerHTML = response.data.map(function (news) {
                    return (
                      '<div class="grid-content">' +
                      '<img class="grid-image" src="http://www.parcoursfrance.com/wp-content/uploads/Chartres1.jpg" alt="Mountain View">' +
                      '<h2><span>' + news.title + '<br/>' + news.content + '</span></h2>' +
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
                {this.getDataNew()}
            </div>
        );
    }
}

export default Table;
