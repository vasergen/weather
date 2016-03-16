"use strict"

let fs = require('fs')
let gulp = require('gulp')

gulp.task('citiesInput', (done) => {
    return fs.readFile('data/city_list.txt', 'utf-8', (err, data) => {
        if(err) throw err

        let res = data
            .split('\n')
            .map((row)=>{
                let item = row.split('\t')

                return {
                    'id': item[0],
                    'city': item[1]
                }
            })

        fs.writeFile("data/cities.json", JSON.stringify(res), (err) => {
            if(err) throw err;

            console.log('Success! The citiesInput file was generated');
            done()
        })
    })
})
