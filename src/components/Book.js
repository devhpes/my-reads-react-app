import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <div>
                 <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: this.props.book.imageLinks ? `url(${this.props.book.imageLinks.thumbnail})` : '' }}></div>
                            <div className="book-shelf-changer">
                              <select value={this.props.book.shelf || "none"} onChange = {(event) => {this.props.updateBookShelf(this.props.book, event.target.value)}}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title ? this.props.book.title : "No Title"}</div>
                          <div className="book-authors">{this.props.book.authors ? this.props.book.authors : "No Author"}</div>
                        </div>
                      </li>
            </div>
        );
    }
}

export default Book;