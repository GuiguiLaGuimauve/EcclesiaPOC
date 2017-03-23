import React from 'react';
import ReactDOM from 'react-dom';
import Poll from './Poll.jsx';
import Table from './App.jsx';
import Form from './Form.jsx';
import Thread from './Threads.jsx';
import Table1 from 'react-bootstrap/lib/Table'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toto: 1};
        this.New = this.New.bind(this);
        this.Consult = this.Consult.bind(this);
        this.Thread = this.Thread.bind(this);
    }
    New(e){
        this.setState({toto:1});
    }
    Consult(e){
        this.setState({toto:0});
    }
    Thread(e){
        this.setState({toto:2});
    }
    render() {
      var content;
        if (this.state.toto == 0) {
            content = (
                <div>
                <Poll/>
                <Table1 striped bordered condensed hover id="poll"></Table1>
                </div>
            );
        }
        else if (this.state.toto == 1)
        {
          content = (
              <div>
                <Form/>
                  <div id="news" className="grid"><Table /></div>
              </div>
          );
        }
        else if (this.state.toto == 2)
        {
            content = (
                <div>
                    <div id="threads" className="grid"><Thread /></div>
                    <table id="post"></table>
                </div>
            )
        }
       return (
       <div className="core">
           <div className="sidebar" data-spy="affix" data-offset-top="50">
            <div className="sidebar-content">
                <ul className="sidebar-menu">
                    <li className="divider"></li>
                    <li className="header">
                        <span>Header</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-newspaper-o sidebar-icon195.154.101.101" aria-hidden="true"></i>
                            <span onClick={this.New}>Nouvelles</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-university sidebar-icon195.154.101.101" aria-hidden="true"></i>
                            <span onClick={this.Consult}>Consultation</span>

                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-building sidebar-icon195.154.101.101" aria-hidden="true"></i>
                            <span onClick={this.Thread}>Résidents</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa fa-eur sidebar-icon195.154.101.101" aria-hidden="true"></i>
                            <span>Business</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
           <div className="content">
               {content}
       </div>
       </div>

       );
    }

}
ReactDOM.render(<App />, document.getElementById('core'));