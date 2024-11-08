import nothingFound from "./assets/undraw_void_-3-ggu.svg";


export function InvestorDash2() {
    return <div className='mx-2 mt-3 rounded-md shadow-md py-3 px-4 font-cabinet border'>
        <div className='text-3xl mt-4 underline decoration-2 decoration-green-400'>Ongoing Investments</div>
        <div className='mt-11 mb-11 '>
            <img src={nothingFound} className='h-28 mx-auto'/>
            <div className='font-light text-center mt-2'>You have no ongoing investments</div>

        </div>


    </div>
}