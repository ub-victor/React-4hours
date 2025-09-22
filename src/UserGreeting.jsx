const UserGreeting = ({isLoggedIn = true, username ="Guess"}) => {
    // if(isLoggedIn){
    //     return <h2>Welcome {username}</h2>
    // }else{
    //     return <h2>Please log in the continue</h2>
    // }
    // return (
    //     isLoggedIn
    //         ? <h2 className="welcome">Welcome {username}</h2>
    //         : <h2 className="login">Please log in to continue</h2>
    // );
    const welcome = <h2 className="welcome">Welcome {username}</h2>;
    const login = <h2 className="login">Please log in to continue</h2>;

    return(
        isLoggedIn? welcome : login
    );

}
 
export default UserGreeting;