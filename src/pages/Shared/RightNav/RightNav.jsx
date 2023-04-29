import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"
import "./RightNav.css"

const RightNav = () => {
    return (
        <div className='mt-4'>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> instagram</ListGroup.Item>
                </ListGroup>
            </div>
                <QZone></QZone>
                <div className='bg'>
                <img src={bg} alt="" />
                </div>
        </div>
    );
};

export default RightNav;