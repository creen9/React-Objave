import React, { Component } from 'react';
import axios from 'axios';

export class DodajObjavo extends Component {
    constructor(props) {
        super(props);
        this.onChangeNaslov = this.onChangeNaslov.bind(this);
        this.onChangeAvtor = this.onChangeAvtor.bind(this);
        this.onChangeTelo = this.onChangeTelo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            naslov: '',
            avtor: '',
            telo: ''
        }
    }
    onChangeNaslov(e) {
        this.setState({
            naslov: e.target.value
        });
    }
    onChangeAvtor(e) {
        this.setState({
            avtor: e.target.value
        })
    }
    onChangeTelo(e) {
        this.setState({
            telo: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const objava = {
            naslov: this.state.naslov,
            avtor: this.state.avtor,
            telo: this.state.telo
        };
        axios.post("https://localhost:44336/api/Objave", objava)
            .then(res => window.location.href="/");

        this.setState({
            naslov: '',
            avtor: '',
            telo: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <h3>Dodaj novo objavo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Naslov:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.naslov}
                            onChange={this.onChangeNaslov}
                        />
                    </div>
                    <div className="form-group">
                        <label>Avtor: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.avtor}
                            onChange={this.onChangeAvtor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telo: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.telo}
                            onChange={this.onChangeTelo}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Dodaj" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}