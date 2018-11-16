import React from 'react';

class Search extends React.Component {
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