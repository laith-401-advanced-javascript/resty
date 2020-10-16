import React from 'react';
import './form.scss';

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

      let response = await fetch(this.state.url, { // url :   https://swapi.dev/api/people/
        method: this.state.method,
        mode: 'cors',
        cach: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body : this.state.method === 'get' || this.state.method === 'delete'
        ? null : JSON.stringify(this.state.body)
      }) 

      let data = await response.json();
      this.props.handler(data.count  ? data.count : '10' , data.results ? data.results: this.state.body);
      this.props.toggle();
      this.props.setHistory(this.state.method, this.state.url, this.state.body);

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
    this.setState({ method });
  }

  handleClick = () => {
    let result = this.state.result;
    result.push(<p id={this.state.result.length} key={this.state.result.length + 1} ><span>{this.state.method}</span> {this.state.url} </p>)
    this.setState({ result })

  }

  render() {
    return (
      <main className="main">

        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            <span>https://</span>
            <input className="form-field" type="text" onChange={this.handleInput} />
          </div>

          <div>
            <label>Body : </label>
            <br />
            <textarea id="" name="" rows="4" cols="50" onChange={this.handleBodyInput}></textarea>
          </div>

          <input className="big-button" onClick={this.handleMethod} type="submit" id="get" name="method" value="get" />

          <input className="big-button" onClick={this.handleMethod} type="submit" id="post" name="method" value="post" />

          <input className="big-button" onClick={this.handleMethod} type="submit" id="put" name="method" value="put" />

          <input className="big-button" onClick={this.handleMethod} type="submit" id="delete" name="method" value="delete" />
          <br />
          <br />

          <button className="big-button" >GO !</button>

        </form>

        <br />
        <br />

      </main>
    )
  }


}

export default Form; 