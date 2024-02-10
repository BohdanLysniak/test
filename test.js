const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];

const sortedByAuthorName = books.toSorted((firstAutor, secondAutor) => firstAutor.author.localeCompare(secondAutor.author));

const sortedByReversedAuthorName = books.toSorted((firstAutor, secondAutor) => secondAutor.author.localeComapare(firstAutor.author));

const sortedByAscendingRating = books.toSorted((firstScore, secondScore) => firstScore.rating - secondScore.rating);

const sortedByDescentingRating = books.toSorted((firstScore, secondScore) => secondScore.rating - firstScore.rating);

console.log(sortedByAuthorName);