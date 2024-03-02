import React from 'react';

const FindBiggestNumber = ({ map }) => {
  const findBiggestNumber = (map) => {
    let biggestNumber = undefined;
    for (let i = 0; i < map.length; i++) {
      if (Array.isArray(map[i])) {
        for (let j = 0; j < map[i].length; j++) {
          if (typeof map[i][j] === 'number' && (biggestNumber === undefined || map[i][j] > biggestNumber)) {
            biggestNumber = map[i][j];
          }
        }
      }
    }
    return biggestNumber;
  };

  const result = findBiggestNumber(map);

  return (
    <div>
      <h3>Find Biggest Number Result:</h3>
      {result !== undefined ? <p>The biggest number is: {result}</p> : <p>No valid numbers found in the input.</p>}
    </div>
  );
};

export default FindBiggestNumber;
