import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
const TraderTable = (props) => {
	const {traderList} = props;
	const DisplayData = traderList?.map((trader, index) => {
// what i need: create N rows for trade.wants.length.   get a want and give of trade[n] and pass in td of want[n] and gives[n] within each generated row.

// how it works right now, for each trader, return 1 row, then map the wants and generate a td until no more wants. same with gives, then makes new row.
// this process is incorrect. this is basically a display all. similar to original html version. good, but not quite.

		return (
			<tr key={index}>

		{/* cannot map an object, only array. */}

				{trader.trades.wants.map((item, index) => {
					return (
						<td key={index}>
									<div >
										<div  src={item.itemImageUrl}>{item.itemName}</div>
										<div  className="BR-Text">{item.itemCount}</div>
									</div>
						</td>
					);
				})}

				{trader.trades.gives.map((item, index) => {
					return (
						<td key={index}>
									<div >
										<div  src={item.itemImageUrl}>{item.itemName}</div>
										<div className="BR-Text">{item.itemCount}</div>
									</div>
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
							<th> insert image of trader here</th>
							<th>wants</th>
							<th>gives</th>
						</tr>
					</thead>
					{traderList?
					<tbody>{DisplayData}</tbody>
					:null}
				</table>
			</div>
		</div>
	);
};

export default TraderTable;
