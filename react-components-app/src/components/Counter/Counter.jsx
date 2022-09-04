import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '../Button/Button';

export default function Counter({ color }) {

  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    if (e === 'ADD') {
      console.log('add button click');
      setCount(count+1);
      return;
    }
    console.log('subtract button click');
    if (count >= 1) setCount(count-1);
  };

  return (
    <>
      <span style={{color}}>Counter: {count}</span><br />
      <Button label="+" onClick={() => handleClick('ADD')} backgroundColor="#2BB60B" />
      <Button label="-" onClick={() => handleClick('SUBTRACT')} backgroundColor="#2BB60B" />
    </>
  );
}

Counter.propTypes = {
  color: PropTypes.string
};