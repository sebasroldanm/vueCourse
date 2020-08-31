const app = new Vue({
    el: '#app',
    data: {
        saludo: 'Este es el ciclo de vida de Vue',
    },
    beforeCreate() {
        console.log('beforeCeate')
    },
    created() {
        /* Al crear los métodos, observadores y EventSource, pero aún no accede al DOM,
        Aun no se puede acceder a 'el' */
        console.log('created')
    },
    beforeMount() {
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount')
    },
    mounted() {
        // Se ejecuta al insertar el DOM
        console.log('mounted')
    },
    beforeUpdate() {
        // Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        // Al realizar un cambio
        console.log('update')
    },
    beforeDestroy() {
        // Antes de destruit la instacia
        console.group('beforeDestroy')
    },
    destroyed() {
        // Se destruye toda la instacia D:
        console.log('destroy')
    },
    methods: {
        destruir() {
            this.$destroy();
        }
    }
})