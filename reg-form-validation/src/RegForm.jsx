import styles from "./RegForm.module.css";
import { InputComponent } from './components/InputComponent';
import { useState } from 'react';

export const RegForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  const onEmailChange = ({ target }) => {
    setEmail(target.value);

    let errorEmail = null;
    if (!/^[A-Z0-9_-]+@[A-Z0-9]+.[A-Z]{2,4}$/i.test(target.value)) {
      errorEmail = 'Некорректный email. Допустимые символы A-Z, a-z, 0-9, -, _';
    }
    setError({...error, email: errorEmail});
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);

    let errorPassword = null;
    if (target.value.length < 6) {
      errorPassword = 'Некорректный пароль. Длина должна быть не меньше 6 символов';
    }
    setError({...error, password: errorPassword});
  }

  const onPassword2Change = ({ target }) => {
    setPassword2(target.value);

    let errorPassword2 = null;
    if (target.value !== password) {
      errorPassword2 = 'Пароли не совпадают';
    }
    setError({...error, password2: errorPassword2});
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('email:', email, '\npassword: ', password, '\npassword2: ', password2);
  }

  const printError = (error) => {
    if (error !== null) {
      const printString = Object.values(error).join(' ');
      return printString;
    }
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Регистрация</div>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputComponent 
          name='email' 
          type='text' 
          placeholder='email' 
          value={email} 
          onChange={onEmailChange}
        />
        <InputComponent 
          name='password' 
          type='password' 
          placeholder='пароль' 
          value={password} 
          onChange={onPasswordChange}
        />
        <InputComponent 
          name='password2' 
          type='password' 
          placeholder='повторите пароль' 
          value={password2} 
          onChange={onPassword2Change}
        />
        <button className={styles.button} type='submit' disabled={printError(error) !== null}>зарегистрироваться</button>
      </form>
      <div className={styles.error}>{printError(error)}</div>
      </div>
  );
};
