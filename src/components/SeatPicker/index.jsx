import './style.css';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ seats, userSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => 
          <SeatRow key={i} row={row} rowSelectedSeat={userSeat} onSeatSelected={onSeatSelected} />
        )}
      </div>
    </div>
)};
