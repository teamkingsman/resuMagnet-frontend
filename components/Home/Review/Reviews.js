import Review from './Review';
import reviewsData from '/assets/review.json'

const Reviews = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto my-8'>
            <p className='text-6xl font-bold text-main'>Loved</p>
            <p className='text-5xl font-bold text-sub_color pl-52'>&</p>
            <p className='text-6xl font-bold text-main pl-64'> Trusted <span className='text-xl text-neutral-600'>by. . . . . . .</span></p>

            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-20">
                {

                    reviewsData.map(item => <Review key={item.id} item={item}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;