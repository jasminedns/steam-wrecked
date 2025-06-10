import { ReactNode } from 'react'

const BackgroundWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div 
      className="h-screen w-full bg-cover bg-left saturate-150 contrast-125 bg-no-repeat opacity-50"
      style={{
        backgroundImage: "url('/images/background/AG_bg.JPEG')",
      }}
    >
      <div className="h-full p-8 overflow-auto">
        {children}
      </div>
    </div>
  )
}

export default BackgroundWrapper