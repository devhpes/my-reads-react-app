import React from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom';


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