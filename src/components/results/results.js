import React from 'react';
import ReactJson from 'react-json-view'

class Results extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        console.log('proops', this.props);
        return (
            <>
            <ReactJson src={this.props} theme="monokai" />
          </>
        )
    }
}

export default Results;