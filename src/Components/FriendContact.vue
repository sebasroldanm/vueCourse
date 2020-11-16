<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Emial: </strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>


<script>
export default {
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lopez",
        phone: "+57 312 6529966",
        email: "manuel@app.com",
      },
    };
  },
  methods: {
      toogleDetails() {
          this.detailsAreVisible = !this.detailsAreVisible;
      }
  },
};
</script>