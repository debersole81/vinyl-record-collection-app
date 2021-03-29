import React from 'react';
import '../App.css';
import AlbumVersionsPagination from '../components/AlbumVersionsPagination';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

/**Notes
 * Each teable row will need to have an onClick and id attribute
 * id attribute will be equal to albumVersionsData.id
 * onClick attribute will fire a callback in protected components
 * Callback will call the discogsAPIrelease helper func
 * Response from callback will set albumData and rerender album component (via history.push)
 * Set overflow vals on table to create vertical scrolling feature
 */




function AlbumVersions(albumVersionsData) {

    console.log(albumVersionsData[0]);
 
    // /**Destructure props*/
    // const { albumData } = props.albumProps;
    // const { handleViewAlbumVersions } = props.albumVersionsProps;
    // const { albumVersionsData } = props.albumVersionsProps;

    // console.log(albumVersionsData);


    return (
        <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                            <th>Cover Image</th>
                            <th>Title</th>
                            <th>Format</th>
                            <th>Label</th>
                            <th>Cat #</th>
                            <th>Release Country</th>
                            <th>Release Year</th>
                        </tr>
                    </thead>
                </Table>
            </Col>
        </Row>
    );
};

export default AlbumVersions;