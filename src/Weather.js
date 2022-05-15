import React from "react";
import axios from "axios";
import { SpinnerCircular } from "spinners-react";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }
  let apiKey = "42b8ba4c0d3eac619d09938449fa1571";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <SpinnerCircular color="white" thickness="100" />;
}
