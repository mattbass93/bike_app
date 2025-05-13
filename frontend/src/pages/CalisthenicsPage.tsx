import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { User } from '../../../types/sport';
import DashboardHeader from '../components/DashboardHeader';

const CalisthenicsPage = () => {
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

  const calisthenics = user.sports.calisthenics;

  return (
    <>
      <DashboardHeader />
      <div className="container mt-4">
        <h2>Statistiques Callisthénie – {user.username}</h2>

        {!calisthenics ? (
          <p>Aucune donnée de callisthénie disponible.</p>
        ) : (
          <>
            <h5 className="mt-3">Objectifs</h5>
            <ul>
              <li>Pull-ups : {calisthenics.goals.pullups_goal}</li>
              <li>Séances/semaine : {calisthenics.goals.workouts_per_week}</li>
            </ul>

            <h5 className="mt-3">Progression annuelle</h5>
            <ul>
              <li>Total séances : {calisthenics.year_progress.total_workouts}</li>
              <li>Minutes totales : {calisthenics.year_progress.total_minutes}</li>
            </ul>

            <h5 className="mt-3">Dernières sessions</h5>
            <ul>
              {calisthenics.sessions.map((session, index) => (
                <li key={index}>
                  {session.date} – {session.exercises.length} exercices – {session.duration_min} min
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default CalisthenicsPage;
