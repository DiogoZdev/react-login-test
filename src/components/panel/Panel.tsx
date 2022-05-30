import { Registry } from '../registry/Registry';
import './Panel.scss';

export function Panel() {
  return(
    <div className='Panel-wrapper'>
      <Registry/>
    </div>
  );
}