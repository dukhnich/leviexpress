import './style.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();
  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }
  const handleBuy = async() => {
    const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
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
          <SelectedSeat number={journey.autoSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      ) : null}
    </main>
  );
};
