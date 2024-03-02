import React from 'react';

const BalancedString = ({ str }) => {
  const isBalancedString = (str) => {
    const charCount = {};
    for (let ch of str) {
      charCount[ch] = (charCount[ch] || 0) + 1;
    }
    const counts = Object.values(charCount);
    for (let i = 1; i < counts.length; i++) {
      if (counts[i] !== counts[0]) {
        return false;
      }
    }
    return true;
  };

  const result = isBalancedString(str);

  return (
    <div>
      <h3>Balanced String Result:</h3>
      {result ? <p>The string "{str}" is balanced.</p> : <p>The string "{str}" is not balanced.</p>}
    </div>
  );
};

export default BalancedString;
