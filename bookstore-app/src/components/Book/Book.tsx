import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/action_creators/book_action_creators";
import { Book, BookState } from "../../types";


const BookI = () => {
    const [book, setBook] = useState<any>([])
    const {isbn13} =useParams()

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/books/${isbn13}`).then(({ data }) => {
            setBook(data)
          })
    }, [])

    return (

        <div>
            
            <img src={book.image}></img>
            {/* {books?.map((book: any) => <Link to={`/${book.isbn13}`}><div>{book.title}</div></Link>)} */}
        </div>
    )
}

export default BookI