import React from 'react';
import Book from './Book';

class BookShelf extends React.Component {
    render() {
        return (
            <div>
            <div className="bookshelf">
               <h2 className="bookshelf-title">{this.props.title}</h2>
               <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books.map((book, key) => <Book updateBookShelf ={this.props.updateBookShelf} book={book} key={key}/>)}
                  </ol>
               </div>
            </div>
         </div>
        );
    }
}

export default BookShelf;