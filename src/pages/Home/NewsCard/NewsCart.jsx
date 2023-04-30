import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar,} from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author,rating, total_view, } = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex gap-2 align-items-center'> 
                <Image style={{height:"40px"}} src={author?.img} roundedCircle></Image>
                <div className='flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
                </div>
                <div  className='fs-5'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : 
                    <>{details.slice(0, 250)}.... <Link to={`/news/${_id}`} className='text-warning fw-bold text-decoration-none'>Read More</Link></>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                    className='text-warning'
                      placeholderRating={rating.number}
                      readonly
                      emptySymbol={<FaRegStar></FaRegStar>}
                      placeholderSymbol={<FaStar></FaStar>}
                      fullSymbol={<FaStar></FaStar>}
                    ></Rating> 
                    <span className='mx-2'>{rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;