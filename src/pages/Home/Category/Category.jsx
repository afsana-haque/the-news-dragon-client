import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCard/NewsCart';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div className='mt-4'>
            { id && <h2 className='fw-bold mb-3'>Dragon News Home: {categoryNews.length}</h2>}
            {
               categoryNews.map(news => <NewsCart
               key={news._id}
               news={news}
               ></NewsCart>) 
            }
        </div>
    );
};

export default Category;