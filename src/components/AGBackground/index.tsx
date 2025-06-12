// import { ReactNode } from 'react'

// const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
//   return (
//     <>
//     <div className="relative h-screen bg-[linear-gradient(5deg,_rgba(208,120,11,1)_0%,_rgba(125,85,45,1)_32%,_rgba(107,93,93,1)_55%,_rgba(82,74,74,1)_100%)]">
//     <div className="absolute inset-0">
//         <div className="relative z-10 text-white flex flex-col items-center justify-center h-full ">
//             <img src="/images/background/AG_bg.JPEG" alt="Background" className="w-full min-h-full object-cover object-left-bottom opacity-10" />
//             <div className="absolute top-4">
           
//             {children}
              
//             </div>
//             </div>
//         </div>
//     </div>
//       </>
//   )
// }

// export default BackgroundWrapper

import { ReactNode } from 'react';

const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen bg-[linear-gradient(5deg,_rgba(208,120,11,1)_0%,_rgba(125,85,45,1)_32%,_rgba(107,93,93,1)_55%,_rgba(82,74,74,1)_100%)]">
      
      {/* Background image behind content */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/background/AG_bg.JPEG"
          alt="Background"
          className="w-full h-full object-cover object-left-bottom opacity-10"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 text-white">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
