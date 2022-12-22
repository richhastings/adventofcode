import input from './input.js'

let totals = []
let highest = [0, 0, 0]

input.map((elf) => {
  totals.push(elf.reduce((x, y) => x + y))
})

console.log('PART 1', Math.max(...totals))

highest.map((_, i) => {
  const maxIndex = totals.indexOf(Math.max(...totals))
  highest[i] = Math.max(...totals)
  totals.splice(maxIndex, 1)
})

console.log(
  'PART 2',
  highest.reduce((x, y) => x + y)
)
