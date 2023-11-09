import styles from './ReactHookForm.module.css';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from 'react-hook-form';

const fieldScheme = yup.object()
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

export const ReactHookForm = () => {
    return <div>инициализация компонента ReactHookForm</div>;
}