import React, { useEffect, useState } from  'react';
import axios from 'axios';
import npc from '../data/trader.json';
// this is the trader table, it must hold an image related to the exact trader being displayed.
// modularize the table with a loop and variables. this table will be reused.

// elements of the table: 1 image 1 name 1 column of wants 1 column of gives
// to access the info, use a variable to grab all related data based on navbar variable "traderName"
// pass traderName through props to grab all data from database.
// this table will be scrollable if it overflows beyond the bottom of the screen.
const TraderTable = (props) => {
    const DisplayData = npc.map((info)=>{
            <npcItem key = {info.toString()} value={info.id}/>
            return(
                <tr key= {info.id}>
                        {info.trades.map((wants) => {
                            <npcWant key = {wants.toString()} value = {wants.id}/>
                            return (
                                info.trades.wants.map((item) => {
                                    <itemList key = {item.toString()} value = {item.id} />
                                    return(
                                        <td key = {item.id}>
                                            <div src = {item.itemImageUrl}>{item.itemName}</div>
                                            <div className= "BR-Text">{item.itemCount}</div>
                                        </td>
                                    );
                                })
                            )
                        })}
                    
                        {info.trades.map(gives => {
                            <npcGive key = {gives.toString()} value = {gives}/>
                            return (
                                gives.map(item => {
                                    <itemList key = {item.toString()} value = {item} />
                                    return(
                                        <td key = {item}>
                                            <div src = {item.itemImageUrl}>{item.itemName}</div>
                                            <div className= "BR-Text">{item.itemCount}</div>
                                        </td>
                                    );
                                })
                            )
                        })}
                </tr>
            )
        }
    )
    return(
        <div className="trades">
            <div className="tablewrapper">
                <table>
                    <thead>
                        <tr>
                            {/* <th>id</th>  */}
                            <th>wants</th>
                            <th>gives</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </table>
            </div>
        </div>
    )


    // return (
    //     <div className="trades">
    //         <div className="tablewrapper">
    //         <table >
    //             <tbody>
    //                 <tr>

    //                     <th className="tradername">
    //                         Currency Exchange
    //                     </th>
    //                     <th>
    //                         <img src="/currency_exchange.png" className="portrait" title="Give me diamonds, and I'll give you something... special." alt="currency exchange">
    //                         </img>
    //                     </th>
    //                 </tr>
    //                 <tr>
    //                     <th className="tradername">Wants</th>
    //                     <th className="tradername">Gives</th>
    //                 </tr>
    //                 <tr>
    //                     <th>
    //                         <div className="Diamond mc  centered" title="diamond">
    //                             <div className="BR-Text">
    //                                 3
    //                             </div>
    //                         </div>
    //                     </th>
    //                     <th>
    //                         <div className="Qn mc  centered" title="quest nugget" >

    //                         </div>
    //                     </th>
    //                 </tr>
    //                 <tr>
    //                     <th>
    //                         <div className="Qn mc  centered" title="quest nugget">
    //                             <div className="BR-Text">
    //                                 10
    //                             </div>
    //                         </div>
    //                     </th>
    //                     <th>
    //                         <div className="Et mc  centered" title="event token">
    //                         </div>
    //                     </th>
    //                 </tr>
    //                 <tr>
    //                     <th>
    //                         <div className="Et mc  centered" title="event token">
    //                         </div>
    //                     </th>
    //                     <th>
    //                         <div className="Qn mc  centered" title="quest nugget">
    //                             <div className="BR-Text">
    //                                 10
    //                             </div>
    //                         </div>
    //                     </th>
    //                 </tr>
    //             </tbody>
    //         </table>
    //         </div>
    //     </div>
    // );
}

export default TraderTable;