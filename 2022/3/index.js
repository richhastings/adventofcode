import input from './input.js'

const getPriorityOfItem = (item) => {
  const charCode = item.charCodeAt(0)
  return charCode > 91 ? charCode - 96 : charCode - 38
}

const findCommonItem = (a, b) => {
  return b.find((item) => item === a)
}

let priorityTotal = 0

input.map((rucksack) => {
  const halfLength = rucksack.length / 2
  const compA = rucksack.split('', halfLength)
  const compB = rucksack.slice(halfLength).split('')

  let commonItem

  compA.map((item) => {
    if (commonItem) return
    commonItem = findCommonItem(item, compB)

    if (commonItem) {
      priorityTotal += getPriorityOfItem(commonItem)
    }
  })
})

console.log('PART 1', priorityTotal)

priorityTotal = 0

const input2 = input.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / 3)

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

input2.map((group) => {
  const commonItems = group[0]
    .split('')
    .filter((el) => group[1].split('').includes(el))
  const uniqueCommonItems = commonItems.filter(
    (item, pos) => commonItems.indexOf(item) === pos
  )

  const commonItem = uniqueCommonItems
    .filter((el) => group[2].split('').includes(el))
    .join('')

  priorityTotal += getPriorityOfItem(commonItem)
})

console.log('PART 2', priorityTotal)
