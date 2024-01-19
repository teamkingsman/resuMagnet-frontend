
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";





const Review = ({item}) => {
    const {name,designation,comment,rating} = item;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const StarIcon = i <= rating ? FaStar : FaRegStar;
            stars.push(<StarIcon key={i} className="star-icon" />);
        }
        return stars;
    };
    return (
        <div className="text-center w-8/12 md:w-full md:px-6 py-10 border-t-2 border-r-2 rounded-tr-xl pb-10">
        
        
        <p className="font-bold text-main text-xl ">{comment}</p>
        <h1 className="text-2xl font-bold text-main mt-10">{name}</h1>
        <h3 className="text-xl mb-4 font-bold italic text-neutral-700">{designation}</h3>
        <div className="flex items-center justify-center mt-2 text-[#FFBF00] text-2xl ">
            {renderStars()}
        </div>
    </div>
);
};

export default Review;