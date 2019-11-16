import React, { Component } from 'react'

import './style.scss'
class SearchBox extends Component {
    render() {
        const { handleChange } = this.props
        return (
            <div className="input-field text-center">
                <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false" dir="ltr">
                    <div className="choices__inner">
                        <input
                            className="choices__input"
                            placeholder="Tìm sách..." 
                            onChange={handleChange}/>
                    </div>
                    <div className="choices__list choices__list--dropdown" aria-expanded="false">
                    </div>
                </div>
                <button className="btn-search">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        )
    }
}

export default SearchBox
