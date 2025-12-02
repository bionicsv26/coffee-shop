<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" :alt="img" />
    <div :class="`${classItem}-title`">{{ title }}</div>
    <div v-if="country" :class="`${classItem}-country`">{{ country }}</div>
    <div :class="`${classItem}-price`">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: false,
    },
    img: {
      type: String,
      required: true,
    },
    classItem: {
      type: String,
      required: true,
    },
  },
  // computed: {
  //   titleClass() {
  //     return `${classItem}-title`;
  //   },
  //   priceClass() {
  //     return `${classItem}-price`;
  //   },
  //   countryClass() {
  //     return `${classItem}-country`;
  //   },
  // },
};
</script>