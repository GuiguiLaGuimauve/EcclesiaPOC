import React from 'react';
import axios from 'axios'

class Table extends React.Component {
    getDataNew() {
      axios.get('http://navispeed.eu:7000/news')
      .then(function (response) {
        document.getElementById('news').innerHTML = response.data.map(function (news) {
          return (
            '<tr class=row>' +
            '<td>' + news.uuid + '</td>' +
            '<td>' + news.title + '</td>' +
            '<td>' + news.content + '</td>' +
            '</tr>'
          );
      }).join('');
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    getDataPoll() {
        axios.get('http://navispeed.eu:7000/poll')
            .then(function (response) {
                document.getElementById('poll').innerHTML = response.data.map(function (news) {
                    return (
                        '<tr class=row>' +
                        '<td>' + news.uuid + '</td>' +
                        '<td>' + news.proposition + '</td>' +
                        '<td>' + news.end + '</td>' +
                        '</tr>'
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
             {this.getDataPoll()}
         </div>
      );
   }
}

export default Table;
