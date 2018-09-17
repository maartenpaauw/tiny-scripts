const moment = require('moment')
const _ = require('lodash')

moment.locale('nl_NL')

const date = '2018-09-03'
const monday = moment(date)
const friday = moment(date).startOf('isoWeek').add(4, 'days')
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
