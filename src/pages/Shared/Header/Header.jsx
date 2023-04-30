import React, { useContext } from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='fw-semibold'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mb-3'>
                <Button variant="danger">Danger</Button>
                <Marquee speed={70}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....
                </Marquee>
            </div>

        </Container>
    );
};

export default Header;