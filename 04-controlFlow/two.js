// use of filter operation
// const myNums = [1,2,3,4,5,6,7,8,9,10]
//   const newNums = myNums.filter( (item) => item>4)  // implicit return karta h
// console.log(newNums)


const books = [
  { title: "Book One", genre: "Non-fiction", publish: 1981, edition: 1989 },
  { title: "Book Two", genre: "Fiction", publish: 1992, edition: 1998 },
  { title: "Book Three", genre: "Science", publish: 1987, edition: 1995 },
  { title: "Book Four", genre: "History", publish: 1979, edition: 1986 },
  { title: "Book Five", genre: "Biography", publish: 2001, edition: 2008 },
  { title: "Book Six", genre: "Fantasy", publish: 1995, edition: 2003 },
  { title: "Book Seven", genre: "Mystery", publish: 1984, edition: 1991 },
  { title: "Book Eight", genre: "Technology", publish: 2010, edition: 2016 },
  { title: "Book Nine", genre: "Philosophy", publish: 1975, edition: 1982 },
  { title: "Book Ten", genre: "Self-help", publish: 2018, edition: 2022 }
];
//const userBooks = books.filter( (bk) => bk.genre === 'History')
const userBooks = books.filter( (bk) => bk.publish>2000)
 console.log(userBooks)