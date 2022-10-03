import React from "react";
import { HeardIcon } from "../icons/HeardIcon";
import { UserIcon } from "../icons/UserIcon";
import { SearchInput } from "./SearchInput";
import './Header.css';
import { LetterIcon } from "../icons/LetterIcon";


const Header = () => {
    return (
        <div className="header">
            <h2>BOOKSTORE</h2>
            <SearchInput />
            <div className="icon">
                <HeardIcon />
                <LetterIcon />
                <UserIcon />
            </div>
        </div>
    )
}

export { Header };