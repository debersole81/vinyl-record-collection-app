import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function SearchResults (props) {

    if(Array.isArray(props.data) && props.data.length) {
        return(
            <Container>
                <Row>
                    {props.data.map((results) =>
                        <Col key={results.id} style={{ padding: '1rem' }}>
                            <Card style={{ width: '12rem' }}>
                                <Card.Img variant='top' src={results.cover_image} style={{ height: '12rem' }} alt='Album Cover Art'/>
                                <Card.Body>
                                    <Card.Title className='text-truncate'>{results.title.split(' - ')[1]}</Card.Title>
                                    <Card.Subtitle className='mb-2 text-truncate text-muted'>{results.title.split(' - ')[0]}</Card.Subtitle>   
                                    <Card.Text className='text-truncate'>
                                        {results.label[0]}<br/>
                                        {results.year}<br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }

    return(null);
    //     <Container className='text-center'>
    //         <h1>Search for something!</h1>
    //     </Container>
    // );
};


export default SearchResults;