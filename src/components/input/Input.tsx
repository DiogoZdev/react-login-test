import React, { useEffect, useState } from 'react';
import './Input.scss';

type Props = {
  type: string,
  label: string,
  max?: number,
  mask?: string,
  fnUpdate: (string: string) => void,
}

export function Input(p: Props) {

  let [value, setValue] = useState('');

  /**
   * Observable of state variable to 
   */
  useEffect(() => {
    p.fnUpdate(value);
  });

  /**
   * Method to define updated value to state variable.
   * @param e Event received.
   */
  function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div className="Input-wrapper">
      <input
        type={p.type}
        placeholder=' '
        maxLength={p.max}
        onChange={updateValue}/>
      <label>{p.label}</label>
    </div>
  );
}