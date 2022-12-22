import input from './input.js'

let score = 0

const scoreMap = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
}

const resultPointsMap = {
  Z: 6,
  Y: 3,
  X: 0,
}

const determineResultPart1 = (a, b) => {
  const getResult = (a, b) => {
    let result = 'X'
    const winningCombinations = [
      ['A', 'Y'],
      ['B', 'Z'],
      ['C', 'X'],
    ]

    if (scoreMap[a] === scoreMap[b]) result = 'Y'

    winningCombinations.map((combo) => {
      if (a === combo[0] && b === combo[1]) {
        result = 'Z'
      }
      return
    })

    return result
  }

  const result = getResult(a, b)
  return resultPointsMap[result] + scoreMap[b]
}

input.map((round) => {
  score += determineResultPart1(...round)
})

console.log('PART 1', score)

score = 0

const determineResultPart2 = (a, b) => {
  if (b === 'Y') return scoreMap[a] + resultPointsMap['Y']

  const resultToPlay = (result, a) => {
    const map = {
      A: result === 'Z' ? 'B' : 'C',
      B: result === 'Z' ? 'C' : 'A',
      C: result === 'Z' ? 'A' : 'B',
    }

    return map[a]
  }

  return scoreMap[resultToPlay(b, a)] + resultPointsMap[b]
}

input.map((round) => {
  score += determineResultPart2(...round)
})

console.log('PART 2', score)
