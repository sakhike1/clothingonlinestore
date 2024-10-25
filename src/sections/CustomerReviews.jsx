import ReviewCard from "../components/ReviewCard.jsx";
import { reviews } from "../constants";

const CustomerReviews = () => {
    // Display only the first review (or change the index to any specific review you want)
    const displayReview = reviews[0]; // Change this index to display different reviews

    return (
        <section className='max-container -mt-[10px]'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                What Our
                <span className='text-gray-400'> Customers </span>
                Say?
            </h3>


            <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {/* Render only one ReviewCard with displayReview data */}
                <ReviewCard
                    key={displayReview.id} // Assuming id is unique for each review
                    imgURL={displayReview.imgURL}
                    customerName={displayReview.customerName}
                    rating={displayReview.rating}
                    feedback={displayReview.feedback}
                />
            </div>
        </section>
    );
};

export default CustomerReviews;
