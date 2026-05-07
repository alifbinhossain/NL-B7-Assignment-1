// Problem 1
const filterEvenNumbers = (numbers: number[]): number[] =>
  numbers.filter((num) => num % 2 === 0);

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2
const reverseString = (str: string): string => str.split('').reverse().join('');

reverseString('typescript');

// Problem 3
type StringOrNumber = string | number;
const checkType = (input: StringOrNumber): string =>
  typeof input === 'string' ? 'String' : 'Number';

checkType('Hello');
checkType(42);

// Problem 4
type User = {
  id: number;
  name: string;
  age: number;
};
const user: User = { id: 1, name: 'John Doe', age: 21 };

const getProperty = (obj: User, key: keyof User) => obj[key];

getProperty(user, 'name');

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

toggleReadStatus(myBook);

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
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student('Alice', 20, 'A');

student.getDetails();

// Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] =>
  arr1.filter((num) => arr2.includes(num));

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
