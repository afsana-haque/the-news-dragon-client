import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch(error => console.error(error))
    },[])

    return (
        <div className='mt-4'>
           <h4>All Category</h4> 
           <Button className='my-3 px-3' variant="secondary">National News</Button>
           <div className='ps-4 '>
           
           {
            categories.map(category => <p
                 key={category.id}>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link>
                 </p>)
           }
           </div>
        </div>
    );
};

export default LeftNav;