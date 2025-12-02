<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <h1 class="title-big">Everything You Love About Coffee</h1>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <router-link to="/our-coffee" class="preview__btn"
              >More</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <section class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title">Our best</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="best__wrapper">
              <product-card
              classItem="best__item"
                :title="bestsellers[0].title"
                :price="bestsellers[0].price"
                :img="bestsellers[0].img"
              />
              <product-card
              classItem="best__item"
                :title="bestsellers[1].title"
                :price="bestsellers[1].price"
                :img="bestsellers[1].img"
              />
              <product-card
              classItem="best__item"
                :title="bestsellers[2].title"
                :price="bestsellers[2].price"
                :img="bestsellers[2].img"
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
      bestsellers: [
        {
          id: 0,
          img: "coffee-1.jpg",
          title: "Solimo Coffee Beans 2kg",
          price: 10.73,
        },
        {
          id: 1,
          img: "coffee-2.jpg",
          title: "Presto Coffee Beans 1kg",
          price: 15.99,
        },
        {
          id: 2,
          img: "coffee-3.jpg",
          title: "AROMISTICO Coffee 1kg",
          price: 6.99,
        },
      ],
    };
  },
};
</script>