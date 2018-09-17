const moment = require('moment')
const _ = require('lodash')

moment.locale('nl_NL')

const monday = moment('2018-09-03').startOf('isoWeek')
const friday = moment('2018-09-03').endOf('isoWeek').subtract(2, 'days')
const range = _.range(1, 23)

range.forEach(week => {
  const sameMonth = monday.format('MMMM') === friday.format('MMMM')
  const sameYear = monday.format('YYYY') === friday.format('YYYY')
  
  let start = sameMonth ? monday.format('D') : monday.format('D MMMM')
  let end = friday.format('D MMMM (YYYY)')
  start = !sameYear ? `${start} (${monday.format('YYYY')})` : start
  
  console.log(`Week ${week} — ${start} t/m ${end}`)
  
  monday.add(1, 'week')
  friday.add(1, 'week')
})
