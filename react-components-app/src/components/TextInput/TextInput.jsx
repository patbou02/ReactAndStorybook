import PropTypes from 'prop-types';
import { useState } from "react";

const TextInput = ({name, type, label, placeholder}) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

TextInput.propTypes = {
  /**
   * name attr for input
   */
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
}

export default TextInput;