import { NavLink, useParams } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('params:', movieId);
  return (
    <div>
      <div>Тут будуть деталі фільму</div>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="cast"
      >
        Cast
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.navLink} ${isActive ? css.active : ''}`
        }
        to="reviews"
      >
        Reviews
      </NavLink>
    </div>
  );
};

export default MovieDetailsPage;
