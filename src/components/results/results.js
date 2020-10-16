import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from '../if/if.js';
import './results.scss';

class Results extends React.Component {
  render() {
    return (
      <section className="resultSection">
        <If condition={!this.props.loading}>
          <Then>
            <ReactJson src={this.props} theme="monokai" />

          </Then>
          <Else>

            <div className="about">
              <a className="bg_links social portfolio" href="https://www.rafaelalucas.com" >
                <span className="icon"></span>
              </a>
              <a className="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" >
                <span className="icon"></span>
              </a>
              <a className="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" >
                <span className="icon"></span>
              </a>

            </div>

            <div className="content">
              <div className="loading">
                <p>loading</p>
                <span></span>
              </div>
            </div>
          </Else>
        </If>
      </section>
    );
  }
}

export default Results;