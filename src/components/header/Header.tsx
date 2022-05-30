import { useNavigate } from 'react-router-dom';
import { Button } from '../button/Button';
import { BiUser } from 'react-icons/bi';
import './Header.scss';
import { User } from '../../interfaces/user.interface';

type Props = {
  user: User,
}

export function Header(p: Props) {

  const navigate = useNavigate();

  function logout() {
    navigate('/')
  }

  return(
    <header className="Header-wrapper">
      <div className="Header-container">
        <h1>Olá, { p.user.name.split(' ')[0] }</h1>

        <div className='Header-image'>
          <BiUser/>
        </div>

        <Button
          class="shy"
          value="Logout"
          icon
          clickFn={logout}
        />
      </div>
    </header>
  );
}