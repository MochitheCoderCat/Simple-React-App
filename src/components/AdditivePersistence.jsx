import React from 'react';

const AdditivePersistence = ({ num }) => {
  const calculateAdditivePersistence = (num) => {
    let count = 0;
    let numStr = num.toString();
    while (numStr.length > 1) {
      num = numStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
      numStr = num.toString();
      count++;
    }
    return count;
  };

  const result = calculateAdditivePersistence(num);

  return (
    <div>
      <h3>Additive Persistence Result:</h3>
      <p>The additive persistence of {num} is: {result}</p>
    </div>
  );
};

export default AdditivePersistence;

