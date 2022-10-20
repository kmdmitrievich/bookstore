import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/action_creators/book_action_creators";
import { Book, BookState } from "../../types";
import "./Books.css"

const BookList = () => {


    return (
        <Row>
        </Row>
    )
}

const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new').then(({ data }) => {
            setBooks(data.books)
          })
    }, [])

    return (

        <div className="books-wrapper">
            {books?.map((book: any) => 
                <Link to={`/books/${book.isbn13}`}>
                    <div className="books">
                        <img src = {book.image}/>
                        <div className="link-title">
                            <p className="link-text"> {book.title} </p>
                            <p> {book.price} </p>
                        </div>
                    </div>
                </Link>)}
        </div>
    )
}

export { Books };