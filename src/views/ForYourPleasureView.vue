<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <product-card
                classItem="shop__item"
                :title="goods[0].title"
                :price="goods[0].price"
                :country="goods[0].country"
                :img="goods[0].img"
              />
              <product-card
                classItem="shop__item"
                :title="goods[1].title"
                :price="goods[1].price"
                :country="goods[1].country"
                :img="goods[1].img"
              />
              <product-card
                classItem="shop__item"
                :title="goods[2].title"
                :price="goods[2].price"
                :country="goods[2].country"
                :img="goods[2].img"
              />
              <product-card
                classItem="shop__item"
                :title="goods[3].title"
                :price="goods[3].price"
                :country="goods[3].country"
                :img="goods[3].img"
              />
              <product-card
                classItem="shop__item"
                :title="goods[4].title"
                :price="goods[4].price"
                :country="goods[4].country"
                :img="goods[4].img"
              />
              <product-card
                classItem="shop__item"
                :title="goods[5].title"
                :price="goods[5].price"
                :country="goods[5].country"
                :img="goods[5].img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: { NavBarComponent, ProductCard },
  data() {
    return {
      goods: [
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
    };
  },
};
</script>