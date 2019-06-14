// const http = require('http')
// const port = 3000
// const ip = 'localhost'

// const ntpClient = require('ntp-client')

// ntpClient.getNetworkTime("a.st1.ntp.br", (err, date)=>{
//     if(err){
//         res.end(`<span>${JSON.stringify(err)}</span>`)
//     }  
//     console.log(date)
// })

// const server = http.createServer((req, res) => {
//     console.log('requisição recebida')
//     res.end(`<span> data do servidor${new Date()}</span>`)
// })

// server.listen(port, ip, () => {
//   console.log(`Servidor rodando em http://${ip}:${port}`)
//   console.log('Para derrubar o servidor: ctrl + c');
// })