import { font } from '@/app/Components/font/font'
import React from 'react'

const AudioSequence = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
        <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
        <h1 className='text-3xl mt-10 md:text-5xl text-center'>How Silver Gate's Audiobook <br/> Publishing
        Service Works</h1>
        <p className='mt-6 text-xl text-center max-w-2xl'>We work closely with authors throughout the audiobook publishing process to ensure your audiobook matches your vision. Here’s what you can expect.</p>

        {/* Ensure h2 starts immediately below h1 */}
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Audiobook Questionnaire </h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>We start the audiobook publishing process once the final interior is approved. We’ll send an audiobook questionnaire that asks you to describe your ideal narrator based on gender, accent, and more. Our questionnaire also asks you to specify any words that need special pronunciation and any other special notes.</p>

        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Narrator Selection</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>We open a casting call to 500+ professional narrators. Narrators that are a good match will submit five-minute auditions for your approval. You’ll typically get five to ten different auditions. This step takes seven to ten business days.</p>
    
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Recording</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>After selecting a narrator, it’s time to start recording. Your book will be recorded in chapters if it has them. We send the raw audio recordings for you to review for misreads and mistakes, then rerecord any edits. You’ll receive a changes form to record all necessary changes. </p>
        
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Editing</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>After you approve the raw audio, we record and add backing music to the opening and closing credit files. We then go through the recording word by word to apply manual detail editing for breath control, lip/mouth sounds, pace corrections, and remove any other unwanted sounds. After this, we apply a carefully balanced mix with EQ, Compression, Saturation, and other production tools to achieve a nice and warm overall sound. The final step of the editing process is to master and format the audio to meet audiobook requirements and ensure outlets accept them.</p>
        
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Final Review</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Once editing is complete, we’ll send you the final audiobook to review. When you’re satisfied and approve the final product, we’ll distribute your audiobook to retailers, making your work accessible to a broader audience of eager listeners.</p>

    </div>
  )
}

export default AudioSequence
