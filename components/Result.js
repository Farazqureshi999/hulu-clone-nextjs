import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move';
function Result({results}) {
    return (
        <FlipMove className='sm:grid px-5 my-10 md:grid-cols-2 xl:grid-cols-3'>
            {results && results.map((result) =>{
                return(
                    
                    <Thumbnail key={result.id} data={result}/>
                )
            })}
        </FlipMove>
    )
}

export default Result
