import React, { useState } from 'react';

const CheckboxExample = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />Remember me
      </label>
    </div>
  );
};
export default CheckboxExample;