const UserGreeting = ({isLoggedIn, username}) => {
    // if(isLoggedIn){
    //     return <h2>Welcome {username}</h2>
    // }else{
    //     return <h2>Please log in the continue</h2>
    // }
    return (
        isLoggedIn
            ? <h2>Welcome {username}</h2>
            : <h2>Please log in to continue</h2>
    );
}
 
export default UserGreeting;