import React from 'react'

const ContactForm = () => {
  return (
     <div className="w-full flex flex-col items-center mt-10 md:mt-0">
     <div className="customgreen w-full py-8 px-6 md:px-8 flex flex-col items-center">
       
       <h1 className="text-2xl md:text-3xl text-white text-center">Sign Up For Your FREE Consultation</h1>
       
       <div className="space-y-4 mt-6 w-full">
         
         {/* Manuscript Dropdown */}
         <select className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400">
           <option value="">Is Your Manuscript Ready?*</option>
           <option value="Yes">Yes</option>
           <option value="No">No</option>
           <option value="Need Help">Need Help</option>
         </select>

         {/* Genre Dropdown */}
         <select className="w-full p-3 border rounded-lg bg-white text-black focus:ring-2 focus:ring-yellow-400">
           <option value="">What is the Genre Of Your Book?</option>
           <option value="Fiction">Fiction</option>
           <option value="Non-Fiction">Non-Fiction</option>
           <option value="Sci-Fi">Sci-Fi</option>
           <option value="Romance">Romance</option>
           <option value="Other">Other</option>
         </select>

       </div>

       {/* Button */}
       <button className="button-gradient mt-6 w-full px-6 py-3 rounded-md font-bold text-black bg-yellow-500 hover:bg-yellow-400 transition-all">
         Get Started!
       </button>

       {/* Contact Info */}
       <p className="mt-4 text-white text-lg">Or Give Us A Call At</p>
       <p className="text-xl mt-1 font-bold text-white tracking-wider">+(310) 564 9107</p>

     </div>
     </div>
  )
}

export default ContactForm