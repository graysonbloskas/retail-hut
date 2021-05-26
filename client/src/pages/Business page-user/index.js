import React from 'react';
import Hero from './Hero';
import SignOut from './SignOut';
import BusinessImage from './BusinessImage';
import BusinessName from './BusinessName';


function business () {
    return (
        <div>
            <Hero />
            <SignOut />
            <BusinessImage />
            <BusinessName />
        </div>
    )
}