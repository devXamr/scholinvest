import {useState} from "react";
import {getUserInfo} from "./App.tsx";
import { GrFormNextLink } from "react-icons/gr";
import UserDash1 from "./UserDash1.tsx";
import nothingFound from './assets/undraw_void_-3-ggu.svg'



export default function UserDash(){
    const [userInfo, setUserInfo] = useState(getUserInfo)

    return <div>
        <UserDash1/>
        <div className='mx-2 border mt-3 rounded-md shadow-md py-3 px-4 font-cabinet'>
            <div className='text-3xl mt-4'>Open Loan Requests</div>
            <div className='mt-11 '>
                <img src={nothingFound} className='h-28 mx-auto'/>
                <div className='font-light text-center'>You have no open requests</div>

            </div>

            <div>create a new request</div>
            <div>see more</div>
        </div>
    </div>
}