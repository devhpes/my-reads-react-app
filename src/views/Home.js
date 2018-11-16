import React from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom';
import BookShelf from '../components/BookShelf';


class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount(){
        BooksAPI.getAll()
        .then(books => {
            this.setState({books: books})
        });
    }

    //Updating book shelf, Book will set on a shelf according to the user selection
    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
        .then(() => {
            book.shelf = shelf;
            this.setState(state => ({
                books: state.books.filter(bk => bk.id !== book.id).concat([book])
            }));
        });
    }

    render() {
        return (
            <div>
                 <div className="list-books">
                 <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <BookShelf title="Currently Reading" updateBookShelf ={this.updateBookShelf} books = {this.state.books.filter(book =>
                 book.shelf === "currentlyReading")}/>
                <BookShelf title="Want To Read" updateBookShelf ={this.updateBookShelf} books = {this.state.books.filter(book =>
                 book.shelf === "wantToRead")}/>
                <BookShelf title="Read" updateBookShelf ={this.updateBookShelf} books = {this.state.books.filter(book =>
                book.shelf === "read")}/>
                </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default Home;