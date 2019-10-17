import React from 'react';
import {MDBIcon} from 'mdbreact'
import './couplebtn.css'
const CoupleButton = ({data: {icon1, text1, icon2, text2}}) => (
  <div className='coubtn-wrapper'>
    <div className='coubtn-border'>
        <span className='detail'>
            <div>
              <MDBIcon icon={icon1}/>  
            </div>
            {text1}
        </span>
        <span className='cart' >
            <div>
              <MDBIcon icon={icon2} />
            </div>
            {text2}
        </span>
    </div>
  </div>
);
export default CoupleButton;
