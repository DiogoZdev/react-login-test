import './Button.scss';
import { BsArrowRight } from 'react-icons/bs'

type Props = {
  class: 'main' | 'main-disabled' | 'shy' | 'warn',
  value: string,
  icon?: boolean,
  clickFn: () => void,
}

export function Button(p: Props) {

  function handleClick() {
    p.clickFn();
  }

  return(
    <button
      className={`Button-${p.class}`}
      onClick={handleClick}
      >
      { p.value }{ p.icon && <BsArrowRight/>}
    </button>
  );
}