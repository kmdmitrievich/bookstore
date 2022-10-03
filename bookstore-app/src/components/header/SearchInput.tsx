import React from "react";
import { SearchIcon } from "../icons/SearchIcon";
import './Header.css';

const SearchInput = () => {
    return (
        <form className="search-form">
            <input className="input-search" type="text" placeholder="Search..."></input>
            <button className="button-search"><SearchIcon /></button>

        </form>
    )
}

export { SearchInput }