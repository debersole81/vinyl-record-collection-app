import React from 'react';
import '../App.css';
import AlbumReleases from '../components/AlbumReleases';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

/**Notes
 * Build button to 'View Album Versions'
 * Button will fire a callback in ProtectedComponents.js and provide access to master_id
 * Protected components callback will... 
 * ...call Discogs Master Release Versions EP
 * ...setAlbumVersions data
 * ...setAlbumVersions pagination data (but do I need this if I scroll the overflow?)

 */

/**Refactoring
 * Is there a better way to view/hide the album versions component without clearing and setting state each time?
 */


function AlbumReleasesHeader(props) {

    console.log('Render: AlbumVersionsHeader Component');
    console.log(props);

    /**Destructuring props*/
    const { albumReleasesData } = props.albumReleasesProps;
    const { handleViewAlbumReleases } = props.albumReleasesProps;
    const { handleHideAlbumReleases } = props.albumReleasesProps;

    if (Object.keys(albumReleasesData).length === 0 && albumReleasesData.constructor === Object) {
        return (
            <Container>
                <Row className='row album-versions-header-row'>
                    <Col className='col album-versions-header-h5-col' xs={12} s={12} lg={6}>
                        <h5 className='album-versions-header-thead'>Album Versions</h5>
                    </Col>
                    <Col className='col album-versions-header-button-col' xs={12} s={12} lg={6}>
                        <Button size='sm' variant='outline-light' className='album-versions-header-button' onClick={handleViewAlbumReleases}>SHOW VERSIONS</Button>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='row album-versions-header-row'>
                <Col className='col album-versions-header-h5-col' xs={12} s={12} lg={6}>
                    <h5 className='album-versions-header-thead'>Album Versions</h5>
                </Col>
                <Col className='col album-versions-header-button-col' xs={12} s={12} lg={6}>
                    <Button size='sm' variant='outline-light' className='album-versions-header-button' onClick={handleHideAlbumReleases}>HIDE VERSIONS</Button>
                </Col>
            </Row>
            <AlbumReleases albumReleasesProps={props.albumReleasesProps} albumReleasesPaginationProps={props.albumReleasesPaginationProps} />
        </Container>
    );
};

export default AlbumReleasesHeader;
