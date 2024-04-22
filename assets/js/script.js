import { robots } from './robots.js';
import { getRobotByid, getRobotBySeries,renderCards} from './funciones.js';

console.log(getRobotById('013'));

console.log(getRobotBySeries(4));

renderCards(robots, 'robotRow');
// console.log(robots[0]);

// console.log(robots[0].id);
// console.log(robots[0].name);
// console.log(robots[0].series);

// // const {id, name, series } = robots[0];

// // console.log(id);
// // console.log(name);
// // console.log(series);

// //function getRobotByid(id) {
// //    return robots.find( function(robot){
// //        return robot.id === id;
// //    })
// //}

// const getRobotBySeries =(series=2)=>{
//     return robots.find((robot)=>{
//         return robot.series === series;
//     })
//  }

// console.log(getRobotBySeries(2));

//  const {id, name, series } = getRobotBySeries[2];

//  console.log(id);
//  console.log(name);
//  console.log(series);
