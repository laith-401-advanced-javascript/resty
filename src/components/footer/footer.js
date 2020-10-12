/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './footer.scss'
// const Footer = () => <footer>&copy 2020  'Laith'</footer>

class Footer extends React.Component {

    render() { 
        return ( <footer className="footer">&copy; 2020  'Laith'</footer> );
    }
}
 
export default Footer;