import React, { useEffect, useState } from 'react';
import './style.css';
import { BusStop } from '../BusStop';

export const JourneyDetail = ({ journey }) => {
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  useEffect(() => {
    const getCities = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
      const data = await response.json();
      setCities(data?.results || []);
    };
    const getDates = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
      const data = await response.json();
      setDates(data?.results || []);
    };
    getCities();
    getDates();
  }, [])
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou', fromCity, toCity, date);
    const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
    const data = await response.json();
    onJourneyChange(data?.results);
  }
  console.log(journey);
  return (
    <div className="journey-detail container">
    <h2>Podrobnosti cesty</h2>
    <div className="stops">
      {(journey.stops || []).map(stop => <BusStop key={stop.code} {...stop}/>)}
    </div>
  </div>
)};
