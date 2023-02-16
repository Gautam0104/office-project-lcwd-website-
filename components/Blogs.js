import React from 'react'

const Blogs = () => {
  return (
    <div>
       <div className="z-40 mx-auto  flex flex-col justify-center bg-cover  " >
       <h1 className="mr-6 text-primary-dark text-2xl lg:text-4xl font-semibold px-5 lg:px-24">
Blogs(20)
</h1>    
<div className="rounded-3xl drop-shadow-2xl w-80 lg:w-fit ml-24  bg-zinc-400/30 lg:bg-zinc-300/40 backdrop-blur-2xl py-4 mt-6 ">
<h1 className="mr-6 text-primary-dark text-2xl lg:text-4xl font-semibold px-5 lg:px-24">
Crucial skills for data analytics
</h1>
<h1 className="ml-2 text-white px-5 lg:px-0 font-semibold lg:text-2xl my-4 ">
Data analytics involves utilizing a variety of techniques <br />
to make sense of large and complex data sets.<br />
 This could include collecting data from multiple sources,<br />
  cleaning and preparing the data, <br />
  using analytical tools such as Excel or R to uncover insights, <br />
  and then communicating those findings to others through <br />
  visualizations and reports. The goal of data <br />
  analytics is to find useful information and use<br />
   it to inform decisions and conclusions. <br />
   People working in data analytics are commonly<br />
    found in sectors like healthcare, retail,<br />
     finance, and technology.
</h1>
<div className="text-center bg-red-500 hover:bg-red-600">
    <a href="">Read More...</a>
</div>
    </div>
    </div>
    </div>
  )
}

export default Blogs
