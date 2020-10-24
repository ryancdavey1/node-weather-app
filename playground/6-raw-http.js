const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=6070727b10470ab400ec81a3360c6c28&query=40,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data += chunk.toString()
  })



  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {  
  console.log('An error', error)
})

request.end()