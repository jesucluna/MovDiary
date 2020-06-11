import React from 'react';
import '../../App.css';
import Search from '../Search';

const Add = () => {
  return (
    <div className="row homi">
      <div className="container-fluid homi">
        <i className="fas fa-search page"></i>
        <Search/>
      </div>
    </div>
  );
}

export default Add;