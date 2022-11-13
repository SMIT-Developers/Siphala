
const auth = () => {
    const token=localStorage.getItem('token')

    if(token){
        const user=jwt.decode(token)
        console.log(user)
        if(!user){
            localStorage.removeItem(token)
            window.location.href='/login'
            alert("You need to log in first")
        }else{
            populateLogin()
        }
    }
}

export default auth;
