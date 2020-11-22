
import React, { useState, useEffect } from 'react';
import Geocode from 'react-geocode';
import ClockResults from './ClockResults';

//const api_key = process.env.API_KEY;
Geocode.setApiKey('AIzaSyDafRfZDKBQKhO-SmL-qEbrAFI2PKip4DU');
Geocode.setLanguage('en');
//AIzaSyDafRfZDKBQKhO-SmL-qEbrAFI2PKip4DU

const getTimeString = () => {
  const date = new Date(Date.now()).toLocaleTimeString();
  return date;
};

const newTimeZone = (zone) =>{
  var date = new Date().toLocaleTimeString('en-US', {
    timeZone: zone
  })
}


const ClockApp = () => {
  const [time, setTime] = useState(getTimeString());
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [location, setLocation] = useState('Loading...');

  useEffect(() => {
    const interval = setInterval(() => {
      let date = getTimeString();
      setTime(date);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const findCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      console.log('your browser does not support geolocation');
    }
  };

  useEffect(() => {
    findCurrentLocation();
    console.log('render findCurrentLocation no dependency will keep rendering')
    console.log('render findCurrentLocation with empty dependency array will only render as things change')
  }, []); //want empty array; this will render once onMount?

  useEffect(()=>{
    Geocode.fromLatLng(lat,lon)
    .then(response => {
      let address = response.results[0].formatted_address;
      let addSplit = address.split(",");
      setLocation(`${addSplit[1]}, ${addSplit[3] ? addSplit[3] : ''}`);
    }).catch(err => console.log(err))

    return(()=>{
        setLocation('Loading...');
      })
  },[lat, lon]) //renders everytime lat and lon state changes

  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <hr className="explanation" />
      <ClockResults location={location} time={time} />
    </div>
  );
};

export default ClockApp;
