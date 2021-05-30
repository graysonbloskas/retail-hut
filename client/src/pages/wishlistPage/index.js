import React, {useState, useEffect} from 'react';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Row from '../../components/Row';
// import homepageHero from '../../components/Homepage-Hero';
import Header from '../../components/Header'
import API from '../../utils/API';
// import FeaturedList from '../../components/FeaturedList';

const WishlistPage = () => {
    const [wishList, setWishList] = useState ([]);
    useEffect (() => {
        console.log(wishList);
        // fetch ("/api/wishlist/1")
        API.getWishList()
        .then (res => res.json())
        .then (listItems => {
            console.log(listItems);
            // const wList = [];
            // while(listItems.length) {
            //     wList.push (listItems.splice(0, 3));
            // }
            setWishList (listItems);
        })
        .catch (console.error);
    }, []);
    //do map function
    if (!wishList.length)
    return (<Container fluid><Header /><Row>You Have No Wishlist Items</Row></Container>);
    return (    
        <Container fluid>
        <Header />
            {wishList.map((row, index) => (
                <Row key={index}>
                    {row.map(item => (
                        <Col size='md-6' key={item._id}>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title} - {item.description}</p>
                            <p>${item.price}</p>
                            <p><a href={item.shop.href}>{item.shop.name}</a></p>
                        </Col>
                    ))}
                </Row>
            ))}
        </Container>
    )
}

export default WishlistPage;