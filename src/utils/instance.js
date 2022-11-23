// import React from 'react';
// import axios from "axios";
// import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
//
// const authInstance = axios.create({
//     baseURL: `http://3.39.59.151:5000`
// })
//
// authInstance.interceptors.request.use(
//     (config) => {
//         config.headers['authorization'] = asyncStorage.getItem("@access_token");
//         return config;
//     },
//     (err) => {
//         return Promise.reject(err)
//     }
// )
//
// authInstance.interceptors.response.use(
//     (res)=>{
//
//     },
//     (err)=>{
//         return new Promise((resolve, reject)=>{
//             const originalReq = err.config;
//             if(err.response.status===401){
//                 // 토큰 다시 불러오고 성공시 localStorage.setItem() & config의 header 바꾸기 & return axios(originalReq);
//
//
//             }
//             // resolve (res);
//         })
//     }
// )
//
// export default authInstance;

