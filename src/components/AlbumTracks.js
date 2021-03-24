import React from 'react';
import '../App.css';
import AlbumVersions from '../components/AlbumVersions';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

function AlbumTracks(albumData) {

    console.log('Render: AlbumTracks Component');
    console.log(albumData);

    return (
        <Container>
            <Row className='row album-tracks-row'>
                <Col className='col'>
                    <h5 className='album-tracks-thead'>Tracklist</h5>
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Position</th>
                                <th>Track Name</th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        {albumData.tracklist.map((track, index) =>
                            <tbody key={index}>
                                <tr>
                                    <td>{track.position}</td>
                                    <td>{track.title}</td>
                                    <td>{(track.duration) ? track.duration : '-'}</td>
                                </tr>
                            </tbody>
                        )}
                    </Table>
                </Col>
            </Row>
            <AlbumVersions />
        </Container>
    );
};

export default AlbumTracks;

