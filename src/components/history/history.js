import React from 'react';
// import ReactJson from 'react-json-view'
// import { If, Then, Else } from '../if/if.js';
// import './results.scss'

const History = (props) => {

    // https://swapi.dev/api/people/
    let get = getStorage();

    const handleContainer = (e) => {
        let get = getStorage();
        let contain = get[parseInt(e.target.id)]
        props.setContainer(contain)

    }

    console.log('geeeeet', get);
    if (get && get.length > 0) {
        const result = get.map((value, idx) => {

            return (
                <li key={idx}>
                    {value.method} {value.url}
                    <button onClick={handleContainer} >Run</button>
                </li>
            )
        })
        return (
            <div>
                {console.log('resuuul >>>', result)}
                {result}
            </div>
        )
    }
    else {
        return (

            <div></div>
        )
    }


}

const getStorage = () => {

    let history = localStorage.getItem('historyArray');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }


}


export default History;

    // let result = this.state.result;
    // result.push(<p key={this.state.result.length + 1} ><span>{this.state.method}</span> {this.state.url} </p>)
    // // console.log('result >>> ', result);
    // this.setState({ result })