import styles from './ReactHookForm.module.css';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

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
            .matches(/^[\w\-_]*$/, 'Некорректный пароль. Разрешенные символы:' + 
                'латинские буквы, цифры, тире, нижнее подчеркивание.')
            .min(6, 'Некорректный пароль. Длина должна быть не меньше 6 символов.')
            .max(20, 'Некорректный пароль. Длина должна быть не больше 20 символов.'),       
    });

const sendFormData = (formData) => {
    console.log(formData);
};    

export const ReactHookForm = () => {
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


    return (
        <div className={styles.container}>
        <div className={styles.title}>Регистрация</div>
        <form className={styles.form} onSubmit={handleSubmit(sendFormData)}>
            <input 
                className={styles.input} 
                name='email' 
                type='text' 
                {...register('email')} />
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
                className={styles.button} 
                type='submit' 
                disabled='false'>
                    зарегистрироваться
            </button>
        </form>
        <div className={styles.error}>ошибка</div>
      </div>
    );
}