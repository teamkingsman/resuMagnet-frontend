




const Review = ({item}) => {
    const {id,name,designation,comment,rating} = item;
    return (
        <div className="text-center bg-neutral-400 px-10 py-4">
            <h1 className="text-4xl font-bold text-main mb-2">{name}</h1>
            <h3 className="text-xl mb-4">{designation}</h3>
            <p className="font-bold ">{comment}</p>
            <h3 className="text-2xl text-highlight_color mt-2">{rating}</h3>
        </div>
);
};

export default Review;