import styles from "./RegForm.module.css";

export const RegForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Регистрация</div>
      <form className={styles.form}>
        <input className={styles.input} type='email' placeholder="email"></input>
        <input className={styles.input} type='password' placeholder="пароль"></input>
        <input className={styles.input} type='password' placeholder="повторите пароль"></input>
        <botton className={styles.botton}>зарегистрироваться</botton>
      </form>
      <div className={styles.error}>поле email не должно быть пустым</div>
      </div>
  );
};
