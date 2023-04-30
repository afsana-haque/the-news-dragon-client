import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-center mt-4'>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugiat molestias id voluptas dicta iusto deserunt sunt porro magnam dolore nostrum tempora possimus eaque excepturi repellendus facere, perferendis illo placeat.</p>
            <p>Go back to <Link  to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;