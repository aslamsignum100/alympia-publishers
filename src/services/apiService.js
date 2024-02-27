import booksData from "../data/booksData";
// const api_url = "https://freetestapi.com/api/v1/books";
const loadBookData = booksData.bookViaApi

const fetchBooks = async (genre) => {
    try {
        // const response = await fetch(loadBookData);
        // const result = await response.json();
        const result = loadBookData;

        if (genre) {
            return result.filter(book => book.genre.includes(genre));
        }
        else {
            return result;
        }

    }
    catch (err) {
        console.log(err)
        return [];
    }
}

export default fetchBooks;
