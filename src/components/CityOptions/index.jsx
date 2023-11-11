import React, { useEffect, useState } from 'react';

export const CityOptions = ({ cities, onChange }) => {
  const [selected, setSelected] = useState('');
  useEffect(() => onChange(selected), [selected])
  return (
    <select value={selected} onChange={e => setSelected(e.target.value)}>
      <option value="">Vyberte</option>
      {cities.map(city => <option key={city.code} value={city.code}>{city.name}</option>)}
    </select>
)};
