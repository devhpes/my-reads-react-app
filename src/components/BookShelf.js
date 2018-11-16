import React from 'react';

class BookShelf extends React.Component {
    render() {
        return (
            <div>
            <div className="bookshelf">
               <h2 className="bookshelf-title">{this.props.title}</h2>
               <div className="bookshelf-books">
                  <ol className="books-grid">
                  </ol>
               </div>
            </div>
         </div>
        );
    }
}

export default BookShelf;