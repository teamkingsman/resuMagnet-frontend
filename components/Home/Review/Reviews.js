import Review from './Review';
import reviewsData from '/assets/review.json'

const Reviews = () => {
    return (
        <div>
            <h1>Reviews</h1>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20">
                {

                    reviewsData.map(item => <Review key={item.id} item={item}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;