const Footer = () => {
    return (
        <div className="bg-gray-200 md:mt-36 mt-12">
            <div className="container mx-auto p-4 ">
            <div className="md:flex justify-between flex-wrap gap-5 pb-16 border-b-2 border-gray-400 border-opacity-70">
                <div className="mt-8 ">
                    <h1 className="text-4xl font-bold">Elite Haven</h1>
                </div>
                <div className="mt-8">
                    <h1 className="text-2xl font-semibold">Address</h1>
                    <h6 className="font-semibold opacity-80">Germany-785 15h Street.</h6>
                    <h6 className="font-semibold opacity-80">Office 478</h6>
                    <h6 className="font-semibold opacity-80">Berlin.Be 81566</h6>
                </div>
                <div className="mt-8">
                <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <h6 className="font-semibold opacity-80">info@email.com</h6>
                    <h6 className="font-semibold opacity-80">+18400000000</h6>
                </div>
                <div className="mt-8">
                <h1 className="text-2xl font-semibold">Useful Links</h1>
                    <h6 className="font-semibold opacity-80">Home</h6>
                    <h6 className="font-semibold opacity-80">Update Profiel</h6>
                    <h6 className="font-semibold opacity-80">Book Mark</h6>
                </div>
            </div>
            <div className=" md:flex justify-between text-center mt-12 pb-6">
                <div><p>©2024 Elite Haven  all right reserved.</p></div>
                <div>social icons</div>
            </div>
        </div>
        </div>
    );
};

export default Footer;