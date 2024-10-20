import {useState} from "react";
import {getUserInfo} from "./App.tsx";



export default function UserDash(){
    const [userInfo, setUserInfo] = useState(getUserInfo)

    return <div>
        <div>username: {userInfo.name}</div>
        <div>annual income: {userInfo.annualIncome}</div>
        <div>graduation year: {userInfo.graduationYear}</div>
        <div>user desc: {userInfo.briefDescription}</div>
    </div>
}