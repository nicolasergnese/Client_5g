import axios from 'axios';

//axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
       // const requestOptions = {
        //     method: 'GET',
        //     headers: headers,
        //     //redirect: 'follow'
        //   };
        //   console.log(requestOptions);
        //   const response = await fetch('https://osr-dev.s5g.gos.y-cloud.eu/netapp/list/',requestOptions)
        // .then(async response => {
        //     //const data = await response.json();
        //     console.log(response.status);
        //     // check for error response
        //     if (!response.ok) {
        //         // get error message from body or default to response statusText
        //         const error = (data && data.message) || response.statusText;
        //         return Promise.reject(error);
        //     }

            
        //     return response;
        // })
        // .catch(error => {
        //    // this.setState({ errorMessage: error.toString() });
        //     console.error('There was an error!', error);
        //     return error
        // }); 
        // return response;
const API_URL = "https://osr-dev.s5g.gos.y-cloud.eu/";

class RequestService {
    async load() {
        let keys = Object.keys(sessionStorage);
        console.log(sessionStorage.getItem(keys[0]));
        const data = JSON.parse(sessionStorage.getItem(keys[0]));
        const token = data["access_token"]
        const headers = { 'Authorization': "Bearer " + token };

        const response = await axios.get(API_URL + "netapp/list/", { headers: headers }).then(response => {
            //console.log(response);
            return response;

        }).catch(error => {
            //handle error
            console.log(error);
            //alert(error.response);
            if (error.message === "Network Error") {
                error.response = {}
                error.response.message = "ERR_NETWORK"
                error.response.status = 503;
            }
            return error.response;
        });
        return response;
    };
}

export default new RequestService();