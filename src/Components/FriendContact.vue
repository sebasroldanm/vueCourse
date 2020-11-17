<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="tooglefavorite">Toogle Favorite</button>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
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
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      required: true,
      default: false
    }
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lopez",
        phone: "+57 312 6529966",
        email: "manuel@app.com",
      },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
      toogleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
      },
      tooglefavorite() {
        this.friendIsFavorite = !this.friendIsFavorite
      }
  },
};
</script>