const Navigation = ({links}) => {
    return(
        <div className="navigation">
            {links.map((link) => {
                return <a key={link} href="#">
                    {link}
                </a>;
            })}
        </div>
    );
};

export default Navigation;