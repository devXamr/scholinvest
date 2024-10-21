import {GrFormNextLink} from "react-icons/gr";
import {useState} from "react";
import {getUserInfo} from "./App.tsx";



export default function UserDash1() {

    const [userInfo, setUserInfo] = useState(getUserInfo)
    return <div className='mx-2 border mt-3 rounded-md shadow-md py-5 px-4 font-cabinet'>
        <div className='flex justify-between mb-4 text-center'>
            <div className='text-3xl mt-4'>{userInfo.name}</div>
            <div className='rounded-full border-2 px-6 py-3'>
                <div className='text-sm font-light'>Rating</div>
                <div className='text-3xl'>86</div>
            </div>
        </div>

        <div className='flex justify-between'>
            <div>
                <div className='font-light text-md'>CGPA</div>
                <div className='font-medium text-xl text-center'>{userInfo.cgpa}</div>

            </div>
            <div>
                <div className='font-light text-md'>Active Loans</div>
                <div className='font-medium text-xl text-center'>0</div>

            </div>
            <div>
                <div className='font-light text-md'>Graduation Year</div>
                <div className='font-medium text-xl text-center'>{userInfo.graduationYear}
                </div>

            </div>
        </div>
        <div className='flex border rounded-xl w-max px-2 mx-auto mt-4 py-0.5'>
            <div>View Full Profile</div>
            <GrFormNextLink className='mt-1'/>
        </div>
    </div>
}