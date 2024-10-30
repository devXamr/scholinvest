import {CgProfile} from "react-icons/cg";
import {FaAngleDown} from "react-icons/fa";
import fireworks from "./assets/undraw_fireworks_re_2xi7.svg";

export default function InvestorDash1({username}) {
    return <div>
        <div className='mx-3 flex text-3xl justify-between mt-4 font-cabinet px-4 border-b rounded-md py-3'>
            <div>Hello, <span className='decoration-2 underline decoration-green-400'>{username}</span></div>
            <CgProfile className='mt-1 text-2xl text-green-600'/>


        </div>
        <div className='mx-3 rounded-md pt-2 pb-16 shadow-md border mt-4 '>
            <div className='text-center text-2xl font-cabinet mt-6 mb-3'>Filters</div>
            <div className='flex text-lg font-cabinet justify-center pb-10'>

                <div className='px-2 rounded-full mx-3 shadow-sm flex bg-green-400'>
                    <div>cgpa</div>
                    <FaAngleDown className='mt-1.5'/>
                </div>
                <div className='px-2  rounded-full mx-3 shadow-sm flex bg-green-400'>
                    <div>rating</div>
                    <FaAngleDown className='mt-1.5'/>
                </div>


            </div>
            <div>
                <img src={fireworks} alt='fireworks' className='h-40 mx-auto'/>
                <div className='text-center font-cabinet font-light mt-1 text-lg'>no new applications found</div>
            </div>
        </div>

    </div>

}