import Swal from 'sweetalert2/dist/sweetalert2.all'
const logout = async () => {
    const token = localStorage.getItem('token')


    if (token) {

        localStorage.clear()
        await Swal.fire({
            title: 'Warning!',
            text: 'You log out',
            icon: 'warning',
            confirmButtonText: 'Ok'
        })
        window.location.href = '/'


    }
}

export default logout;
