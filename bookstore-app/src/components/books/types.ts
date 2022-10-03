import { Book } from "../../types";

interface IBook {
    bookInfo: Book
}

interface IBookText {
    text: string,
    date: string,
    title: string,
    isFull: boolean,
}

interface IBookImage {
    image: string
}

export type { IBook, IBookText, IBookImage }