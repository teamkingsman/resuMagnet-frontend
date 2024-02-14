'use client'
import { ReviewsofUser } from "@/lib/BuilderAPI";


const ClientReviews = () => {

    const handleReviews =  async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const  designation= form.designation.value;
        const  comment= form.comment.value;
        const  rating= form.rating.value;

        const formData = { name , designation , comment , rating}
        console.log(formData);

        try {
            const response = await ReviewsofUser(formData);
            console.log("Review sent successfully", response);
            // router.push("/")
        } catch (error) {
            console.error("Error sending Review data", error);
          }
      
    }
    return (
        <div>
            <div>
                <form onSubmit={handleReviews}>
                    {/* user name */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your Name</span>
                        </div>
                        <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </label>
                    {/* designation */}
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Designation</span>
                        </div>
                        <input type="text" name="designation" placeholder="Type Your Designation" className="input input-bordered w-full max-w-xs" />
                    </label>

                    {/* sms */}
                    <label className="form-control  w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Your words are value able for us</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder="review comment" name="comment"></textarea>
                    </label>
                    {/* sms */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Give a rating from 1 to 5</span>
                        </div>
                        <input type="text" name="rating" placeholder="Type between 1 to 5" className="input input-bordered w-full max-w-xs" />
                    </label>
                    <input className="btn text-main py-3 my-4" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default ClientReviews;