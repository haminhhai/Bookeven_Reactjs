import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
class SearchBox extends Component {
    handleKeyDown = (e) => {
        e.key === 'Enter' && this.props.handleSearch()
    }
    render() {
        const { handleChange, handleSearch, keyword } = this.props
        return (
            <div className="input-field text-center">
                <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false" dir="ltr">
                    <div className="choices__inner">
                        <input
                            className="choices__input"
                            placeholder="Tìm sách..."
                            defaultValue={keyword}
                            onChange={handleChange}
                            onKeyDown={this.handleKeyDown} />
                    </div>
                    <div className="choices__list choices__list--dropdown" aria-expanded="false">
                    </div>
                </div>
                <Link to='/search'>
                    <button className="btn-search" onClick={handleSearch}>
                        <i className="fas fa-search"></i>
                    </button>
                </Link>
            </div>
        )
    }
}

export default SearchBox
