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
    { id: 1, img: nrImg1 },
    { id: 2, img: nrImg2 },
    { id: 3, img: nrImg3 },
    { id: 4, img: nrImg4 },
  ],
  yangReadersBooks: [
    { id: 1, img: yangReaderImg1 },
    { id: 2, img: yangReaderImg2 },
    { id: 3, img: yangReaderImg3 },
    { id: 4, img: yangReaderImg4 }
  ],

  booksType: [
    { id: 1, img: nrImg1, title: "Book title to go here", autherName: "Author name here" },
    { id: 2, img: nrImg2, title: "Book title to go here", autherName: "Author name here" },
    { id: 3, img: nrImg3 , title: "Book title to go here", autherName: "Author name here"},
    { id: 4, img: nrImg1 , title: "Book title to go here", autherName: "Author name here"},
    { id: 5, img: nrImg2 , title: "Book title to go here", autherName: "Author name here"},
    { id: 6, img: nrImg3 , title: "Book title to go here", autherName: "Author name here"},
    { id: 7, img: nrImg1 , title: "Book title to go here", autherName: "Author name here"},
    { id: 8, img: nrImg2 , title: "Book title to go here", autherName: "Author name here"},
    { id: 9, img: nrImg3 , title: "Book title to go here", autherName: "Author name here"},
  ],
};

export default booksData;
