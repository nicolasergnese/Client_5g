import axios from 'axios';
const API_URL = "https://identity.s5g.gos.y-cloud.eu/auth/realms/s5g/protocol"+"/";

class AuthService {
    async login(data) {
        delete axios.defaults.headers.common["Access-Control-Allow-Origin"];
        //axios.defaults.headers.common["Content-Type"]="application/x-www-form-urlencoded";
        const headers={ 
            "Content-Type": "application/x-www-form-urlencoded"
          }
        console.log(data)
        const requestOptions ={
            method: "post",
            url:API_URL + 'openid-connect/token',
            headers:headers,
            data:data
        }
        const response = await axios(requestOptions).then(response => {
            console.log(response);
            return response;

        }).catch(error => {
            //handle error
            console.log(axios.defaults.headers)
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