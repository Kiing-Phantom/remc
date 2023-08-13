import React from 'react';
import Sad from '../Images/sad.png';

export default function AccountInformation({address, status, balance}) {

    if ( balance < 0 ) {
        return (
            <>
                <div className='sect1'>
                    <ul>
                        <li>Service Address:</li>
                        <li>Status:</li>
                        <li>Balance:</li>
                    </ul>
                </div>
                <div className='sect2'>
                    <ul>
                        <li>{address}</li>
                        <li>{status}</li>
                        <li>${balance}</li>
                        <li>Service Disconnected<img src={Sad} /></li>
                    </ul>
                </div>
                <div className='sect3'></div>  
            </>
        )
    } else {
        return (
            <>
                <div className='sect1'>
                    <ul>
                        <li>Service Address:</li>
                        <li>Status:</li>
                        <li>Balance:</li>
                    </ul>
                </div>
                <div className='sect2'>
                    <ul>
                        <li>{address}</li>
                        <li>{status}</li>
                        <li>${balance}</li>
                    </ul>
                </div>
                <div className='sect3'></div>  
            </>
        );
    }

    
}