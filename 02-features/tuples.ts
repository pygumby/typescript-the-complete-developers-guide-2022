const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

// Compare the following two values to see why tuples are not that useful:
const carSpecs: [number, number] = [400, 3354]
const carStats = {
  horsePower: 400,
  weight: 3354,
}
