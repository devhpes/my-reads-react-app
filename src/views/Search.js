import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from '../components/Book';
import {Link} from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';

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

    //Handling search according to the user input in search bar
    handleSubmitQuery  = query => {
        this.setState({query: query})
        let listingBooks = []
        if (query) {
        //BookAPI search API call 
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
            //Adding the state to the listing books
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
                    <DebounceInput
                    minLength={0}
                    debounceTimeout={200} placeholder="Search by title or author"  onChange={(event) => this.handleSubmitQuery(event.target.value)} value={this.state.query}/>
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