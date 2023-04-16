import React from 'react'
import{FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

 const Card = (props) => {

    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25] hover:scale-125 transition-all duration-200' src={review.image}/>          
            <div className='w-[140px] h-[140px] rounded-full absolute top-[-6px]  left-[10px] -z-10'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold  text-2xl capitalize tracking-wide'>{review.name}</p>
        </div>

        <div className='text-center mt-1'>
            <p className='uppercase text-sm text-violet-300 '>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text};
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

       
    </div>
  )
}

export default Card;
