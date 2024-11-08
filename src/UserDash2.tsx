import {GrFormNextLink} from "react-icons/gr";
import nothingFound from "./assets/undraw_void_-3-ggu.svg";
import {useEffect, useState} from "react";
import {getUserInfo} from "./App.tsx";


export function getLoanApplications(){
    const loans = JSON.parse(localStorage.getItem('user_apps'))

    if (!loans) return []

    return loans
}

export default function UserDash2() {

    let userInfo = getUserInfo()
    const [creationModalOpen, setCreationModalOpen] = useState(false)

    const [loanApplications, setLoanApplications] = useState(getLoanApplications)

    const [maxError, setMaxError] = useState(false)
    const [incompleteAppError, setIncompleteAppError] = useState(false)

    const [myApplications, setMyApplications] = useState([])

    const [singleLoanApplication, setSingleLoanApplication] = useState({loanAmount: 0, rateOfInterest: 0, interestCategory: 0, return: '', purposeOfLoan: '',})


    useEffect(() => {
        localStorage.setItem('user_apps', JSON.stringify(loanApplications))
        setMyApplications(loanApplications.filter(eachUser => eachUser.user === userInfo.name))


    }, [loanApplications]);

    function handleSingleLoanReq(){
        if(singleLoanApplication.purposeOfLoan === '' || singleLoanApplication.loanAmount === 0 || singleLoanApplication.rateOfInterest === 0 || singleLoanApplication.return === ''){
            setIncompleteAppError(true)
        }  else {
            if(singleLoanApplication.rateOfInterest >= 6 && singleLoanApplication.rateOfInterest <= 8 ){
                setSingleLoanApplication(prev => ({...prev, interestCategory: 1}))
            }else if(singleLoanApplication.rateOfInterest >= 9 && singleLoanApplication.rateOfInterest <= 10 ){
                setSingleLoanApplication(prev => ({...prev, interestCategory: 2}))
            }else if(singleLoanApplication.rateOfInterest >= 11 && singleLoanApplication.rateOfInterest <= 12 ){
                setSingleLoanApplication(prev => ({...prev, interestCategory: 3}))
            }

            setLoanApplications(prev => [...prev, {user: userInfo.name, data: singleLoanApplication}])
            setSingleLoanApplication({loanAmount: 0, rateOfInterest: 0, interestCategory: 0, return: '', purposeOfLoan: '',})
            setCreationModalOpen(false)
        }

    }
    
    return <div className='mx-2 mt-3 rounded-md shadow-md py-3 px-4 font-cabinet border'>
        <div className='text-3xl mt-4 underline decoration-2 decoration-green-400'>Your Applications</div>
        <div className='mt-11 mb-11 '>
            {myApplications.length > 0 && myApplications.map(eachApp => <div className='flex border justify-between px-3'>
                <div>
                    <div className='font-light text-sm'>requested amount</div>
                    <div className='text-3xl'>{eachApp.data.loanAmount}</div>
                </div>
                <div>
                    <div className='font-light text-sm'>pref. interest</div>
                    <div className='text-green-600 font-medium'>{eachApp.data.rateOfInterest + '%'}</div>
                    <div className='font-light text-sm'>repayment</div>
                    <div className='text-green-600 font-medium'>{eachApp.data.return}</div>
                </div>
            </div>)}

            {myApplications.length === 0 && <div>
            <img src={nothingFound} className='h-28 mx-auto'/>
            <div className='font-light text-center'>You have no open requests</div>
           </div>}

        </div>

        {creationModalOpen && <div className='inset-0 backdrop-blur-sm bg-black bg-opacity-25 fixed border'>
            <div className='border px-4 py-3 mx-3 mt-56 bg-white rounded-md '>
                <div className='text-lg mt-3 font-cabinet'>Enter the loan amount below:</div>
                <input type='number' value={singleLoanApplication.loanAmount} onChange={(e) => {setSingleLoanApplication(prev => ({...prev, loanAmount: Number(e.target.value)}))}}
                       className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5'/>
                <div className='text-lg mt-3 font-cabinet'>Enter a suitable rate of interest:</div>
                <input type='number' min={6} max={12} value={singleLoanApplication.rateOfInterest} onChange={(e) => {setSingleLoanApplication(prev => ({...prev, rateOfInterest: Number(e.target.value)}))}}
                       className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5'/>
                <div className='text-lg mt-3 font-cabinet'>When would you like to start returning the loan?</div>
                <div className='flex justify-center'>
                    <div className={`px-2 py-1 rounded-md border-dotted border-4 mx-3 ${singleLoanApplication.return === 'Before Graduation' && 'bg-green-400 border-0 border-none pt-2'}`} onClick={()=> {setSingleLoanApplication(prev => ({...prev, return: 'Before Graduation'}))}}>Before {userInfo.graduationYear}</div>
                    <div className={`px-2 py-1 rounded-md border-dotted border-4 mx-3 ${singleLoanApplication.return === 'After Graduation' && 'bg-green-400 border-0 border-none pt-2'}`} onClick={()=> {setSingleLoanApplication(prev => ({...prev, return: 'After Graduation'}))}}>After {userInfo.graduationYear}</div>
                </div>

                <div className='text-lg mt-3 font-cabinet'>What is the purpose of this loan?</div>
                <textarea className='focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 pb-16 h-28 w-full flex-wrap' value={singleLoanApplication.purposeOfLoan} onChange={(e)=> {setSingleLoanApplication(prev => ({...prev, purposeOfLoan: e.target.value}))}}/>

                 <div onClick={handleSingleLoanReq} className='bg-green-400 px-2 py-1 w-max mx-auto rounded-md text-lg mt-3'>Submit</div>
                {incompleteAppError && <div className='text-red-500'>The form has been filled incorrectly or is incomplete.</div>}

            </div>

        </div>}

        <div className='bg-green-400 text-lg font-medium w-max flex mx-auto px-2 py-1 rounded-md'>
            <div onClick={() => loanApplications >=3? setMaxError(true): setCreationModalOpen(true)}>Create New</div>
            <GrFormNextLink className='mt-1'/>
        </div>
        {maxError && <div className='text-red-500'>You have reached the max. number of loan applications</div>}


    </div>

}