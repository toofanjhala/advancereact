import React from "react";
import Chartbar from "./chartbar";
import "./chart.css"

function Chart(props){

    const datapointvalue= props.datapoint.map((Data)=> Data.value)
    const maximumvalue=Math.max(...datapointvalue)
    return (
        <div className="chart">
            {props.datapoint.map((datapoint)=> <Chartbar
            key={datapoint.label} 
            value={datapoint.value}
            label={datapoint.label}
            maxValue={maximumvalue}
            />)}

        </div>
    )
}

export default Chart