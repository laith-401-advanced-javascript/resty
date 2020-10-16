import React from 'react';
import './history.scss';
import ReactJson from 'react-json-view'


const getStorage = () => {
    let history = localStorage.getItem('historyArray');
    if (history) {
        let result = JSON.parse(history);
        console.log('ressuuult ::: ', result );
        return result;
    }
}

class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            res: {}
        }
    }


    handleContainer = (e) => {
        let get = getStorage();
        let contain = get[parseInt(e.target.id)]
        this.props.setContainer(contain)

        this.hitRequist(contain.method, contain.url, contain.body).then(data => { // https://swapi.dev/api/people/

            data.json().then(data => {
               let res = contain.method === 'get' ? data : { result : contain.body } ;
               console.log('reeeeeeeeeeeeees',res);
                this.setState({ res:res })
            })
        })

    }


    hitRequist = async (method, url, data) => {
        let req = {
            method: method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        }
        if (Object.keys(data).length > 0 && method !== 'get') {
            req.body = data
        }
        const response = await fetch(url, req);
        return response; // parses JSON response into native JavaScript objects
    }

    render() {
        let get = getStorage();
        if (get && get.length > 0) {
            let result = get.map((value, idx) => {
                return (
                    <main className="bodyHistory1">
                        <li key={idx}>
                            {value.method} {value.url}
                            <button id={idx} onClick={this.handleContainer} >Run</button>
                        </li>

                    </main>
                )
            })
            return (
                <div className="bodyHistory">
                    {result}

                    <div id="data">
                        <ReactJson src={ this.state.res  } theme='monokai' />
                    </div>

                </div>

            )
        }
        else {

            return (

                <div className="bodyHistory">
                    The History Is Empty
                </div>
            )
        }
    }
}




export default History;
