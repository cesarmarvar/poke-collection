import { InputBox } from "../styles/typography"


export function Input({ id, name, type = "text", placeholder, value, label, onChange }) {

  return (
  <>
  {label && <label htmlFor={id || name}>{label}</label>}
  {/* <br /> */}
  <InputBox 
    id={id || name}
    name={name}
    type={type} 
    value={value} 
    onChange={onChange}
    placeholder={placeholder} 
    />
  </>)
};