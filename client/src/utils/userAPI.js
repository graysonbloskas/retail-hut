import axios from "axios";

export default {
    login: function (userInfo) {
        console.log(userInfo)
        return axios.post("/auth/users/login", userInfo)
    },
    signUp: function (userInfo) {
        console.log(userInfo)
        return axios.post("/auth/users/register", userInfo)

    }
}