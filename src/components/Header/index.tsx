import HamburgerMobile from "@/components/HamburgerMobile";
const Header = () => {
    return (
        <header>
        <div className="bg-black h-6 w-full"></div>
        <div className="bg-[#282523] h-14 w-full">
          <div className="flex justify-end md:hidden z-40">
        <HamburgerMobile />
        </div>
        </div>
      </header>
    )
}

export default Header 