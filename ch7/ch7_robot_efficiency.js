let {roadGraph, findRoute, goalOrientedRobot} = require("./ch7_robot")
function closestGoalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
        // iterate through all parcels
        for (parcel of parcels) {
            let currRoute = [];
            // if we currently have a parcel, findRoute to address
            // if we don't have a parcel, findRoute to parcel's place
            if (parcel.place === place) {
                currRoute = findRoute(roadGraph, place, parcel.address);
            } else {
                currRoute = findRoute(roadGraph, place, parcel.place);
            }
            // find shortest route
            if (route.length == 0 || route.length > currRoute.length) {
                route = currRoute;
            }
        }
    }
    return {direction: route[0], memory: route.slice(1)};
  }
exports.closestGoalOrientedRobot = closestGoalOrientedRobot;