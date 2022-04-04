const {evaluate} = require('mathjs')
// TODO add request body validation
// Not sure if this is a copout but I wouldn't recreate the wheel here. I'd use a well tested, widely used library.
const calculate = (req, res) => {
  const {expression} = req.body
  try {
    const result = evaluate(expression)
    res.status(200)
    res.json({expression, result})
  } catch (e) {
    res.status(500)
    res.json({error: e.message})
  }
}

// TODO add request validation - request body expression should only include integers and operators
// TODO handle (parens) and division
const evaluateExpression = (req, res) => {
  const calculationSteps = [
    {
      operation: 'draw',
      value: 4,
      transform: [
        {
          operation: 'split',
          value: 2
        }
      ]
    },
    {
      operation: 'draw',
      value: 3,
      transform: []
    },
    {
      operation: 'remove',
      value: 1,
      transform: []
    }
  ]
  res.status(200)
  res.json(calculationSteps)
}

module.exports = {
  evaluateExpression,
  calculate
}