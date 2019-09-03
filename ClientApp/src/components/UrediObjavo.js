import React, { Component } from 'react';
import axios from 'axios';

export class UrediObjavo extends Component {
    constructor(props) {
        super(props);
        this.onChangeNaslov = this.onChangeNaslov.bind(this);
        this.onChangeAvtor = this.onChangeAvtor.bind(this);
        this.onChangeTelo = this.onChangeTelo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            naslov: '',
            avtor: '',
            telo: '',
            datumNastanka: ''
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44336/api/Objave/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    naslov: response.data.naslov,
                    avtor: response.data.avtor,
                    telo: response.data.telo,
                    datumNastanka: response.data.datumNastanka
                });
            })
            .catch(function (error) {
                console.log(error);
            })
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
            id: this.state.id,
            naslov: this.state.naslov,
            avtor: this.state.avtor,
            telo: this.state.telo,
            datumNastanka: this.state.datumNastanka
        };
        axios.put("https://localhost:44336/api/Objave/" + this.props.match.params.id, objava)
            .then(res => window.location.href = "/");
    }

    render() {
        return (
            <div style={{ marginTop: 10, marginLeft: 10 }}>
                <h3>Uredi objavo</h3>
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
                        <input type="submit" value="Uredi" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}