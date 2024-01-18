import Review from './Review';

import reviewsData from '/assets/review.json'
import { FaArrowLeft } from "react-icons/fa";




const Reviews = () => {
    return (
        <div className=''>
            <div>

                <div className=' my-8 pl-20'>
                    <p className='text-6xl  text-main'>Loved &</p>
                    {/* <p className='text-5xl font-bold text-sub_color '>&</p> */}
                    <p className='text-6xl font-bold text-main '> Trusted </p>
                    <p><span className='text-6xl text-neutral-600'>by...</span></p>

                </div>


                <div>
                    <div className='text-4xl mb-4 pl-20'>
                        <FaArrowLeft></FaArrowLeft>
                    </div>


                </div>





            </div>
            

            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">

                <div className="w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-10  gap-8  mb-20">
                {

                    reviewsData.map(item => <Review key={item.id} item={item}></Review>)
                }
            </div>
                   
                </div>
                
            </div>


        </div>
    );
};

export default Reviews;