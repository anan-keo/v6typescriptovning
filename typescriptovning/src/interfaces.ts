interface Person {
    name: string,
    age: number,
    address: string
}

interface Car {
    brand: string,
    model: string,
    year: number
}

interface Book {
    title: string,
    author: string,
    pages: number
}

interface Computer {
    brand: string,
    processor: string,
    ram: string,
    storage: string,
}

interface Movie {
    title: string,
    director: string,
    genre: string
}

interface Student {
    name: string,
    id: string,
    courses: string[]
}

interface Phone {
    brand: string,
    model: string,
    os: string
}

interface Customer {
    name: string,
    customerNumber: string,
    purchaseHistory: string[]
}

interface Product {
    name: string,
    price: number,
    category: string
}

interface Order {
    orderNumber: string,
    productList: string[],
    totalPrice: number
}


export { Person, Car, Book, Computer, Movie, Student, Phone, Customer, Product, Order }