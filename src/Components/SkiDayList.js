import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { TiWeatherSnow } from "react-icons/ti";
import { MdTerrain } from "react-icons/md";
import {SkiDayRow} from './SkiDayRow';

export const SkiDayList =({days}) =>(
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>BackCountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day , i)=>
            <SkiDayRow key={i} {...day} />
            )}
        </tbody>

    </table>
);
