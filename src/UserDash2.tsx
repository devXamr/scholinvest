import {GrFormNextLink} from "react-icons/gr";
import nothingFound from "./assets/undraw_void_-3-ggu.svg";

export default function UserDash2() {
    return <div className='mx-2 mt-3 rounded-md shadow-md py-3 px-4 font-cabinet border'>
        <div className='text-3xl mt-4 underline decoration-2 decoration-green-400'>Your Applications</div>
        <div className='mt-11 mb-11 '>
            <img src={nothingFound} className='h-28 mx-auto'/>
            <div className='font-light text-center'>You have no open requests</div>

        </div>

        <div className='bg-green-400 text-lg font-medium w-max flex mx-auto px-2 py-1 rounded-md'>
            <div> Create New</div>
            <GrFormNextLink className='mt-1'/>
        </div>

    </div>

}