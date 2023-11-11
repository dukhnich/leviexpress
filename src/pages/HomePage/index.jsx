import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SeatPicker } from '../../components/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  const navigate = useNavigate();
  const handleJourneyChange = (journey) => {
    setJourney(journey);
    setUserSeat(journey.autoSeat);
  }
  const handleBuy = async() => {
    const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: userSeat,
        journeyId: journey.journeyId,
      }),
    });
    const data = await response.json();
    const id = data?.results?.reservationId;
    if (id) {
      navigate(`/reservation/${id}`);
    }
  }
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey ? (
        <>
          <JourneyDetail journey={journey} />
          <SeatPicker {...journey} userSeat={userSeat} onSeatSelected={setUserSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      ) : null}
    </main>
  );
};
