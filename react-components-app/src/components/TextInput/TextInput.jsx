import PropTypes from 'prop-types';
import { useState } from "react";

const TextInput = ({name, type, label, placeholder}) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className='mb-4'>
      <label htmlFor={name} className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className='shadow appearance-none rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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