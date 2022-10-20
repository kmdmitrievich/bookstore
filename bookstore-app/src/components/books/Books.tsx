import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/action_creators/book_action_creators";
import { Book, BookState } from "../../types";

const BookList = () => {


    return (
        // ЭТО Я ПЫТАЛСЯ ВЫВЕСТИ КНИГИ НА ЗАНЯТИИ. НО ТАК КАК СПЕШИЛ, ВЫШЛА ФИГНЯ.
        // ТАК ЧТО МОЖЕШЬ ТУТ ВСЁ ФИКСИТЬ ЛИБО УДАЛИТЬ И САМ СПОКОЙНО СДЕЛАТЬ
        <Row>
            {/* <Col sm={8}>
                <Post bookInfo={books[0]} isFull={true} />
            </Col>
            <Col sm={4}>
                <Row>
                    <Post bookInfo={books[1]} isFull={false} />
                </Row>
                <Row>
                    <Post bookInfo={books[2]} isFull={false} />
                </Row>
            </Col> */}
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

        <div >
            {books?.map((book: any) => <Link to={`/books/${book.isbn13}`}><div>{book.title}</div></Link>)}
        </div>
    )
}

export { Books };