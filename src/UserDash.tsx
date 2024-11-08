
import UserDash1 from "./UserDash1.tsx";

import UserDash2 from "./UserDash2.tsx";
import nodata from './assets/undraw_no_data_re_kwbl.svg'



export default function UserDash(){



    return <div className='pb-16'>
        <UserDash1/>
        <UserDash2/>
        <div className='mx-2 border mt-3 rounded-md shadow-md py-5 pr-4 pl-4 font-cabinet'>
            <div className='text-3xl mt-4 underline decoration-2 decoration-green-400'>Ongoing Loans</div>
            <div className='py-10 mb-4'>
                <img src={nodata} className='h-28 mx-auto'/>
                <div className='text-center font-light'>You don't have any ongoing loans.</div>
            </div>
        </div>

    </div>
}