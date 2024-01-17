
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";



const Review = ({item}) => {
    const {id,name,designation,comment,rating} = item;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const StarIcon = i <= rating ? FaStar : FaRegStar;
            stars.push(<StarIcon key={i} className="star-icon" />);
        }
        return stars;
    };
    return (
        <div className="text-center bg-sub_color px-20 py-10">
        <h1 className="text-4xl font-bold text-main mb-2">{name}</h1>
        <h3 className="text-2xl mb-4 font-bold italic text-neutral-700">{designation}</h3>
        <p className="font-bold text-main text-xl">{comment}</p>
        <div className="flex items-center justify-center mt-2 text-highlight_color text-2xl">
            {renderStars()}
        </div>
    </div>
);
};

export default Review;