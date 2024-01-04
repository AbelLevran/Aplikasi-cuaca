const { error } = require('console')
const request = require('postman-request')
const url = 
    'http://api.weatherstack.com/current?access_key=ceadc42f10021f0d9d3518af14ab66f7&query=-0.8971191238884468,%20100.35074362455745'
request({ url: url}, (error, response) => {
console.log(response)
const data = JSON.parse(response.body)
console.log(data)
onsole.log(data.current)
console.log(data.current.temperature)
})