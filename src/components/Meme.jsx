import React from 'react'

export default function Meme(){
    return(
        <main>
        {/* change from form to div, button submission is not related to the input */}
        <div className='form'>
            <input type='text' placeholder='Top text' className='form--input' />

          
            <input type='text' placeholder='Bottom text' className='form--input' />

            
            <button className='form--button'>Get a new meme image 🖼</button>
        </div>


        </main>
    )
}