// import React, { Component } from 'react'
import React from 'react'
// import Loading from "/loading.gif"


// export default class Spinner extends Component {
const Spinner = () =>{
        // render() {
        return (
            <div className='text-center'>
                <img src={process.env.PUBLIC_URL + "/loading.gif"} alt="Loading" />
            </div>
        )
    // }
}

export default Spinner;