import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../HeaderLinks';
import HamburgerMobile from "@/components/HamburgerMobile";

const Header = () => {
  return (
    <header>
      <div className="bg-[#282523] h-14 w-full flex justify-between relative z-99">
        <HeaderIcon linkClass="flex items-center cursor-pointer basis-[50%]"
          imgClass="m-1 sm:m-2 md:m-3  w-[30%] min-[425px]:w-[22%] min-[620px]:w-[20%] min-[700px]:w-[15%] min-[970px]:w-[10%] lg:w-[9%] xl:w-[7%] h-auto"/>         
        <HeaderLinks />
        <div className="flex justify-end md:hidden z-40">
          <HamburgerMobile />
        </div>
      </div>
    </header>
  
  )
}

export default Header 