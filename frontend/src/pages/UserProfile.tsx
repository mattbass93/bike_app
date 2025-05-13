import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { User } from '../../../types/sport';

import DashboardHeader from '../components/DashboardHeader';
import cyclingIcon from '../assets/icons/bike_icon.png';
import calisthenicsIcon from '../assets/icons/callisthenic_icon.png';

const UserProfile = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users`)
      .then((res) => res.json())
      .then((data: User[]) => {
        const found = data.find((u) => u.username === username);
        setUser(found ?? null);
      })
      .catch((err) => console.error('Erreur API :', err));
  }, [username]);

  if (!user) return <p className="text-center mt-5">Chargement...</p>;

  return (
    <>
      <DashboardHeader />
      <div className="container text-center mt-4">
        <h2>{user.username}</h2>

        <div className="d-flex flex-column align-items-center gap-4 mt-4">
          <Link to={`/profile/${user.username}/cycling`}>
            <img
              src={cyclingIcon}
              alt="Cycling"
              title="Statistiques Vélo"
              style={{ width: '140px', height: '140px', cursor: 'pointer' }}
            />
          </Link>

          <Link to={`/profile/${user.username}/calisthenics`}>
            <img
              src={calisthenicsIcon}
              alt="Calisthenics"
              title="Statistiques Callisthenie"
              style={{ width: '140px', height: '140px', cursor: 'pointer' }}
            />
          </Link>
        </div> 
    </div>

    </>
  );
};

export default UserProfile;
