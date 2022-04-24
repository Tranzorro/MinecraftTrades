import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
// import npc from "../data/trader.json";

// this is the trader table, it must hold an image related to the exact trader being displayed.
// modularize the table with a loop and variables. this table will be reused.

// elements of the table: 1 image 1 name 1 column of wants 1 column of gives
// to access the info, use a variable to grab all related data based on navbar variable "traderName"
// pass traderName through props to grab all data from database.
// this table will be scrollable if it overflows beyond the bottom of the screen.
const TraderTable = (props) => {
	//just a comment
	const {traderName} = props;
	const DisplayData = props.traderName.map((info, index) => {
		<npcItem key={index.toString()} value={info} />;
		return (
			<tr key={index}>
				{info.trades.map((trades, index) => {
					<npcWant key={index.toString()} value={trades} />;
					return (
						<td key={index}>
							{trades.wants.map((item, index) => {
								<itemList key={index.toString()} value={item} />;
								return (
									<div key={index}>
										<div key={index} src={item.itemImageUrl}>{item.itemName}</div>
										<div key={index} className="BR-Text">{item.itemCount}</div>
									</div>
								);
							})}
						</td>
					);
				})}

				{info.trades.map((trades, index) => {
					<npcWant key={index.toString()} value={trades} />;
					return (
						<td key={index}>
							{trades.gives.map((item, index) => {
								<itemList key={index.toString()} value={item} />;
								return (
									<div key={index}>
										<div key={index} src={item.itemImageUrl}>{item.itemName}</div>
										<div key={index} className="BR-Text">{item.itemCount}</div>
									</div>
								);
							})}
						</td>
					);
				})}
			</tr>
		);
	});
	return (
		<div className="trades centerTable">
			<div className="tablewrapper">
				<table>
					<thead>
						<tr>
							<th>wants</th>
							<th>gives</th>
						</tr>
					</thead>
					{props.traderName?
					<tbody>{DisplayData}</tbody>
					:null}
				</table>
			</div>
		</div>
	);
	

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
};

export default TraderTable;
