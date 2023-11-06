import styles from "./InputComponent.module.css";

const InputComponentLayout = ({ name, type, placeholder, value, onChange }) => (
    <input 
          className={styles.input} 
          name={name} 
          type={type} 
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
        />
)

export const InputComponent = ({ name, type, placeholder, value, onChange }) => {
    return <InputComponentLayout 
        name={name}
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
    />;
}