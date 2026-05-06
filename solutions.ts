// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((num) => num % 2 === 0);
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Problem 2
const reverseString = (str: string): string => str.split('').reverse().join('');
// console.log(reverseString('typescript'));

// Problem 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string =>
  typeof input === 'string' ? 'String' : 'Number';
// console.log(checkType('Hello'));
// console.log(checkType(42));

// Problem 4 (TODO)

// Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
};

interface ReturnToggleReadStatus extends Book {
  isRead: boolean;
}

const toggleReadStatus = (book: Book): ReturnToggleReadStatus => ({
  ...book,
  isRead: true,
});

// console.log(toggleReadStatus(myBook));

// Problem 5 (TODO)

// Problem 6 (TODO)

// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] =>
  arr1.filter((num) => arr2.includes(num));

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
