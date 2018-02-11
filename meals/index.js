const fs = require('fs')

// Read all meals from text file.
const meals = fs.readFileSync('meals.txt').toString().split('\n').sort()

// Add some default values.
const other = [
  'Eten bij de ouders van Maarten',
  'Eten bij de moeder van Rianne',
  'Eten bij de vader van Rianne',
  'Uiteten'
]

// YAML format.
const formatted = ['Onbeslist'].concat(meals, other).map((meal) => {
  return `- "${meal}"`
}).join('\n')

// Write to a YAML file.
fs.writeFileSync('meals.yaml', formatted)

// Add a new line at the end of the file.
fs.appendFileSync('meals.yaml', '\n')
