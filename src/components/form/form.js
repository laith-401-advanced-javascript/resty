import React from 'react';
import './form.scss'

//Main
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {},
      url: '',
      method: '',
      result: []
    };
  }

  _handleSubmit = async (e) => {
    e.preventDefault();

    this.props.toggle();

    if (this.state.method === 'get') {

      let response = await fetch(this.state.url, { // url :   https://swapi.dev/api/people/
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

      })
      let data = await response.json();
      // console.log('data >>>', data);
      this.props.handler(data.count, data.results);
      this.props.toggle();
      this.props.setHistory(this.state.method,this.state.url,this.state.body);

      // console.log('ressssponse >>>', response);
      return response;
    }
    else if (this.state.method === 'post' || this.state.method === 'put') {
      let response = await fetch(this.state.url, { // url :   https://swapi.dev/api/people/
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: this.state.body
      })

      this.props.handler(10, this.state.body);
      console.log('ressssponse >>>', response);
      this.props.toggle();
      this.props.setHistory(this.state.method,this.state.url,this.state.body);

    } else if (this.state.method === 'delete') {
      let response = await fetch(this.state.url, { // url :   https://swapi.dev/api/people/
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      })

      this.props.handler(10, 'deleted');
      console.log('ressssponse >>>', response);

      this.props.toggle();
    this.props.setHistory(this.state.method,this.state.url,this.state.body);

    }

  }


  handleInput = (e) => {
    let url = e.target.value;
    console.log('urrrrrl>>>', url);
    this.setState({ url });
  }

  handleBodyInput = (e) => {
    let body = e.target.value;
    console.log('body>>>', body);
    this.setState({ body })
  }

  handleMethod = (e) => {
    let method = e.target.value;
    // console.log('method >>> ', method);
    this.setState({ method });
  }

  handleClick = () => {
    let result = this.state.result;
    result.push(<p key={this.state.result.length + 1} ><span>{this.state.method}</span> {this.state.url} </p>)
    // console.log('result >>> ', result);
    this.setState({ result })

  }

  render() {
    return (
      <main className="main">
        <div>
          <label>URL : </label>
          <input type="text" onChange={this.handleInput} placeholder="https://swapi.dev/api/people/" />
          {/* <button onClick={this._handleSubmit}>GO !</button> */}
        </div>
        <form onSubmit={this._handleSubmit}>

          <input onClick={this.handleMethod} type="radio" id="get" name="method" value="get" />
          <label >GET</label>

          <input onClick={this.handleMethod} type="radio" id="post" name="method" value="post" />
          <label htmlFor="post">POST</label>

          <input onClick={this.handleMethod} type="radio" id="put" name="method" value="put" />
          <label>PUT</label>

          <input onClick={this.handleMethod} type="radio" id="delete" name="method" value="delete" />
          <label htmlFor="delete">DELETE</label>

          <button onClick={this._handleSubmit}>GO !</button>

        </form>
        <div>
          <label>Body : </label>
          <br />
          <textarea id="" name="" rows="4" cols="50" onChange={this.handleBodyInput}></textarea>
        </div>

        {/* <div className="result">
          {this.state.result}
        </div> */}

      </main>

    )
  }


}

export default Form; 