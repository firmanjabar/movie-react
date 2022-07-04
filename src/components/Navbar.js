import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state = {
        search: ''
    }

    handleSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    handleKeyUpSearch = (search) => {
        this.props.handleSearch(search);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link to={'/'} style={{ textDecoration: "none" }}>
                            <span className="navbar-brand">Movie React</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <span className="navbar-nav me-auto mb-2 mb-lg-0"></span>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search"
                                    value={this.state.search}
                                    onChange={this.handleSearch}
                                    onKeyUp={() => this.handleKeyUpSearch(this.state.search)}
                                />
                                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
