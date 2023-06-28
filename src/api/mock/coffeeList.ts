const coffeeMock = [
  {
    id: 1,
    name: 'Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: 'tradicional',
    price: 9.99,
    size: [114, 140, 227],
    image: require('../../assets/coffee/Type=Americano.svg'),
  },
  {
    id: 2,
    name: 'Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: 'tradicional',
    price: 9.99,
    size: [114, 140, 227],
    image: require('@assets/coffee/Type=Americano.svg'),
  },
  {
    id: 3,
    name: 'Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tag: 'tradicional',
    price: 9.99,
    size: [114, 140, 227],
    image: require('@assets/coffee/Type=Americano.svg'),
  },
]

export async function getCoffees() {
  return coffeeMock
}