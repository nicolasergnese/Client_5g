import axios from 'axios';
axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
const API_URL = "https://osr-dev.s5g.gos.y-cloud.eu"+"/";

class AuthService {
    async login(data) {
        const response = await axios.post(API_URL + "openid-connect/token", data).then(response => {
            //console.log(response);
            return response;

        }).catch(error => {
            //handle error
            console.log(error);
            //alert(error.response);
            if (error.message==="Network Error")
                {
                    error.response={}
                    error.response.message="ERR_NETWORK"
                    error.response.status=503;
                }
            return error.response;
        });
        return response;
    };
}

export default new AuthService();