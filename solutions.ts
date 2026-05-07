// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((num) => num % 2 === 0);
// console.log('--Problem 1--', filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2
const reverseString = (str: string): string => str.split('').reverse().join('');
// console.log('--Problem 2--', reverseString('typescript'));

// Problem 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string =>
  typeof input === 'string' ? 'String' : 'Number';
// console.log('--Problem 3--', checkType('Hello'));
// console.log('--Problem 3--', checkType(42));

// Problem 4
type User = {
  id: number;
  name: string;
  age: number;
};
const user: User = { id: 1, name: 'John Doe', age: 21 };

const getProperty = (obj: User, key: keyof User) => obj[key];

// console.log('--Problem 4--', getProperty(user, 'name'));

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

// console.log('--Problem 5--', toggleReadStatus(myBook));

// Problem 6
// Main Class
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Sub Class
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return {
      name: this.name,
      age: this.age,
      grade: this.grade,
    };
  }
}

const student = new Student('Alice', 20, 'A');
// console.log('--Problem 6--', student.getDetails());

// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] =>
  arr1.filter((num) => arr2.includes(num));

// console.log('--Problem 7--', getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
