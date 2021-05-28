import React from 'react';
import Hero from '../../components/Hero'
import Header from '../../components/Header'
// import SignOut from '../../components/SignOut';
import BusinessImage from '../../components/BusinessImage';
// import BusinessName from './BusinessName';


const Business = () => {
    return (
        <div>
            <Header />
            <Hero />
            {/* <SignOut /> */}
            <BusinessImage />
        </div>
    )
}

export default Business;