import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
class SearchBox extends Component {
    handleKeyDown = (e) => {
        e.key === 'Enter' && this.props.handleSearch()
    }
    render() {
        const { handleChange, handleSearch } = this.props
        return (
            <div className="input-field text-center">
                <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false" dir="ltr">
                    <div className="choices__inner">
                        <input
                            className="choices__input"
                            placeholder="Tìm sách..."
                            onChange={handleChange}
                            onKeyDown={this.handleKeyDown} />
                    </div>
                    <div className="choices__list choices__list--dropdown" aria-expanded="false">
                    </div>
                </div>
                <button className="btn-search" onClick={handleSearch}>
                    <Link to='/search'>
                        <i className="fas fa-search"></i>
                    </Link>
                </button>
            </div>
        )
    }
}

export default SearchBox
