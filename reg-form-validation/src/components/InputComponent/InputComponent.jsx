import styles from "./InputComponent.module.css";

const InputComponentLayout = ({ name, type, placeholder, value, onChange, onBlur }) => (
    <input 
          className={styles.input} 
          name={name} 
          type={type} 
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
          onBlur={onBlur}
        />
)

export const InputComponent = ({ name, type, placeholder, value, onChange, onBlur }) => {
    return <InputComponentLayout 
        name={name}
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur}
    />;
}