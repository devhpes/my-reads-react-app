import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';
import {Link} from 'react-router-dom';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query : "",
            books: [],
            listingBooks: [],
        }
    }

    componentDidMount(){
      BooksAPI.getAll()
      .then(books => {
          this.setState({books: books})
      });
    }

    //Updating the book shelf according to user selection
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
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;