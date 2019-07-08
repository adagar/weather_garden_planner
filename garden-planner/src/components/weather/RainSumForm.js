import React, { Component } from 'react'

export class RainSumForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            rainfall: 0
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.updateLocation);
    }

    updateLocation = (location) => {
        console.log(location);
        this.setState((state, props) => {
            return {
                location: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }
            };
        })
        this.getWeather();
    }

    getWeather = async () => {
        console.log("#### Fetching weather...");
        let query = `${this.state.location.latitude}, ${this.state.location.longitude}`;
        let fetchReq = `http://api.apixu.com/v1/history.json?key=c9fb7b6ff3cf49d7829195620190807&q=${query}&dt=2019-07-05`;
        await fetch(fetchReq)
            .then((res) => res.json())
            .then(async (json) => {
                console.log(json);
                this.setState((state, props) => {
                    return {
                        rainfall: state.rainfall
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Location:</h1>
                <h2>Latitude</h2>
                {this.state.location ? this.state.location.latitude : null}
                <h2>Longitude</h2>
                {this.state.location ? this.state.location.longitude : null}
            </div>
        )
    }
}

export default RainSumForm
