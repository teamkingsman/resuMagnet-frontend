import ClientReviews from "@/components/ClientReviews/ClientReviews";

const page = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-4 px-3 w-full text-center">
                <h1 className="text-3xl md:text-4xl mt-4 font-extrabold">Give Review</h1>
                <p className = "text-2xl md:text-3xl py-2 font-bold">Share your experience and shape our future together</p>
            </div>
            {/* form */}
            <ClientReviews></ClientReviews>
        </div>
    );
};

export default page;