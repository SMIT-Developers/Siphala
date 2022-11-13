import jwt from "jsonwebtoken";

const auth = (userType) => {
    const token=localStorage.getItem('token')

    if(token) {
        const user = jwt.decode(token)
        console.log(user)

        if(userType === "STD"){

            if (!user.std_id) {
                localStorage.removeItem("token")
                window.location.href = '/login'
                alert("You need to log in first")
            }
            // else{
            //     window.location.href = '/student-dashboard-home'
            // }
        }

        if(userType === "PRT"){
            if (!user.prt_id) {
                localStorage.removeItem("token")
                window.location.href = '/login'
                alert("You need to log in first")
            }
            // else{
            //     window.location.href = '/parent-dashboard-home'
            // }
        }

    }else{

        window.location.href = '/login'
        alert("You need to log in first")

    }
}

export default auth;
