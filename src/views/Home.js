import React from 'react';


class Home extends React.Component {
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