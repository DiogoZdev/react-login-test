import './Registry.scss';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Alert } from '../alert/Alert';

export function Registry() {
  /**
   * Const to handle useNavigate.
   */
   const goTo = useNavigate();

   /**
    * Flag of alert visibility
    */
   let [alert, setAlert] = useState(false);

   /**
    * Message for Alert.
    */
   let [alertMessage, setAlertMessage] = useState('');

  /**
   * Flag of form validity.
   */
  let [valid, setValid] = useState(false)
  
  /**
   * User data that shall be registred.
   */
  let [user, setUser] = useState({
    name: '',
    document: '',
    email: '',
    phone: '',
  });

  /**
   * User's name value in the form.
   */
  let [name, setName] = useState('');

  /**
   * User's document ID value in the form.
   */
  let [document, setDocument] = useState('');

  /**
   * User's phone value in the form.
   */
  let [phone, setPhone] = useState('');

  /**
   * User's e-mail value in the form.
   */
  let [email, setEmail] = useState('');

  /**
   * User's name form handler.
   */
  function handleName(value: string) {
    setName(value);
  }

  /**
   * User's docuement form handler.
   */
  function handleDocument(value: string) {
    setDocument(value);
  }

  /**
   * User's phone form handler.
   */
  function handlePhone(value: string) {
    setPhone(value);
  }

  /**
   * User's e-mail form handler.
   */
  function handleEmail(value: string) {
    setEmail(value);
  }

  /**
   * Form fields observable to validate form filling.
   */
  useEffect(() => {
    if (
      name.split(' ').length < 2 ||
      email.length < 8 ||
      document.length < 11 ||
      phone.length < 8
      ) {
        setValid(false);
      } else {
        setValid(true);
      }
  }, [name, email, document, phone]);

  /**
   * Function to validate registry and login. 
   */
  function login() {    
    if (!user.document) {
      sendAlert('Não é possível acessar sem um cadastro ativo!');
    } else {
      goTo('/main')
    }
  }

  /**
   * Function to validate and register user data.
   */
  function register() {
    if (!valid) {
      sendAlert('Não há dados para realizar novo cadastro!');
    } else {
      let newUser = {
        name,
        document,
        email,
        phone,
      }
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      sendAlert(`Usuário cadastrado!`);
    }
  }

  /**
   * Function to exhibit alert to user.
   */
  function sendAlert(text: string) {
    if (alert) return;
    setAlertMessage(text);
    setAlert(true);
    setTimeout(() => {
      setAlert(false)
    }, 4000)
  }

  return (
    <>
      <Input fnUpdate={handleName} type='text' label='Nome Completo' />
      <Input fnUpdate={handleEmail} type='text' label='E-mail' />
      <Input fnUpdate={handleDocument} type='text' max={11} label='CPF' />
      <Input fnUpdate={handlePhone} type='text' label='Telefone' />
      <div className='row'>
        <Button
          class={valid ? 'main' : 'main-disabled'}
          value='Cadastrar'
          clickFn={register} />
        <Button
          class='shy'
          value='Login'
          icon
          clickFn={login} />
      </div>

      {alert &&
        <Alert
          message={ alertMessage }
        />
      }
    </>
  )
}