import styles from './ReactHookForm.module.css';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';

const fieldSchema = yup.object()
    .shape({
        email: yup.string()
            .matches(/^[A-Z0-9_-]+@[A-Z0-9]+.[A-Z]{2,4}$/i, 'Некорректный email. ' + 
                'Допустимые символы: латинские буквы, цифры, тире, нижнее подчеркивание.'),
        password: yup.string()
            .matches(/^[\w\-_]*$/, 'Некорректный пароль. Разрешенные символы:' + 
                'латинские буквы, цифры, тире, нижнее подчеркивание.')
            .min(6, 'Некорректный пароль. Длина должна быть не меньше 6 символов.')
            .max(20, 'Некорректный пароль. Длина должна быть не больше 20 символов.'),
        password2: yup.string()
            .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),       
    });

const sendFormData = (formData) => {
    console.log(formData);
};    

export const ReactHookForm = () => {
    const submitButtonRef = useRef(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            password2: '',
        },
        resolver: yupResolver(fieldSchema),
    });

    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;
    const password2Error = errors.password2?.message;

    return (
        <div className={styles.container}>
        <div className={styles.title}>Регистрация</div>
        <form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
            <input 
                className={styles.input} 
                name='email' 
                type='text'
                {...register('email')} 
                />
            <input 
                className={styles.input} 
                name='password' 
                type='password' 
                {...register('password')} />
            <input 
                className={styles.input} 
                name='password2' 
                type='password' 
                {...register('password2')} />
            
            <button 
                ref={submitButtonRef}
                className={styles.button} 
                type='submit'>
                    зарегистрироваться
            </button>
        </form>
        {emailError && <div className={styles.error}>{emailError}</div>}
        {passwordError && <div className={styles.error}>{passwordError}</div>}
        {password2Error && <div className={styles.error}>{password2Error}</div>}
      </div>
    );
}