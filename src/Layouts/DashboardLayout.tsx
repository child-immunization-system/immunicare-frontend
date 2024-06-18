import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-auto  not-italic leading-normal">
      <div className="flex flex-col lg:hidden mt-6 justify-center h-screen text-center">
        <h1 className="font-bold text-base text-center mb-2">
          Sorry, this page is not optimized for mobile devices.
        </h1>
        <p className="text-neutral-700 text-sm">
          Please try viewing it on a larger screen, such as a laptop or desktop
          computer, for a better experience.
        </p>
        <p className="text-neutral-700 text-sm">
          Thank you for your understanding. 😊
        </p>
      </div>

      <div className="w-full md:flex justify-between h-auto hidden">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
