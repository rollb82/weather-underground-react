import React from 'react';
import PropTypes from "prop-types";

export class TodaysForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'San_Francisco',
            state: 'CA',
            currentWeather: {}
        }
    }
    componentWillMount() {
        const url = `/conditions/q/${this.props.state}/${this.props.city}.json`;
        console.log(url);
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                currentWeather: data
            });
            console.log(data);
        });
    }

    render() {
        const observation = this.state.currentWeather.current_observation;
        console.log(observation);
        if (observation !== undefined) {
            return (
                <div>
                    <div>
                        <h3>
                            Temp
                    </h3>
                        {observation.temp_f} F
                    <br />
                        Feels like {observation.feelslike_f} F
                </div>
                    <div>
                        <h3>Weather</h3>
                        {observation.weather}
                    </div>
                    <div>
                        <h3>Wind</h3>
                        Wind {observation.wind_dir}
                        <br/>
                        Gust {observation.wind_gust_mph} mph
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    Loading
                </div>
            )
        }
    }
}

TodaysForecast.propTypes = {
    state: PropTypes.string,
    city: PropTypes.string
}