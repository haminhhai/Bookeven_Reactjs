import React, {Component} from 'react';
import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText,MDBMask, MDBView } from 'mdbreact'
import LazyLoad from 'react-lazyload';
import './bpcard.scss'
//data for CoupleButton Component
const data = {
  icon1: 'info-circle',
  text1: 'Chi tiết',
  icon2: 'shopping-basket',
  text2: 'Mua'
}
class BPCard extends Component {
  
  render() { 
    return ( 
      <MDBCard style={{ width: "16rem" , height: 'auto'}} >
      <MDBView className='book-wrapper' hover>
        <LazyLoad height='200' offset={100} once>
        
          <img src={this.props.img} waves className="imgBook img-fluid" alt=""  overlay/>
          
        </LazyLoad>
        <MDBMask className="flex-center" overlay="white-light"/>
      </MDBView>
      <MDBCardBody>
        <MDBCardTitle className="h5" style={{fontWeight: 600, color: '#0de24a'}}>{this.props.title}</MDBCardTitle>
        <MDBCardText className='font-italic text-muted'>
          {this.props.author}
        </MDBCardText>
        <div className='price'>
          {this.props.discountAmount !== undefined &&
          <del>{this.$utils.formatVND(this.props.discountAmount)}</del>}
          <p className='h3'>{this.$utils.formatVND(this.props.amount)}</p>
        </div>
        <div className='coubtn-wrapper'>
          <div className='coubtn-border'>
            <span className='detail'>
              <div>
                <MDBIcon icon={data.icon1} />
              </div>
              {data.text1}
            </span>
            <span className='cart' >
              <div>
                <MDBIcon icon={data.icon2} />
              </div>
              {data.text2}
            </span>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
    )
  }
}

export default BPCard;