import './style.css';
import { Seat } from '../Seat';

export const SeatRow = ({ row, rowSelectedSeat }) => {
  return (
    <div className="seat-row">
      {row.map(seat => <Seat key={seat.number} {...seat} isSelected={rowSelectedSeat === seat.number} />)}
    </div>
)};
