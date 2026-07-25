import React from 'react';

function Awards() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 p-5 text-center text-md-start'>
                    <img src='media/largestBroker.svg' alt='Largest-Broker' style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <div className='col-12 col-md-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-4'> 2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                    
                    <ul style={{ paddingLeft: '1.2rem' }}>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                         <li>
                            <p>Commodity derivatives</p>
                        </li>
                         <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                    </div>
                     <div className='col-6'>
                        <ul style={{ paddingLeft: '1.2rem' }}>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                         <li>
                            <p>Direct mutual funds</p>
                        </li>
                         <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul>
                     </div>
                    </div>
                    <img src='media/pressLogos.png' alt='press-logo' style={{width:'90%', maxWidth: '100%'}}></img>
                </div>
            </div>

        </div>
     );
}

export default Awards;