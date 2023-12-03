const initialTime = new Date().getTime()

setTimeout(() => {
  console.log(
    'setTimeout executed after: ',
    new Date().getTime() - initialTime,
    'milliseconds'
  )
}, 2000)
