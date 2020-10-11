import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Form from '../form/form';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
        <Footer />
      </React.Fragment>
    )
  }
}


export default App;
