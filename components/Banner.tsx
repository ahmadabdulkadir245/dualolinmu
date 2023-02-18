"use client"

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 mb-10'>
        
        <div>
            <h1 className='text-6xl'>
                Aliyu&rsquo;s Daily Blog 
            </h1>
            <h2 className='mt-5 md:mt-0'>
                Welcome to{" "}
                <span className="underline decoration-4 decoratoin-[#f7ab0a]">
                    Every Nigerian
                </span>
                favourite blog in the History and Nigerian culture.
            </h2>
        </div>

        <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
            New Updates on the NIgeria Royalty, Culture, Language, Food, Marriage and relations
        </p>

    </div>
  )
}

export default Banner