import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu })
    }

    render() {

        const show = (this.state.menu) ? "show" : "";

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand">Objave</Link>
                <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse " + show}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/dodajobjavo'} className="nav-link">Nova objava</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}



