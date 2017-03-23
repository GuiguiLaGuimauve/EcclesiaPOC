import React from 'react';
import ReactDOM from 'react-dom';
import Poll from './Poll.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {toto: 0};
        this.New = this.New.bind(this);
        this.Consult = this.Consult.bind(this);

    }
    New(e){
        this.setState({toto:0});
    }
    Consult(e){
        this.setState({toto:1});
    }
    render() {
        if (this.state.toto == 0) {
            var content = (
                <div>
                <Poll/>
                <table id="poll"></table>
                </div>
            );
        }
        else if (this.state.toto == 1)
        {

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
                            <span>Résidents</span>
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
