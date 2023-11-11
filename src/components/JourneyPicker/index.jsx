import React, { useEffect, useState } from 'react';
import { CityOptions } from '../CityOptions';
import { DatesOptions } from '../DatesOptions';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou', fromCity, toCity, date);
  }
  return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form" onSubmit={handleSubmit}>
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <CityOptions cities={cities} onChange={setFromCity} />
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <CityOptions cities={cities} onChange={setToCity} />
        </label>
        <label>
          <div className="journey-picker__label">Datum:</div>
          <DatesOptions dates={dates} onChange={setDate} />
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"
          > 
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src="/map.svg" />
    </div>
  </div>
)};
