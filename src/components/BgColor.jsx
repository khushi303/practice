import React from 'react'

const BgColor = (props) => {

    return (
        <div>
            <img src={props.imgpath} alt="img" height={300} width={300} className=' rounded-3' />
        </div>
    )
}

export default BgColor