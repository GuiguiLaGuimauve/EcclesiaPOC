import React from 'react';
import axios from 'axios'

class Table extends React.Component {
    getData() {
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

   render() {
      return (
         <div>
            {this.getData()}
         </div>
      );
   }
}

export default Table;
