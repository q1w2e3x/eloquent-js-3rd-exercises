const myModule = require('./ch7_robot');
let routeRobot = myModule.routeRobot;
let goalOrientedRobot = myModule.goalOrientedRobot;
let runRobot = myModule.runRobot;
let VillageState = myModule.VillageState;
let {closestGoalOrientedRobot} = require("./ch7_robot_efficiency");

function compareRobots(robot1, memory1, robot2, memory2) {
    let totalTests = 100;
    let totalTurns1 = 0;
    let totalTurns2 = 0;
    for (let i = 0; i < totalTests; i++) {
      state = VillageState.random();
      totalTurns1 += measureRobot(state, robot1, memory1);
      totalTurns2 += measureRobot(state, robot2, memory2);
    }
    return [totalTurns1 / totalTests, totalTurns2 / totalTests];
}
function measureRobot(state, robot, memory) {
  let totalTurns = 0;
  while(state.parcels.length != 0) {
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    totalTurns++;
  }
  return totalTurns;
}
let [first, second] = compareRobots(routeRobot, [], goalOrientedRobot, []);
console.log("Comparing routeRobot and goalOrientedRobot")
console.log(first + " : " + second);

[first, second] = compareRobots(closestGoalOrientedRobot, [], goalOrientedRobot, []);
console.log("Comparing closestGoalOrientedRobot and goalOrientedRobot")
console.log(first + " : " + second);