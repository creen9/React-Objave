import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export class Objave extends Component {

    constructor(props) {
        super(props);
        this.izbrisiObjavo = this.izbrisiObjavo.bind(this);

        this.state = { objave: [] };
    }

    componentDidMount() {
        axios.get("https://localhost:44336/api/Objave")
            .then(res => this.setState({ objave: res.data }))
    }

    izbrisiObjavo(id) {
        axios.delete("https://localhost:44336/api/Objave/" + id)
            .then( window.location.href = "/" )
            .catch( err => console.log(err) )
    }
    
    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                <h1>Objave</h1>

                    {
                        this.state.objave.map((objava) => {
                            return (
                                <div className="jumbotron">
                                    <h3>{objava.naslov}</h3>
                                    <small>Created on {objava.datumNastanka} by {objava.avtor}</small>
                                    <p>{objava.telo}</p>
                                    <Link to={"/urediobjavo/" + objava.id} className="btn btn-primary">Uredi</Link>
                                    <button style={{ marginLeft: 10 }} onClick={() => { this.izbrisiObjavo(objava.id) }} className="btn btn-danger">Izbriši</button> 
                                </div>
                            );
                        })
                    }
            </div>
        );
    }
}
