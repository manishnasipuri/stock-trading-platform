import React from 'react';

function Universe() {
    return (
         <div className='container text-center  mt-5' >
            <div className='row ' >
              <h1 className='text-center'>The Zerodha Universe</h1>
              <p className='text-center'>Extend your trading and investment experience even further with our partner platforms</p>
               
                <div className='col-4 p-3 mt-5'>
                    <img src="media/smallcaseLogo.png"></img>
                    <p className='text-small text-muted'></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/streakLogo.png" style={{width:"150px"}}></img>
                    <p className='text-small text-muted'></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/sensibullLogo.svg" style={{width:"200px"}}></img>
                    <p className='text-small text-muted'></p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src="media/zerodhaFundhouse.png" style={{width:"200px"}}></img>
                    <p className='text-small text-muted'></p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/goldenPiLogo.png" style={{width:"150px"}}></img>
                    <p className='text-small text-muted'></p>
                </div>
                <div className='col-4 p-3 mt-5' >
                    <img src="media/dittoLogo.png" style={{width:"100px"}}></img>
                    <p className='text-small text-muted'></p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%", margin: '0 auto'}}>SignUp Now</button>
            </div>
        </div>
      );
}

export default Universe;