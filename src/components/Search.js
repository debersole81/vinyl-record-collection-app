import React from 'react';
import '../App.css';
import SearchResults from './SearchResults';
import SearchResultsPaginationWrapper from './SearchResultsPaginationWrapper';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


/**Notes
  * Add a maginfying glass icon to the search form
 * Add an X that will clear the search form and state
 * Add spinner while loading
 * Add 'no results found'
 */

function Search(props) {

    /** #region Props destructure */
    const { search, onSearchFormChange, handleSearchSubmit } = props.searchProps;
    /** #endregion Props destructure */

    return (
        <React.Fragment>
            <Jumbotron className='search-jumbotron'>
                <Row className='row'>
                    <Col className='col'>
                        <h1>Search Albums</h1>
                        <p className='lead text-muted'>Find an album to add to your collection or wishlist.</p>
                    </Col>
                </Row>
                <Row className='row justify-content-center'>
                    <Col className='col' md={10} lg={8} xl={8}>
                        <Form className='search-form' onSubmit={handleSearchSubmit}>
                            <Form.Group>
                                <Form.Label srOnly>Search</Form.Label>
                                <Row className='row justify-content-center'>
                                    <Col className='col search-form-col' xs={10} sm={11} md={11} lg={11} xl={11}>
                                        <Form.Control
                                            type='text'
                                            name='search'
                                            placeholder='Type an album or artist name.'
                                            value={search}
                                            onChange={onSearchFormChange}
                                        />
                                    </Col>
                                    <Col className='col search-button-col' xs={2} sm={1} md={1} lg={1} xl={1}>
                                        <Button variant='dark' size='sm' className='search-button' onClick={handleSearchSubmit}>Go!</Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
            <SearchResults searchResultsProps={props.searchResultsProps} />
            <SearchResultsPaginationWrapper searchResultsPaginationProps={props.searchResultsPaginationProps} />
        </React.Fragment>
    );
};

export default Search;