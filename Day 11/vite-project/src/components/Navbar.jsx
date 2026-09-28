import Logo from "./Logo";
import Navigation from "./Navigation";
import Auth from "./Auth";

const Navbar = () => {
    let links = ["Home", "About", "Services", "Contact"];
    let logo = "Dating Site";
    let auth = ["Login", "SignUp"]
    return (
    <nav className="navbar">
        <Logo logo={logo}/> 
        <Navigation links={links}/>
        <Auth auth={auth}/>
    </nav>
);
};

export default Navbar;