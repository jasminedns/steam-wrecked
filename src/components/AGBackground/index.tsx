import { ReactNode } from 'react'

const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full relative">
      <div 
        className="absolute inset-0 bg-left saturate-150 contrast-125 bg-no-repeat opacity-50 -z-20"
        style={{
          backgroundImage: "url('/images/background/AG_bg.JPEG')",
        }}
      />
      
      <div className="absolute inset-0 bg-black/60 -z-10"></div>
      
   
      <div className="relative p-8 z-10">
        {children}
      </div>
    </div>
  )
}

export default BackgroundWrapper