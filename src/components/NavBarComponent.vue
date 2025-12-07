<template>
  <header>
    <ul
        class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <nav-item
          classLink="header__item"
          :link="links.header.link"
      >
        <img
            :src="require(`@/assets/logo/${links.header.icon}`)"
            :alt="links.header.icon"
        />
      </nav-item>

      <nav-item
          v-for="link in links.other"
          :key="link.id"
          classLink="header__item"
          :link="link.link"
          :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  components: {NavItem},
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"]
    }
  }
};
</script>