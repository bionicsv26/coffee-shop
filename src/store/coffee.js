const coffee = {
  state: {
    coffee: [
      {
        id: 0,
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        img: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        img: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        img: "coffee-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        img: "coffee-2.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 5,
        img: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
    ],
  },
  getters: {
    getCoffee(state) {
      return state.coffee
    },
    getCoffeeById(state) {
      return (id) => {
        console.log('coffee')
        return state.coffee.find((card) => card.id === +id)
      }
    }
  }
}

export default coffee