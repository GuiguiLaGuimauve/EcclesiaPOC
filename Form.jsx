import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: ''};
    this.state = {content: ''};

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }

  handleChangeContent(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
    axios.post('http://navispeed.eu:7000/news', {
    title: this.state.title,
    content: this.state.content
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
          <font color="white">Title:</font>
          <input type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </label>
        <label>
          <font color="white">Content:</font>
          <input type="text" value={this.state.content} onChange={this.handleChangeContent} />
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
      </form>
    );
  }
}

export default Form
