import styles from "./RegForm.module.css";
import { InputComponent } from './components/InputComponent';
import { useState } from 'react';

export const RegForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onEmailChange = ({ target }) => {
    setEmail(target.value);

    //валидация
  }

  const onPasswordChange = ({ target }) => {
    setPassword(target.value);
  }

  const onPassword2Change = ({ target }) => {
    setPassword2(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('email:', email, '\npassword: ', password, '\npassword2: ', password2);
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Регистрация</div>
      <form className={styles.form} onSubmit={onSubmit}>
        <InputComponent 
          name='email' 
          type='email' 
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
        <button className={styles.button} type='submit'>зарегистрироваться</button>
      </form>
      <div className={styles.error}>поле email не должно быть пустым</div>
      </div>
  );
};
