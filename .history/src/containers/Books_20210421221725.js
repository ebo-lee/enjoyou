import React, { Component } from 'react';
import BooksList from '../components/BooksList';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


function Books() {
    const [books, setBooks] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ")

    function handleChange(event) {
        const books = event.target.value;
        setBooks(books)
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(books);
    }
    return (
        <div>
            <h1>Search Test</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="search for books" />
            </form>
            <button type="submit" className="button">
                Search
            </button>
        </div>
    )
}


// class Books extends Component {
//     constructor() {
//         super();
//         this.state = { books: [], searchTerm: ""};
//     }

//     handleChange = (event) => {
//         this.setState({ searchTerm: event.target.value })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         let searchTerm = this.state.searchTerm
//         this.searchBooks(searchTerm)
//     }

//     searchBooks = (searchTerm="Top pick") => {
//         fetch(URL + `&query=${searchTerm}`)
//         .then(response => response.json())
//         .then(booksData => this.setState({ books: booksData.result}))
//     }

//     render() {
//         return (
//             <div>
//                 <Form onSubmit={this.handleSubmit}>
//                     <Row>
//                         <Col xs={4}>
//                         <Form.Group controlId="forSearchBooks">
//                             <Form.Control type="text" placeholder="search books" value={this.state.searchTerm} onChange={this.handleChange} />
//                             <Form.Text> Find books enlighening your mind! </Form.Text>
//                         </Form.Group>
//                         </Col>
//                     </Row>
//                     <Button variant="primary" type="submit">Search</Button>
//                 </Form>
//                 <BooksList books={this.state.books} />
//             </div>
            
//         )
//     }
// }

export default Books;