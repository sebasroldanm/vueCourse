Vue.component('hijo', {
    template: `
    <div class="py-5 bg-success">
        <h4>Comp Hijo {{ num }}</h4>
        <h4>Nombre: {{ nombre }}</h4>
        <button @click="num++">+</button>
    `,
    props: ['num'],
    data() {
        return {
            nombre: 'Carlos'
        }
    },
    mounted() {
        this.$emit('nombreHijo', this.nombre)
    }
})