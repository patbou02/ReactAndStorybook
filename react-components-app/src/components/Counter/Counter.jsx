import { PropTypes } from 'prop-types';
import { Button } from '../Button/Button';

export default function Counter({ color }) {

  let count = 0;
  const setCount = (val) => (count = val);

  const handleClick = (e) => {
    if (e === 'ADD') {
      console.log('add button click');
      setCount(count++);
      return;
    }
    console.log('subtract button click');
    setCount(count--);
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