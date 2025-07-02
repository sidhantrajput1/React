const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
// console.log(book)

const {
  id,
  title,
  author,
  pages,
  publicationDate,
  genres,
  hasMovieAdaptation,
} = book;
// console.log(id, title, author, pages ,genres[4])

// const [primaryGenres, secondaryGenres, , , fourthGenres] = genres;
// console.log(primaryGenres, secondaryGenres, fourthGenres)

// Rest Opeator
const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
// console.log(primaryGenres, secondaryGenres, otherGenres)

//speard opearator
const newGenres = ["Epic Fantasy", ...genres];
// console.log(newGenres)

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwriting existig property
  pages: 1210,
};

// console.log(updatedBook)

const books = getBooks();
// console.log(books)

const essenitailData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

// console.log(essenitailData)

const longBooks = books.filter((book) => book.pages > 500);
// console.log(longBooks)

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
// console.log(totalPages)

/*
Mutate the orginal array 
const arr = [3, 7, 1, 8 , 9];
const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr)
*/
const arr = [3, 7, 1, 8, 9];
// const sortedArr = arr.slice().sort((a, b) => a - b);
const sortedArr = [...arr].slice().sort((a, b) => a - b);
// console.log(sortedArr)
// console.log(arr)

// 1) Add new book object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the chember of secrets",
  author: "J. K. Rowling",
};

const bookAfterAdd = [...books, newBook];
// console.log(bookAfterAdd)

// 2) Delete book object from array
const bookAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
// console.log(bookAfterDelete)

// 3) Update book object in the array
const bookAfterUpdate = bookAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 2100 } : book
);
// console.log(bookAfterUpdate)

const fetchData = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
//   console.log(response.json())
  const data = await response.json();
  console.log(data)
};

fetchData()
