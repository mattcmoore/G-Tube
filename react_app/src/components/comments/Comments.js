import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Comments = () => {
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <div className='sortDiv'>
        <p className='commentNumber'>X Comments</p>
        <div className='dropdownDiv'><FontAwesomeIcon icon={faBars} size="1x" />
          <select value={selectedOption} onChange={handleSelect} className='dropdown'>
            <option value="" id='sortOption'>Sort by</option>
            <option value="option1">Top comments</option>
            <option value="option2">Newest first</option>
          </select>
        </div>
      </div>
    </div>
  );

} 
export default Comments