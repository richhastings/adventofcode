import input from './input.js'

let count = 0

input.map((pair) => {
  const firstContainsSecond = pair[2] >= pair[0] && pair[3] <= pair[1]
  const secondContainsFirst = pair[0] >= pair[2] && pair[1] <= pair[3]
  if (firstContainsSecond || secondContainsFirst) count++
})

console.log('PART 1', count)

count = 0

const arrayFromPair = (a, b) => {
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

input.map((pair) => {
  const firstElf = arrayFromPair(pair[0], pair[1])
  const secondElf = arrayFromPair(pair[2], pair[3])
  const hasCommonItem = firstElf.some((element) => secondElf.includes(element))

  if (hasCommonItem) count++
})

console.log('PART 2', count)
