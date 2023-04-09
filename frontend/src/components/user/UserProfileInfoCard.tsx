import React from "react";

const UserProfileInfoCard: React.FC = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  console.log(windowHeight + " " + windowWidth);
  return (
    <>
        <img
          className="rounded-full 
                     lg:mt-[40px] lg:h-[140px]
                     md:mt-[22.5px] md:h-[90px]"
          src="../../../public/profile.jpeg"
          alt="profile"
        />
        <p
          className="not-italic font-semibold leading-9
                     lg:mt-[22px] lg:text-[40px]
                     md:mt-[13.5px] md:text-[22.5px]"
        >
          Mark Tran
        </p>
        <p
          className="not-italic font-normal leading-[22px] opacity-70 
                      lg:mt-[22px] lg:text-[20px]
                      md:mt-[13.5px] md:text-[11.25px]"
        >
          marktran873@gmail.com
        </p>
        <hr
          className="border-1 border-black w-[80%] opacity-30
                      lg:my-6
                      md:my-2"
        />
        <div className="flex flex-row items-center justify-between">
          <p
            className="not-italic font-normal leading-[19px] tracking-[-0.02em]
                       lg:text-[22px] lg:pr-[10px]
                       md:text-sm md:pr-[7.5px]"
          >
            Edit Profile
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
        <hr
          className="border-1 border-black w-[80%] opacity-30
                       lg:my-6
                       md:my-2"
        />
        <div className="flex flex-row items-center justify-between">
          <p
            className="not-italic font-normal leading-[19px] tracking-[-0.02em]
                       lg:text-[22px] lg:pr-[10px]
                       md:text-sm md:pr-[7.5px]"
          >
            Edit Password
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </div>
    </>
  );
};

export default UserProfileInfoCard;
