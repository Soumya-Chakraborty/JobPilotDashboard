import React from "react";

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Trusted by job seekers worldwide
      </h5>
      <ul className="flex">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <li key={index} className="flex h-[8.5rem] flex-1 items-center justify-center">
            <span className="text-2xl font-bold text-n-1/50">Job Pilot</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
