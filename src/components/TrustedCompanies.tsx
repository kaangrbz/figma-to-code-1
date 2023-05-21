import React from 'react'

const TrustedCompanies = () => {
  return (
    <div className='flex flex-col py-10 bg-[#fcfcfe]'>
      <h6 className='text-center text-[18px] font-semibold'>Trusted by Greatest Companies</h6>
      <div className="companies flex justify-center gap-10 pt-5 text-[25px] font-semibold">
        <div className="company">
          Google
        </div>
        <div className="company">
          Airbnb
        </div>
        <div className="company">
          Creative Market
        </div>
        <div className="company">
          Shopify
        </div>
        <div className="company">
          amazon
        </div>
      </div>
    </div>
  )
}

export default TrustedCompanies