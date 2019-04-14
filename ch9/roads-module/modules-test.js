const {roadGraph} = require('./roads-data');

for (let key of Object.keys(roadGraph)) {
    let paths = key + ": ";
    roadGraph[key].forEach(destination => {
        paths += destination + ", "
    });
    paths = paths.slice(0, -2);
    console.log(paths);
}