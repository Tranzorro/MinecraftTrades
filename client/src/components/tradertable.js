import React, { useEffect, useState } from  'react';
import axios from 'axios';
// this is the trader table, it must hold an image related to the exact trader being displayed.
// modularize the table with a loop and variables. this table will be reused.

// elements of the table: 1 image 1 name 1 column of wants 1 column of gives
// to access the info, use a variable to grab all related data based on navbar variable "traderName"
// pass traderName through props to grab all data from database.
// this table will be scrollable if it overflows beyond the bottom of the screen.
const TraderTable = (props) => {
    return (
        <div className="trades">
            <div className="tablewrapper">
            <table >
                <tbody>
                    <tr>

                        <th className="tradername">
                            Currency Exchange
                        </th>
                        <th>
                            <img src="/currency_exchange.png" className="portrait" title="Give me diamonds, and I'll give you something... special." alt="currency exchange">
                            </img>
                        </th>
                    </tr>
                    <tr>
                        <th className="tradername">Wants</th>
                        <th className="tradername">Gives</th>
                    </tr>
                    <tr>
                        <th>
                            <div className="Diamond mc  centered" title="diamond">
                                <div className="BR-Text">
                                    3
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="Qn mc  centered" title="quest nugget" >

                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="Qn mc  centered" title="quest nugget">
                                <div className="BR-Text">
                                    10
                                </div>
                            </div>
                        </th>
                        <th>
                            <div className="Et mc  centered" title="event token">
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <div className="Et mc  centered" title="event token">
                            </div>
                        </th>
                        <th>
                            <div className="Qn mc  centered" title="quest nugget">
                                <div className="BR-Text">
                                    10
                                </div>
                            </div>
                        </th>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default TraderTable;