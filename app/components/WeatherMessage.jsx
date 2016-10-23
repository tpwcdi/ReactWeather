var React = require('react');

var WeatherMessage = ({location, temp}) => {
    return (
      <p>It is {temp} in {location}</p>
    );
}

module.exports = WeatherMessage;
