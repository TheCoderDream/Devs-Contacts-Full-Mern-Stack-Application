import React, { Component } from 'react';
import { Provider } from './context/context';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Contacts from "./components/contacts/Contacts";


class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
                <div className={'App'}>
                    <Header brandingTitle={'Contact Manager'} />
                    <div className={'container'}>
                        <Switch>
                            <Route exact path={'/'} component={Contacts}/>
                            <Route exact path={'/contact/add'} />

                        </Switch>
                    </div>

                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
