const {parse} = require('csv-parse');
const fs = require("fs");

const results = []

let counter = 0;

function isHabitablePlanet(planet) {
    return (
        planet["koi_dispositon"] === "CONFIRMED" &&
        planet["koi_insol"] > 0.36 &&
        planet["koi_insol"] < 1.11 &&
        planet["koi_prad"] < 1.6
    );
}

fs.createReadStream("kepler_data.csv").pipe(parse({
    comment: '#',
    columns: true,
})).on('data',(chunk)=>{
    if(isHabitablePlanet(chunk)){
        results.push(chunk);
    }

    counter++;
    if(counter === 200){
        counter = 0;
    }

}).on('error',err=>{
    console.log('err',err)
}).on('end',()=>{
    console.log(results)
    console.log("done processing file")
})

// const parser = parse() 