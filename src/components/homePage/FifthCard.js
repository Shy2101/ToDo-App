import React from 'react';
import Card from '@material-ui/core/Card';
import Highcharts from '../../Graphs/Highcharts';

export default function FifthCard (props){
    return(
        <Card style={{ height: 'inherit', background: "#273D49BF" }}><h1 style={{top: '90px',
        left: '800px',
        width: '250px',
        height: '0px',
        textAlign: 'left',
        font: 'normal normal bold 20px/2px Roboto',
        letterSpacing: '0px',
        color: '#FFFFFF80',
        opacity: '1'}}> Under Armour Inc. </h1>
        <Highcharts /></Card>
    );
}