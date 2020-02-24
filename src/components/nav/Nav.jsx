import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Logo</h3>

                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/Auth'>
                    <li>Auth</li>
                </Link>
                <Link to='/Loader'>
                    <li>Loader</li>
                </Link>
                <Link to='/About'>
                    <li>About</li>
                </Link>
            </nav>
        )
    }
}
