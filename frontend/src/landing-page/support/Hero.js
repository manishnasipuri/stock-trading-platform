import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className=' p-5 ' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='' style={{textDecoration:"none"}}>Track Tickets</a>
            </div>
             <div className='row p-5 mx-5' >
                <div className='col-6 p-5 ' >
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. How do i activate F&O'></input> <br></br>
                    <a href='' style={{color:"white"}}>Track Account Oppening</a>
                    <a href='' style={{color:"white"}}>Track segment Activation</a>
                    <a href='' style={{color:"white"}}>Intraday</a>
                    <a href='' style={{color:"white"}}>margins</a>
                    <a href='' style={{color:"white"}}>Kite user manual</a>
                </div>
                <div className='col-6 p-5 mr-5 ' >
                    <h1 className='fs-3'>Featured</h1>
                     <a href='' style={{color:"white"}}>1. Current takeovers and Delistig</a> <br></br>
                     <a href='' style={{color:"white"}}>2. Latest Intraday leverages - MIS & CO</a>
                </div>
               
            </div>
        </section>
     );
}

export default Hero;