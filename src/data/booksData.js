import nrImg1 from "../assets/images/books/new-release1png.png";
import nrImg2 from "../assets/images/books/new-release2.png";
import nrImg3 from "../assets/images/books/new-release3.png";
import nrImg4 from "../assets/images/books/new-release4png.png";

import yangReaderImg1 from "../assets/images/books/yangreaders-img1.png";
import yangReaderImg2 from "../assets/images/books/yangreaders-img2.png";
import yangReaderImg3 from "../assets/images/books/yangreaders-img3.png";
import yangReaderImg4 from "../assets/images/books/yangreaders-img4.png";

const booksData = {
  newReleaseBooks: [
    { id: 1, cover_image: nrImg1 },
    { id: 2, cover_image: nrImg2 },
    { id: 3, cover_image: nrImg3 },
    { id: 4, cover_image: nrImg4 },
  ],
  yangReadersBooks: [
    { id: 1, cover_image: yangReaderImg1 },
    { id: 2, cover_image: yangReaderImg2 },
    { id: 3, cover_image: yangReaderImg3 },
    { id: 4, cover_image: yangReaderImg4 }
  ],

  booksType: [
    { id: 1, cover_image: nrImg1, title: "Book title to go here", autherName: "Author name here" },
    { id: 2, cover_image: nrImg2, title: "Book title to go here", autherName: "Author name here" },
    { id: 3, cover_image: nrImg3, title: "Book title to go here", autherName: "Author name here" },
    { id: 4, cover_image: nrImg1, title: "Book title to go here", autherName: "Author name here" },
    { id: 5, cover_image: nrImg2, title: "Book title to go here", autherName: "Author name here" },
    { id: 6, cover_image: nrImg3, title: "Book title to go here", autherName: "Author name here" },
    { id: 7, cover_image: nrImg1, title: "Book title to go here", autherName: "Author name here" },
    { id: 8, cover_image: nrImg2, title: "Book title to go here", autherName: "Author name here" },
    { id: 9, cover_image: nrImg3, title: "Book title to go here", autherName: "Author name here" },
  ],

  bookViaApi: [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publication_year": 1960,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A classic novel depicting racial injustice in the American South.",
      "cover_image": nrImg1
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publication_year": 1925,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      "cover_image": nrImg1
    },
   
    {
      "id": 19,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "publication_year": 1988,
      "genre": [
        "Fiction",
        "Philosophical"
      ],
      "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
  
    {
      "id": 26,
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "publication_year": 1943,
      "genre": [
        "Fable",
        "Children's Literature"
      ],
      "description": "A philosophical novella about a young prince's journey through the universe.",
      "cover_image": nrImg3
    },
  
 
    {
      "id": 34,
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "publication_year": 1950,
      "genre": [
        "Fantasy",
        "Children's Literature"
      ],
      "description": "A series of fantasy novels set in the magical land of Narnia.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
  
    {
      "id": 36,
      "title": "The Name of the Rose",
      "author": "Umberto Eco",
      "publication_year": 1980,
      "genre": [
        "Historical Fiction",
        "Mystery"
      ],
      "description": "A medieval mystery novel set in an Italian monastery.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 37,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "publication_year": 1851,
      "genre": [
        "Fiction",
        "Adventure"
      ],
      "description": "The epic tale of Captain Ahab's obsession with the white whale.",
      "cover_image": nrImg1
    },
    
    {
      "id": 40,
      "title": "The Shadow of the Wind",
      "author": "Carlos Ruiz Zafón",
      "publication_year": 2001,
      "genre": [
        "Mystery",
        "Gothic"
      ],
      "description": "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
      "cover_image":  nrImg3
    },
    {
      "id": 41,
      "title": "The Secret Garden",
      "author": "Frances Hodgson Burnett",
      "publication_year": 1911,
      "genre": [
        "Children's Literature",
        "Classic"
      ],
      "description": "A classic children's novel about a young girl who discovers a hidden garden.",
      "cover_image": nrImg3
    },
    {
      "id": 42,
      "title": "The Giver",
      "author": "Lois Lowry",
      "publication_year": 1993,
      "genre": [
        "Dystopian",
        "Young Adult"
      ],
      "description": "A dystopian novel about a society with strict control over emotions and memories.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
  
    {
      "id": 45,
      "title": "The Wind in the Willows",
      "author": "Kenneth Grahame",
      "publication_year": 1908,
      "genre": [
        "Children's Literature",
        "Fantasy"
      ],
      "description": "A children's novel about the adventures of anthropomorphic animals.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
    {
      "id": 49,
      "title": "The Color Purple",
      "author": "Alice Walker",
      "publication_year": 1982,
      "genre": [
        "Fiction",
        "Historical"
      ],
      "description": "A novel about the life of African-American women in the Southern United States.",
      "cover_image": "https://fakeimg.pl/667x1000/cc6600"
    },
  ]
};

export default booksData;
