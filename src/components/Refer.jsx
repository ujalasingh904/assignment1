import img1 from "../assets/andriod.png";
import img2 from "../assets/apple.png";
import img3 from "../assets/refer.jpg";
import { Link } from "react-router-dom";

const Refer = () => {
  return (
    <div className='w-full p-6 sm:p-10 md:p-20'>

      <div className='w-full lg:w-[90%] rounded-3xl bg-dark-background mx-auto p-6 sm:p-10 md:p-12 lg:px-16 flex flex-col-reverse lg:flex-row justify-between text-white gap-6 md:gap-10'>

        <div className="w-full lg:w-1/2 flex flex-col justify-between ">

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">Refer your friends and be a part of Zymo</h1>
          <p className="text-base sm:text-2xl md:text-2xl">Download the App for Exclusive Deals and Ease of Booking</p>

          <div className="flex justify-center lg:justify-around mt-4 lg:mt-0">
            <Link to="https://play.google.com/store/apps/details?id=com.letzrent.letzrentnew" className="w-full">
              <img src={img1} className="w-[70%]" />
            </Link>
            <Link to="https://apps.apple.com/in/app/zymo-self-drive-car-rental/id1547829759?utm_source=apple_ios&utm_medium=referral&utm_campaign=app_launch" className="w-full">
              <img src={img2} className="w-[70%]" />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={img3} className="lg:w-[70%] rounded-xl"/>
        </div>

      </div>

    </div> 
  );
}

export default Refer