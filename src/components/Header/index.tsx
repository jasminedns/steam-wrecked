import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../HeaderLinks';
import HamburgerMobile from "@/components/HamburgerMobile";

const Header = () => {
    return (
      <header>
         <div className="bg-[#282523] h-14 w-full flex justify-between relative z-99">
            <HeaderIcon />
            <HeaderLinks />
            <div className="flex justify-end md:hidden z-40">
              <HamburgerMobile />
            </div>
          </div>
      </header>
    
    )
  }
export default Header 