import React from 'react'

export default function Header() {
  return (
    <header className='container m-auto mt-20'>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-white text-[90px] font-extrabold w-[558px] leading-24'>New Cafe
                 by <span className='text-[#237249]'>StarBucks</span></h1>
                <p className='w-[570px] text-[20px] text-[#D9D9D9]'>Have time to buy the most harmonious drinks in the 
                new Starbucks coffee and don't forget about the discount!</p>
                <div>
                    <button className='bg-[#237249] rounded-[82px] text-[24px] text-white font-semibold py-3 px-16'>Select a coffee </button>
                    <button className='bg-[#121517] py-3 px-4 rounded-[82px] border'>More</button>
                </div>
                <div>
                   <div>
                   <p>9k <span>+</span></p>
                   <p>Premium Users</p>
                   </div>
                    <div><p>2k <span>+</span></p>
                    <p>Happy Customer</p></div>
                    <div>
                        <p>28 <span>+</span></p>
                        <p>Awards Winning</p>
                    </div>
                </div>
            </div>
            <div>
                <img src="src/assets/Group 2.png" alt="" />
            </div>
        </div>
        <div className='justify-center items-center'>
        <img src="src/assets/group.png" alt="" />
        </div>
    </header>
  )
}
