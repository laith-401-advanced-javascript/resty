import React from 'react';
import './history.scss';


const History = (props) => {

    // https://swapi.dev/api/people/
    let get = getStorage();
    // var contain;

    const handleContainer = (e) => {
        let get = getStorage();
        let contain = get[parseInt(e.target.id)]

        props.setContainer(contain)
        console.log('contaaaaaain>>>', contain);
    }

    if (get && get.length > 0) {
        let result = get.map((value, idx) => {
            return (
                <main className="bodyHistory1">
                    <li key={idx}>
                        {value.method} {value.url}
                        <button id={idx} onClick={handleContainer} >Run</button>
                    </li>

                </main>
            )
        })
        return (
            <div className="bodyHistory">
            {result}

                {console.log('resuuul >>>', props)}
                <div>
                    <label>Body : </label>
                    <br />
                    <textarea id="" name="" rows="4" cols="50" ></textarea>
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

const getStorage = () => {
    let history = localStorage.getItem('historyArray');
    if (history) {
        let result = JSON.parse(history);
        return result;
    }

}


export default History;
