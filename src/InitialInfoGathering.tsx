import {useEffect, useState} from "react";
import {getUserInfo} from "./App.tsx";
import {useNavigate} from "react-router-dom";
import image from './assets/undraw_fill_form_re_cwyf (1).svg'
import {DotLottieReact} from "@lottiefiles/dotlottie-react";
import Entp from './assets/undraw_undraw_undraw_undraw_businessman_e7v0_qrld_-1-_hvmv_-1-_ik9c.svg'
import student from './assets/undraw_mathematics_-4-otb.svg'


export default function InitialInfoGathering(){

    const [currentModal, setCurrentModal] = useState(-1)
    const [error, setError] = useState(0)


    const [investorData, setInvestorData]= useState({name: '', twitter: '', linkedin: ''})

    const [userInfo, setUserInfo] = useState(getUserInfo)
    const nav = useNavigate()
   function handleNav(){
        nav('/dashboard')
   }

   function handleInvestorNav(){
        nav('/investorDash')
   }

    useEffect(() => {
        localStorage.setItem('userInfo-vultr', JSON.stringify(userInfo))

    }, [userInfo]);


   function page1Checker(){
        if (userInfo.name === ''){
            setError(1)
        } else if(userInfo.cgpa === ''){
            setError(2)
        } else {
            setError(0)
            setCurrentModal(2)
        }
   }

    function page2Checker(){
        if (userInfo.annualIncome === ''){
            setError(3)
        } else if(userInfo.graduationYear === ''){
            setError(4)
        } else {
            setError(0)
            setCurrentModal(3)
        }
    }

    function page3Checker(){
        if (userInfo.briefDescription === ''){
            setError(5)
        } else {
            setError(0)
            setCurrentModal(4)
        }
    }


    return (
        <div>
            <div>
                {currentModal === -1 && <div className='font-cabinet'>
                    <div className='text-2xl px-4 text-center mb-4 mt-56'>What would you like to sign up as?</div>


                    <div className='flex justify-center border shadow-md py-5 w-max px-16 mx-auto rounded-md'>
                        <img src={student} className='h-28 mr-8'/>
                    <div className='text-center text-2xl mt-9 ml-8 underline decoration-green-400 decoration-1' onClick={() => setCurrentModal(0)}>Student</div>
                    </div>

                    <div className='flex justify-center mt-6 border shadow-md py-5 w-max px-16 mx-auto rounded-md'>
                        <div className='text-center text-2xl mt-9 mr-8 underline decoration-green-400 decoration-1'
                             onClick={() => setCurrentModal(5)}>Investor
                        </div>
                        <img src={Entp} className='h-28 ml-8'/>
                    </div>
                </div>}

                {currentModal === 0 && <div className='mr-3 ml-3 text-center border shadow-lg px-5 py-20 mt-32 rounded-md font-cabinet'>
                    <img src={image} alt='formfilling' className='h-24 mb-2 mx-auto '/>
                    <div className='text-3xl'>Hey there, scholar!</div>
                    <div className='mt-4'>Please provide us with some information so that we'll get to know you better. </div>
                    <div onClick={() => {setCurrentModal(1)}} className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>Continue</div>
                </div>}

                {currentModal === 1 &&
                    <div className='mr-3 ml-3  border shadow-lg px-5 py-10 mt-32 rounded-md font-cabinet'>
                        <div onClick={() => {setCurrentModal(0)}}>go back</div>
                        <div className='text-lg mt-3'>What is your full name?</div>
                        <input type='text' value={userInfo.name} className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5' onChange={(e) => { setUserInfo (prev => ({...prev, name: e.target.value}))}}/>
                        {error === 1 && <div className='text-red-500'>this field cannot be empty</div>}

                        <div className='text-lg mt-3'>Which course are you enrolled in?</div>
                        <div>
                            see all options
                        </div>

                        <div className='text-lg mt-3'>Which university do you go to?</div>
                        <div>select</div>

                        <div className='text-lg mt-3'>What is your current CGPA?</div>
                        <input type='number' value={userInfo.cgpa} className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5' onChange={(e) => { setUserInfo (prev => ({...prev, cgpa: e.target.value}))}}/>
                        {error === 2 && <div className='text-red-500'>this field cannot be empty</div>}

                        <div onClick={page1Checker} className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>continue</div>
                    </div>
                }

                {currentModal === 2 && <div className='mr-3 ml-3 border shadow-lg px-5 py-10 mt-32 rounded-md font-cabinet'>
                    <div onClick={() => {
                        setCurrentModal(1)
                    }}>go back
                    </div>
                    <div className='text-lg mt-3'>What is the annual income of your household?</div>
                    <input type='number' value={userInfo.annualIncome} className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5' onChange={(e) => { setUserInfo (prev => ({...prev, annualIncome: e.target.value}))}}/>
                    {error === 3 && <div className='text-red-500'>this field cannot be empty</div>}

                    <div className='text-lg mt-3'>Which year do you graduate in?</div>
                    <input type='number' value={userInfo.graduationYear} className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5' onChange={(e) => { setUserInfo (prev => ({...prev, graduationYear: e.target.value}))}}/>
                    {error === 4 && <div className='text-red-500'>this field cannot be empty</div>}


                    <div onClick={page2Checker} className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>continue
                    </div>
                </div>

                }

                {currentModal === 3 && <div className='mr-3 ml-3 border shadow-lg px-5 py-10 mt-32 rounded-md font-cabinet'>
                    <div onClick={() => {
                        setCurrentModal(2)
                    }}>go back
                    </div>
                    <div className='text-lg mt-3'>finally, please add a brief description about yourself. <br/></div>
                        <div className='text-sm font-light w-full'>Please exclude sensitive details from this description</div>



                    <textarea value={userInfo.briefDescription} className='focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 pb-16 h-28 w-full flex-wrap' onChange={(e) => { setUserInfo (prev => ({...prev,briefDescription: e.target.value}))}}/>
                    {error === 5 && <div className='text-red-500'>this field cannot be empty</div>}


                    <div onClick={() => {
                        setUserInfo(prev => ({...prev, isInfoComplete: true  }))
                        page3Checker()
                    }} className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>continue
                    </div>

                </div>}

                {currentModal === 4 && <div className='mr-3 ml-3 text-center border shadow-lg px-5 py-16 mt-32 rounded-md font-cabinet'>
                    <div className='h-32 w-64 mx-auto'>
                        <DotLottieReact src='https://lottie.host/d306e9e2-789c-4460-99e9-dd0d287224a2/SEc7XZCCYw.json' autoplay={true}/>
                    </div>

                    <div className='text-lg'>Wonderful, we're all set!</div>
                    <div onClick={handleNav} className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>cool, head to my dashboard</div>
                </div>}

                {currentModal === 5 && <div className='font-cabinet mx-4 mt-16 px-3 border shadow-md py-10'>
                    <div className='text-lg mt-3 font-cabinet'>What is your name?</div>
                    <input type='text' value={investorData.name}
                           className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5'
                           onChange={(e) => {
                               setInvestorData(prev => ({...prev, name: e.target.value}))
                           }}/>

                    <div className='text-lg mt-3 font-cabinet'>Please add a link to your twitter profile</div>
                    <input type='text' value={investorData.twitter}
                           className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5'
                           onChange={(e) => {
                               setInvestorData(prev => ({...prev, twitter: e.target.value}))
                           }}/>

                    <div className='text-lg mt-3 font-cabinet'>Please add a link to your linkedin profile</div>
                    <input type='text' value={investorData.linkedin}
                           className='w-full focus:outline-none text-gray-800 text-lg appearance-none bg-gray-400 bg-opacity-25 decoration-1 border-dotted border border-gray-600 rounded-md px-4 py-0.5'
                           onChange={(e) => {
                               setInvestorData(prev => ({...prev, linkedin: e.target.value}))
                           }}/>

                    <div onClick={() => setCurrentModal(6)}
                         className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>continue
                    </div>


                </div>}


                {currentModal === 6 && <div className='mx-3 mt-16 px-3 py-10 border rounded-md shadow-md'>
                    <div className='h-32 w-64 mx-auto'>
                        <DotLottieReact src='https://lottie.host/9b6ce33e-6081-4a39-9369-372d3da91f55/mABGNCdNHK.json'
                                        autoplay={true}/>
                    </div>
                    <div className='font-light text-center'>you are now ready to start exploring the platform</div>
                    <div onClick={handleInvestorNav}
                         className='bg-green-400 w-max mx-auto px-4 font-medium text-lg rounded-sm py-1 mt-4'>head to my homepage
                    </div>


                </div>}


            </div>
        </div>
    )
}

