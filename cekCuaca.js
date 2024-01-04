const { error } = require('console')
const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=ceadc42f10021f0d9d3518af14ab66f7&query=-0.8971191238884468,%20100.35074362455745'

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.error('Terjadi kesalahan:', error)
    } else {
        const temperature = response.body.current.temperature
        const precip = response.body.current.precip
        const weatherDescriptions = response.body.current.weather_descriptions

        console.log('Saat ini suhu diluar mencapai ' + temperature + ' derajat celcius.')
        console.log('Kemungkinan terjadinya hujan adalah ' + precip + '%')
        console.log('Deskripsi cuaca: ' + weatherDescriptions.join(', '))
    }
})

const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?access_token=pk.eyJ1IjoiYnJhaW5ubiIsImEiOiJjbG5jajhrcGMwbGV2MnFwMTVpc3IxNDN5In0.CwPMo6NcUZmmDIW7H8k1qg&limit=1"

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.error('Terjadi kesalahan:', error)
    } else {
        const query = response.body.query
        const placeName = response.body.features[0].place_name
        const placeType = response.body.features[0].place_type[0]
        const coordinates = response.body.features[0].geometry.coordinates

        console.log('Koordinat lokasi anda adalah: ' + coordinates[1] + ' ' + coordinates[0])
        console.log('Data yang anda cari adalah: ' + query)
        console.log('Data yang ditemukan adalah: ' + placeName)
        console.log('Tipe lokasi adalah: ' + placeType)
    }
})