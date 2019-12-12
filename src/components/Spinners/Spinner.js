import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './spinner.scss'
/* types of loading spinner
    point
    radius
    corner
    sound
*/
const list = ['point', 'radius', 'corner', 'sound', 'default']
class Spinner extends Component {
    render() {
        const { showLoading } = this.props.ui
        var { lazyShow } = false
        if(this.props.showSpin)
            lazyShow = true
        let xhtml = null
        if (showLoading || lazyShow)
            xhtml = (
                <div className="con-fl-loading" >
                    {/* <h4 className="title-loading">Đang xử lý...</h4> */}
                    <div className={`fl-loading ${list[Math.floor(Math.random() * 4)]}`}>
                        <div className="effect-1 effects"></div>
                        <div className="effect-2 effects"></div>
                        <div className="effect-3 effects"></div>
                    </div>
                </div>
            )
        return xhtml
    }
}

Spinner.propType = {
    ui: PropTypes.object
}

const mapStateToProps = state => {
    return {
       ui : state.ui
    }
}

export default connect(mapStateToProps, null)(Spinner);

