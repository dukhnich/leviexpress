import React, { useEffect, useState } from 'react';

export const DatesOptions = ({ dates, onChange }) => {
  const [selected, setSelected] = useState('');
  useEffect(() => onChange(selected), [selected])
  return (
    <select value={selected} onChange={e => setSelected(e.target.value)}>
      <option value="">Vyberte</option>
      {dates.map(date => <option key={date.dateBasic} value={date.dateBasic}>{date.dateCs}</option>)}
    </select>
)};
