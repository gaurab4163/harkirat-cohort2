function printTime() {
  const date_ob = new Date()
  printConsole(
    date_ob.getHours() + ':' + date_ob.getMinutes() + ':' + date_ob.getSeconds()
  )
}

function printConsole(time) {
  process.stdout.clearLine(0)
  process.stdout.cursorTo(0)
  process.stdout.write(time)
}

setInterval(printTime, 1000)
