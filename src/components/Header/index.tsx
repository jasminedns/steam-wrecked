import HamburgerMobile from "@/components/HamburgerMobile";
import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../HeaderLinks';
const Header = () => {
    return (
      <header>
        <div className="bg-[#282523] h-14 w-full">
        <div className="bg-[#282523] h-14 w-full flex justify-between">
          <HeaderIcon />
          <HeaderLinks />
          <div className="flex justify-end md:hidden z-40">
            <HamburgerMobile />
          </div>
        </div>
         
        </div>
      </header>
    )
  }
export default Header 