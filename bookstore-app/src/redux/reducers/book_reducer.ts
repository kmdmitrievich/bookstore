import { BookState } from "../../types";
import { SET_BOOKS } from "../action_types/book_action_types";


const initial_state = {
    books: [],

}
export default (state: BookState = initial_state, action: any) => {
    switch (action.type) {
        case SET_BOOKS: {
            return ({
                ...state,
                books: action.books
            })
        }
        default: {
            return state;
        }
    }
}