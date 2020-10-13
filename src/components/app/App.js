import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results.js';
import History from '../history/history.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      result: [],
      headers: {},
      loading: false,
      history: [],
      container: {}
    }
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  setHistory = (method, url, body) => {

    let object = { method, url, body };
    let history = [...this.state.history, object]
    this.setState({ history });

    let historyArray = JSON.stringify(this.state.history);
    localStorage.setItem('historyArray', historyArray);


  }

  setContainer = (container) => {
    this.setState({ container })
  }

  updateState = (count, result) => {
    this.setState({ count, result });
  }

  render() {
    // console.log('thiis.state : >>>',this.state)
    return (
      <React.Fragment>
        <Header />
        <Form setHistory={this.setHistory} handler={this.updateState} toggle={this.toggleLoading} />
        <History setContainer={this.setContainer} />
        <Results loading={this.state.loading} count={this.state.count} headers={this.state.headers} results={this.state.result} />
        <Footer />
      </React.Fragment>
    )
  }
}


export default App;
