import styles from "./RegForm.module.css";
import { InputComponent } from './components/InputComponent';
import { useRef, useState } from 'react';

export const RegForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);
  const submitButtonRef = useRef(null);

  const checkFieldsAndAddButtonFocus = () => {
    if (email !== '' && 
      password !== '' && 
      password2 === password && 
      printError(error) === '') {
      submitButtonRef.current.focus();
    }
  }

  const onEmailChange = ({ target }) => {
    setEmail(target.value);

    let errorEmail = null;
    if (!/^[A-Z0-9_-]+@[A-Z0-9]+.[A-Z]{2,4}$/i.test(target.value)) {
      errorEmail = 'Некорректный email. Допустимые символы:' + 
      'латинские буквы, цифры, тире, нижнее подчеркивание.';
    }
    setError({...error, email: errorEmail});
    checkFieldsAndAddButtonFocus();
  }

  const onEmailBlur = ({ target }) => {
    checkFieldsAndAddButtonFocus();
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);

    let errorPassword = null;

    if (target.value.length > 20) {
      errorPassword = 'Некорректный пароль. Длина должна быть не больше 20 символов.';
    } else if (!/^[\w\-_]*$/.test(target.value)) {
      errorPassword = 'Некорректный пароль. Разрешенные символы:' + 
      'латинские буквы, цифры, тире, нижнее подчеркивание.'
    }
    setError({...error, password: errorPassword});
  }

  const onPasswordBlur = ({ target }) => {
    let errorPassword = null;

    if (target.value !== password2 && password2 !== '') {
      errorPassword = 'Пароли не совпадают.';
    } else if (target.value.length < 6) {
      errorPassword = 'Некорректный пароль. Длина должна быть не меньше 6 символов.';
    }
    setError({...error, password: errorPassword});
    checkFieldsAndAddButtonFocus();
  }

  const onPassword2Change = ({ target }) => {
    setPassword2(target.value);
  }

  const onPassword2Blur = ({ target }) => {
    let errorPassword2 = null;
    
    if (target.value !== password && password !== '') {
      errorPassword2 = 'Пароли не совпадают';
    }
    setError({...error, password2: errorPassword2});
    checkFieldsAndAddButtonFocus();
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('email:', email, '\npassword: ', password, '\npassword2: ', password2);
  }

  const printError = (error) => {
    if (error !== null) {
      const printString = Object.values(error).join(' ').trim();
      return printString;
    }
    return '';
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
          onBlur={onEmailBlur}
        />
        <InputComponent 
          name='password' 
          type='password' 
          placeholder='пароль' 
          value={password} 
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
        />
        <InputComponent 
          name='password2' 
          type='password' 
          placeholder='повторите пароль' 
          value={password2} 
          onChange={onPassword2Change}
          onBlur={onPassword2Blur}
        />
        <button 
          ref={submitButtonRef}
          className={styles.button} 
          type='submit' 
          disabled={printError(error).length !== 0}>
            зарегистрироваться
        </button>
      </form>
      { printError(error).length !== 0 && 
      <div className={styles.error}>{printError(error)}</div> }
      </div>
  );
};
