<template>
  <div
      :class="classItem"
      @click="onEmmit(card.id)"
  >
    <img
        :src="require(`@/assets/img/${card.img}`)"
        :alt="card.img"
    />
    <div :class="`${classItem}-title`">{{ card.title }}</div>
    <div
        v-if="card.country"
        :class="`${classItem}-country`"
    >{{ card.country }}
    </div>
    <div :class="`${classItem}-price`">{{ card.price | addCurrency }}</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: true,
    },
    card: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onEmmit(id) {
      this.$emit('onNavigate', id);
    }
  }
};
</script>