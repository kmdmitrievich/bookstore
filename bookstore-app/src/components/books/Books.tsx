import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../redux/action_creators/book_action_creators";
import { Book, BookState } from "../../types";

const BookList = (props: { books: any[] }) => {
    const { books } = props;
    return (
        // ЭТО Я ПЫТАЛСЯ ВЫВЕСТИ КНИГИ НА ЗАНЯТИИ. НО ТАК КАК СПЕШИЛ, ВЫШЛА ФИГНЯ.
        // ТАК ЧТО МОЖЕШЬ ТУТ ВСЁ ФИКСИТЬ ЛИБО УДАЛИТЬ И САМ СПОКОЙНО СДЕЛАТЬ
        <Row>
            <Col sm={8}>
                <Post bookInfo={books[0]} isFull={true} />
            </Col>
            <Col sm={4}>
                <Row>
                    <Post bookInfo={books[1]} isFull={false} />
                </Row>
                <Row>
                    <Post bookInfo={books[2]} isFull={false} />
                </Row>
            </Col>
        </Row>
    )
}

const Books = () => {

    const books = useSelector((state: BookState) => state.books)


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooks())
    }, [])


    return (

        <div >

        </div>
    )
}

export { Books };