import './Footer.scss';
import { DiReact } from 'react-icons/di';

export function Footer() {
  return (
    <footer className='Footer-wrapper'>
      <div className="Footer-container">
        Made with ReactJS<DiReact className='icon'/>
      </div>
    </footer>
  )
}