import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '../../../types/sport';
import DashboardHeader from '../components/DashboardHeader';

const CyclingPage = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        const found = data.find((u) => u.username === username);
        setUser(found ?? null);
      });
  }, [username]);

  if (!user) return <p className="text-center mt-5">Chargement...</p>;

  const cycling = user.sports.cycling;

  return (
    <>
      <DashboardHeader />
      <div className="container mt-4">
        <h2>Statistiques Cyclisme – {user.username}</h2>

        {!cycling ? (
          <p>Aucune donnée de cyclisme disponible.</p>
        ) : (
          <>
            <h5 className="mt-3">Objectifs</h5>
            <ul>
              <li>Distance prochaine : {cycling.goals.next_distance_km} km</li>
              <li>Vitesse cible : {cycling.goals.target_speed_kmh} km/h</li>
            </ul>

            <h5 className="mt-3">Progression annuelle</h5>
            <ul>
              <li>Total parcouru : {cycling.year_progress.total_km} km</li>
              <li>Sessions : {cycling.year_progress.total_sessions}</li>
            </ul>

            <h5 className="mt-3">Dernières sessions</h5>
            <ul>
              {cycling.sessions.map((session, index) => (
                <li key={index}>
                  {session.date} – {session.distance_km} km – {session.duration_min} min
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default CyclingPage;
