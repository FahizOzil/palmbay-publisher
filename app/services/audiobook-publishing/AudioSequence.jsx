import { font } from '@/app/Components/font/font'
import React from 'react'

const AudioSequence = () => {
  return (
    <div className={`${font.className} flex flex-col justify-center items-center`}>
        <hr className='text-yellow-600 border-2 w-[70%] mt-20' />
        <h1 className='text-3xl mt-10 md:text-5xl text-center'>Professional Book Cover Designs</h1>

        {/* Ensure h2 starts immediately below h1 */}
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Line Editing </h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Line editing comes before copy editing. Where copy editors are concerned with mechanics, line editors are concerned primarily with questions of style. Line editing involves editing a book sentence by sentence (or line by line) to upgrade the prose, always keeping the craft in mind. A line edit ensures that your book’s content is consistent while its language is creative and concise.</p>
        <p className='mt-6 pl-28 text-left w-full text-xl max-w-[70%]'>Line editing involves correcting word choice, sentence effectiveness, suggestions for better ways to say something, and apparent inconsistencies. This is the most popular editing choice for our authors. </p>
        <p className='mt-6 pl-28 text-left w-full text-xl max-w-[70%]'>Line editors read while keeping attention to detail, maintaining an interest in the way language works at the sentence level, and appreciating the flow of the story.</p>

        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Copy Editing</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Any book or manuscript can benefit from copy editing. Copy editing focuses less on the big picture and more on the details of the language. Hence, a copy editor ensures that the language in a manuscript follows standard English rules and adheres to the Chicago Manual of Style, the standard in trade publishing. Copy editing services check for accuracy, consistency, grammatical errors, spelling, syntax, and punctuation.</p>
        <p className='mt-6 pl-28 text-left w-full text-xl max-w-[70%]'>Most books go through at least one round of line editing and one round of copy edits. Copy editing is intended to be a final review of the manuscript after the content has been fully edited. Skipping copy editing may considerably lower the quality of a finished product.</p>
    
        <h2 className="mt-12 pl-28 text-left w-full green-text text-3xl max-w-[70%]">Developmental Editing</h2>
        <p className='mt-2 pl-28 text-left w-full text-xl max-w-[70%]'>Typically, the first stage of the editing process is the developmental edit. Developmental book editing is our most involved option, as it requires the most time and effort to uncover and identify the “big-picture” problems underlying your story. </p>
        <p className='mt-6 pl-28 text-left w-full text-xl max-w-[70%]'>We pair our experienced developmental editors with authors to guide them in conceiving the topic, planning the overall structure, and developing an outline. We complete the round of edits and give authors a chance to review them before moving forward. </p>
        <p className='mt-6 pl-28 text-left w-full text-xl max-w-[70%]'>With this service, you can expect an extensive markup with many suggestions on improving the story or manuscript, helping the flow and enriching the story, and evaluating the book as a whole so it all makes sense. </p>
    </div>
  )
}

export default AudioSequence
