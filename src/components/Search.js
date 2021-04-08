import React from 'react';
import '../App.css';
import SearchResults from './SearchResults';
import SearchResultsPaginationWrapper from './SearchResultsPaginationWrapper';
import SearchResultsPagination from './SearchResultsPagination';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/**Notes
 * Destructure props
 * Add a maginfying glass icon to the search form
 * Add an X that will clear the search form and state
 * Add spinner while loading
 * Add 'no results found'
 */

function Search(props) {

    console.log('Render: Search Component');

    console.log(props);

    /** Destructure props */
    const { search } = props.searchProps;
    const { handleSearch } = props.searchProps;
    const { handleSearchSubmit } = props.searchProps;

    return (
        <React.Fragment>
            <Jumbotron className='search-jumbotron'>
                <Row className='row'>
                    <Col className='col'>
                        <h1>Search Albums</h1>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='col'>
                        <p className='search-p lead text-muted'>Find an album to add to your collection or wishlist.</p>
                    </Col>
                </Row>
                <Row className='row justify-content-center'>
                    <Col className='col' md={10} lg={8}>
                        <Form className='search-form' onSubmit={handleSearchSubmit}>
                            <Form.Group>
                                <Form.Label srOnly>Search</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='search'
                                    placeholder='Type an album or artist name.'
                                    value={search}
                                    onChange={handleSearch}
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
            <SearchResults {...props.searchResultsProps} />
            <SearchResultsPaginationWrapper {...props.searchResultsPaginationProps} />
        </React.Fragment>
    );
};

export default Search;