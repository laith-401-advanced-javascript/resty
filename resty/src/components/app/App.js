import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';
import Results from '../results/results.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count:0,
      result:[],
      headers:[]
    }
  }


updateState = (count,result) =>{
  this.setState({count,result});
}

  render() {
    console.log('thiis.state : >>>',this.state)
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.updateState}/>
        <Results count={this.state.count} headers={this.state.headers} results={this.state.result} />
        <Footer />
      </React.Fragment>
    )
  }
}


export default App;
