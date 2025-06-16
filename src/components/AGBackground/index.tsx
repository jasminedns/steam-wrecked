import { ReactNode } from 'react';

const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-full md:min-h-full bg-[linear-gradient(5deg,_rgba(208,120,11,1)_0%,_rgba(125,85,45,1)_32%,_rgba(107,93,93,1)_55%,_rgba(82,74,74,1)_100%)] -mb-58 pb-65 md:-mb-36 md:pb-36">
      <div className="absolute inset-0 z-10">
        <img
          src="/images/background/AG_bg.JPEG"
          alt="Background"
          className="w-full h-fit md:h-full object-cover object-left-bottom opacity-10"
        />
      </div>
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-6">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
