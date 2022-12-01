import axios from 'axios';

//axios.defaults.headers.common['Access-Control-Allow-Origin']='*';
const API_URL = "https://osr-dev.s5g.gos.y-cloud.eu/";
delete axios.defaults.headers.common["Access-Control-Allow-Origin"];
class RequestService {
 
    async loadNetapps() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
       // console.log(sessionStorage.getItem(keys[0]));
       
        const requestOptions ={
            method: "get",
            url:API_URL + 'netapp/list/',
            headers:headers
        }
        // const requestOptions = {
        //     method: 'GET',
        //     headers: headers,
        //     //redirect: 'follow'
        //   };
        //   console.log(requestOptions);
        //   const response = await fetch('https://osr-dev.s5g.gos.y-cloud.eu/netapp/list/',requestOptions)
        // .then(async response => {
        //     console.log(response.json());
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

        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async loadNetworkservices() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'ns/list/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async loadVnfs() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'vnf/list/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async loadVdus() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'vdu/list/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async load() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'netapp/list/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async loadEventlogs() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'eventlogs/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async loadUserDetail() {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "get",
            url:API_URL + 'users/details/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async deleteSSH(id) {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "delete",
            url:API_URL + 'users/repokeys/delete/'+id+'/',
            headers:headers
        }
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
    async createUserSSH(payload) {
        let keys = Object.keys(sessionStorage);
        let data = JSON.parse(sessionStorage.getItem(keys[0]));
        let token = data["access_token"]
        let headers = { 'Authorization': "Bearer " + token};
        const requestOptions ={
            method: "post",
            url:API_URL + 'users/repokeys/create/',
            headers:headers,
            data:payload
        }
        console.log(requestOptions)
        const response = await axios(requestOptions).then(response => {
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
        return await response;
    };
}

export default new RequestService();