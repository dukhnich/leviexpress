import './style.css';
import { SeatRow } from '../SeatRow';

export const SeatPicker = ({ seats, journeyId }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, i) => <SeatRow key={i} row={row} />)}
      </div>
    </div>
)};
