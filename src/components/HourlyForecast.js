import React from 'react';
import PropTypes from "prop-types";

export class HourlyForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'San_Francisco',
            state: 'CA',
            hourly_forecastData: []
        }
    }

    componentWillMount() {
        const url = `/hourly/q/${this.props.state}/${this.props.city}.json`;
        console.log(url);
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                hourly_forecastData: data
            });
            console.log(data);
        });
    }

    render() {
        const hourlyForecasts = this.state.hourly_forecastData.hourly_forecast;
        console.log(hourlyForecasts);


        if (hourlyForecasts !== undefined) {
            const hourlyForecastsList = hourlyForecasts.map((forecast, index) => {
            const FCTTIME = hourlyForecasts.FCTTIME;
                return (
                    <div key={index}>
                        <ul>
                            <li>
                                <b>Time</b>
                                <p>{forecast.FCTTIME.mon_abbrev} {forecast.FCTTIME.mday}, {forecast.FCTTIME.civil}</p>
                            </li>
                            <li>
                                <b>Condition</b>
                                <p>{forecast.condition}</p>
                            </li>
                            <li>
                                <b>Temp.</b>
                                <p>{forecast.temp.english}</p>
                            </li>
                            <li>
                                <b>Feels Like</b>
                                <p>{forecast.feelslike.english}</p>
                            </li>
                            <li>
                                <b>Precip</b>
                                <p>{forecast.pop}</p>
                            </li>
                            
                            <li>
                                <b>Amount</b>
                                <p>{forecast.qpf.english}</p>
                            </li>
                            
                            <li>
                                <b>Cloud Cover</b>
                                <p>{forecast.sky}</p>
                            </li>
                            
                            <li>
                                <b>Dew Point</b>
                                <p>{forecast.dewpoint.english}</p>
                            </li>
                            
                            <li>
                                <b>Humidity</b>
                                <p>{forecast.humidity}</p>
                            </li>
                            
                            <li>
                                <b>Wind</b>
                                <p>{forecast.wspd.english}</p>
                                <p>{forecast.wdir.dir} {forecast.wdir.degrees}</p>
                            </li>
                            
                            <li>
                                <b>Pressure</b>
                                <p>{forecast.mslp.english}</p>
                            </li>
                        </ul>
                        <hr/>
                    </div>
                );
            });

            return (
                <div>
                    {hourlyForecastsList}
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

HourlyForecast.propTypes = {
    state: PropTypes.string,
    city: PropTypes.string
}