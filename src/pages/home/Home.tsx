import { Panel } from '../../components/panel/Panel';
import './Home.scss';

export function Home() {

  return (
    <main>
      <div className='Home-background'>
        <div className='Home-overlay'></div>
      </div>
      <div className='Home-right-panel'>
        <Panel/>
      </div>
    </main>
  )
}