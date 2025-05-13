import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../../types/sport';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import cyclingIcon from '../assets/icons/bike_icon.png';
import calisthenicsIcon from '../assets/icons/callisthenic_icon.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // ✅ gestion du chargement

  useEffect(() => {
    const username = localStorage.getItem('user');

    if (!username) {
      navigate('/login');
      return;
    }

    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        const found = data.find((u) => u.username === username);
        if (!found) {
          localStorage.removeItem('user');
          navigate('/login');
        } else {
          setUser(found);
        }
      })
      .catch(() => {
        localStorage.removeItem('user');
        navigate('/login');
      })
      .finally(() => {
        setLoading(false); // ✅ qu’on ait trouvé ou non, on a fini
      });
  }, [navigate]);

  if (loading) return <p className="text-center mt-5">Chargement...</p>;

  if (!user) return null; // ✅ évite de retourner du contenu fantôme

  return (
    <>
      <DashboardHeader />
      <div className="container mt-4">
        <h2 className="mb-4">Bienvenue, {user.username} 👋</h2>

        <p>Vous pouvez consulter vos statistiques :</p>

        <div className="d-flex flex-column align-items-center gap-4 mt-4">
          <img
            src={`http://localhost:3000${user.avatar}`}
            alt={user.username}
            style={{ width: '120px', height: '120px', borderRadius: '50%' }}
          />

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

export default Dashboard;
