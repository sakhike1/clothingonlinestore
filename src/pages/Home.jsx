import React from 'react';
import Scrollup from "../components/Scrollup";
import {

    CustomerReviews,
    Hero,
    PromoCard,
    PopularProducts,
    NewShirts,
    Feature,
    Carousel,
    Video,
    Slide,
    Subscribe,

} from "../sections";

const Home = () => {
    return (
        <>

            <section className='xl:padding-l wide:padding-r padding-b'>
                <Hero />
            </section>
            <section className='mb-96'>
                <PromoCard />
            </section>
            <section className='mb-96'>
                <PopularProducts />
            </section>
            <section className='mb-96'>
                <NewShirts />
            </section>
            <section className='mb-96'>
                <Feature />
            </section>
            <section className='mb-96'>
                <Carousel />
            </section>
            <section className='mb-96'>
                <Video />
            </section>
            <section className=' padding'>
                <Slide />
            </section>

            <section className='bg-pale-blue padding'>
                <CustomerReviews />
            </section>
            <section className='padding-x sm:py-32 py-10 w-full'>
                <Subscribe />
            </section>
            <section className='padding-x sm:py-32 py-10 w-full'>
                <Scrollup />
            </section>

        </>
    );
};

export default Home;
