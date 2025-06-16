import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../HeaderLinks';
import HamburgerMobile from "@/components/HamburgerMobile";

const Header = () => {
    return (
      <header>
         <div className="bg-[#282523] h-14 w-full flex justify-between">
            <HeaderIcon linkClass="flex items-center cursor-pointer basis-[50%]" 
              imgClass="m-1  sm:m-2 md:m-3  w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] h-auto"/>
            <HeaderLinks />
            <div className="flex justify-end md:hidden z-40">
              <HamburgerMobile />
            </div>
          </div>
      </header>
    
    )
}

export default Header 