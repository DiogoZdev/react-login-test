import './UserCard.scss';
import { HiUserRemove, HiMail, HiPhone } from 'react-icons/hi'
import { User } from '../../interfaces/user.interface';
import { useNavigate } from 'react-router-dom';
import { InfoCard } from '../infoCard/InfoCard';

type Props ={
  user: User,
}

export function UserCard(p: Props) {
  /**
   * Navigation
   */
  const navigate = useNavigate();

  /**
   * Function to delete stored user's data.
   */
  function deleteData() {
    localStorage.removeItem('user');
    navigate('/');
  }

  return(
    <div className='UserCard-wrapper'>
      <h1>App em Manutenção</h1>
      <p>
        O Seu aplicativo está em manutenção e trazendo novidades.<br/>
        Obrigado por realizar seu pré-cadastro e por sua paciência!
      </p>
      <p>
        Aproveite para conferir seus dados cadastrais:
      </p>
      <div className="UserCard-data">
        <span>{ p.user.name }</span>
        <div className='UserCard-cpf'>
          { p.user.document }
        </div>
        <span className='UserCard-icon-data'>
          <HiMail/>
          { p.user.email }
        </span>
        <span className='UserCard-icon-data'>
          <HiPhone/>
          { p.user.phone}
        </span>

        <div className="UserCard-data-actions">
          <div className='row' onClick={deleteData} >
          <HiUserRemove/> excluir dados
          </div>

        </div>
      </div>

      <h1>Leia Mais</h1>
      <div className="UserCard-more-area">
        <InfoCard
          title='Poítica de Privacidade'
        />
        <InfoCard
          title='LGPD'
        />
        <InfoCard
          title='Nossa Missão'
        />
        <InfoCard
          title='Suporte'
        />
      </div>
    </div>
  );
}