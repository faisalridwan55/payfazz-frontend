import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import './index.sass';
 
class MySpinner extends Component {
  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <div className='sweet-loading' >
          <RingLoader
            sizeUnit={"px"}
            size={150}
            color={'#fff'}
            loading={loading}
          />
        </div> 
      )
    }
    return null
  }
}

export default MySpinner;