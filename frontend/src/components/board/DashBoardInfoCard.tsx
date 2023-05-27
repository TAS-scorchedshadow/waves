import React from "react";

const DashBoardInfoCard: React.FC = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  console.log(windowHeight + " " + windowWidth);
  return (
    <>
      <div
        className="bg-white rounded-3xl shadow-lg flex flex-col items-center text-black
                      lg:ml-[230px]  lg:w-[354px] lg:h-[469px]
                      md:ml-[97.5px] md:w-[190.5px] md:h-[277.5px]"
      >
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
        <p
          className="not-italic font-normal leading-[19px] tracking-[-0.02em]
                     lg:text-[22px]
                     md:text-sm"
        >
          💀 Conducting rizzearch
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
            Advanced Settings
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-[22px] lg:h-[22px]
                       md:w-[15px] md:h-[15px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default DashBoardInfoCard;