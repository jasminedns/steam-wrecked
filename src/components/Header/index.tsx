import HeaderIcon from '../HeaderIcon';
import HeaderLinks from '../HeaderLinks';


const Header = () => {
    return (
        <header >
        <div className="bg-black h-6 w-full"></div>
        <div className="bg-[#282523] h-14 w-full flex justify-between">

        <HeaderIcon />
        <HeaderLinks />
        </div>
      </header>
      
    )
}

export default Header 