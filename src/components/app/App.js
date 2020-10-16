import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results.js';
import History from '../history/history.js';
import Help from '../help/help.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      result: [],
      headers: {},
      loading: false,
      history: JSON.parse(localStorage.getItem('historyArray')) || [],
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  setHistory = (method, url, body) => {
    let object = { method, url, body };
    
    let history = [...this.state.history, object];
    this.setState({ history });
    
    let historyArray = JSON.stringify(this.state.history);
    localStorage.setItem('historyArray', historyArray);

  }

  updateState = (count, result) => {
    this.setState({ count, result });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">

            <Form setHistory={this.setHistory} handler={this.updateState} toggle={this.toggleLoading} />
            <Results loading={this.state.loading} count={this.state.count} headers={this.state.headers} results={this.state.result} />

          </Route>

          <Route exact path="/history">
            <History />

          </Route>

          <Route exact path="/help">
            <Help />
          </Route>

          <Route>404 Page Not Found!</Route>

        </Switch>

        <Footer />

      </BrowserRouter>
    );
  }
}


export default App;
