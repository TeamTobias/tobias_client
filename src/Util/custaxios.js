import axios from "axios";

const baseurl = "http://localhost:80"

export default function baseAxios(){
    return  axios.create({
        baseURL: baseurl,
    });
}