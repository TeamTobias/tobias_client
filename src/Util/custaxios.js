import axios from "axios";

const baseurl = "http://localhost:8080"

export default function baseAxios(){
    return  axios.create({
        baseURL: baseurl,
    });
}