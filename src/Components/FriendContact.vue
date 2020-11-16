<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toogleDetails">Show details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ friend.phone }}</li>
      <li><strong>Emial: </strong>{{ friend.emial }}</li>
    </ul>
  </li>
</template>


<script>
export default {
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