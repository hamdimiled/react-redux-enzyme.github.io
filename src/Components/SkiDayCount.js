import React from 'react';
import PropTypes from 'prop-types';
import { FaCalendar } from 'react-icons/fa';
import { TiWeatherSnow } from "react-icons/ti";
import { MdTerrain } from "react-icons/md";

export default class SkiDayCount extends React.Component{
    precentToDecimal=(decimal)=>{
        return(`${decimal *100} %`);
    }
    calcGoalProgress=(total , goal)=>{
        return this.precentToDecimal(total/goal);
    }
    render(){
        const {total , powder , backcountry , goal} = this.props;

        return(
            <div className="ski-day-count">
                <div className="total-days">
                    <span> {total} days</span>
                    <MdTerrain />
                </div>
                <div className="powder-days">
                    <span> {powder} days</span>
                    <TiWeatherSnow />
                </div>
                <div className="backcountry-days">
                    <span> {backcountry} hiking day</span>
                    <FaCalendar />
                </div>
                <div>
                    <span>
                    {this.calcGoalProgress(total , goal)}
                    </span>
                </div>
            </div>
        )
    }
}
SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder:PropTypes.number,
    backcountry:PropTypes.number

  };
