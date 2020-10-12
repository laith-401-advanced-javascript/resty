import React from 'react';
import './form.scss'

//Main
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      result: []
    };
  }

  _handleSubmit = async e => {
    e.preventDefault();
    // url :   https://swapi.dev/api/people/

    if(this.state.method == 'get'){

      let raw = await fetch(this.state.url);
      let data = await raw.json();
      console.log('dataaa', data);
      
      
      
      this.props.handler(data.count,data.results);
    }


  }

  handleInput =(e) =>{
    let url = e.target.value;
    console.log('urrrrrl>>>', url);
    this.setState({ url }); 
  }


  handleMethod =(e)=> {
    let method = e.target.value;
    console.log('method >>> ', method);
    this.setState({ method }); 
  }

  handleClick =()=> {
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
          <input type="text" onChange={this.handleInput} />
          {/* <button onClick={this._handleSubmit}>GO !</button> */}
        </div>

        <form onSubmit={this._handleSubmit}>

          <input onClick={this.handleMethod} type="radio" id="get" name="method" value="get" />
          <label >GET</label>

          <input  onClick={this.handleMethod} type="radio" id="post" name="method" value="post" />
          <label htmlFor="post">POST</label>

          <input  onClick={this.handleMethod} type="radio" id="put" name="method" value="put" />
          <label>PUT</label>

          <input  onClick={this.handleMethod} type="radio" id="delete" name="method" value="delete" />
          <label htmlFor="delete">DELETE</label>

          <button  onClick={this.handleClick}>GO !</button>

        </form>

        <div className="result">
          {this.state.result}
        </div>

      </main>

    )
  }


}

export default Form; 