type StoreState = {
    user: UserState,
    book: BookState
}

type Book = {
    id?: number,
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string,
}

type BooksResponse = {

}

type BookState = {
    books: Book[],

}



type UserState = {
    user: User | null
}

type User = {
    id?: number,
    email: string,
    username?: string,
    password: string
}

type JwtResponse = {
    access: string,
    refresh: string
}



export type {
    UserState,
    User,
    JwtResponse,

    Book,
    BookState
};