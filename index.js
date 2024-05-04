const fatecApi = require('fatec-api')
const minhaConta = new fatecApi.Account('47367558811', '47367558811')

console.log(fatecApi, minhaConta.student.getName)
// minhaConta.getName().then(() => {
//     console.log(minhaConta.student.getName());
//     // <- 'SEU NOME COM CAPSLOCK'
//   })
// minhaConta.getName().then(nome => {
//   console.log("Öla")
//   // <- 'SEU NOME COM CAPSLOCK'
// })