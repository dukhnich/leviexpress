import './style.css';
import { SeatRow } from '../SeatRow';
import { useState } from 'react';

export const SeatPicker = ({ seats, journeyId, autoSeat }) => {
  const [selectedSeat, setSelectedSeat] = useState(autoSeat)
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => <SeatRow key={i} row={row} rowSelectedSeat={selectedSeat} />)}
      </div>
    </div>
)};
