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

    handleSubmitQuery  = query => {
        this.setState({query: query})
        let listingBooks = []
        if (query) {
          BooksAPI.search(query).then(book => {
            if (book.length) {
              listingBooks = book.map(bk => {
                const bookIndex = this.state.books.findIndex(s => s.id === bk.id)
                if( bookIndex >= 0 ) {
                  return this.state.books[bookIndex]
                } else {
                  return bk
                }
              })
            }
            this.setState({listingBooks})
          })
        }
        else {
          this.setState({listingBooks})
        }
      } 

    render() {
        return (
            <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"  onChange={(event) => this.handleSubmitQuery(event.target.value)} value={this.state.query}/>
                    </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        {this.state.listingBooks.map((book, i) => ( 
                        <Book updateBookShelf ={this.updateBookShelf} key={i} book={book} />
                        ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;