import { Book } from "../../types";
import { SET_BOOKS, LOAD_BOOKS } from "../action_types/book_action_types";
import { put, takeEvery } from "redux-saga/effects";

const setBooks = (books: Book[]) => ({
    type: SET_BOOKS,
    books
})

const loadBooks = () => ({
    type: LOAD_BOOKS,
})

function* fetchBooks() {
    const data: Response = yield fetch('https://api.itbook.store/1.0/new');
    const response: { books: Book[] } = yield data.json();
    yield put(setBooks(response.books))

}

function* watcherBooks() {
    yield takeEvery(LOAD_BOOKS, fetchBooks);
}

export { watcherBooks, setBooks, loadBooks }