const Auth = ({auth}) => {
    return(
        <div className="auth">
            {auth.map((diganta) => {
                return <a key={diganta} href="#">
                    {diganta}
                </a>;
            })}
        </div>
    );
};

export default Auth;