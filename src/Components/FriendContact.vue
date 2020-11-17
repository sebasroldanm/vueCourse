<template>
  <li>
    <h2>{{ name }} {{ isFavorite === true ? "(Favorite)" : "" }}</h2>
    <button @click="tooglefavorite">Toogle Favorite</button>
    <button @click="toogleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Emial: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      required: true,
      default: false,
    },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    tooglefavorite() {
      this.$emit("toggle-favorite", this.id);
      // this.friendIsFavorite = !this.friendIsFavorite
    },
  },
};
</script>