Vue.component('saludo',{
    template:
    `
    <div>
        <h1>{{ saludo }}</h1>
        <h3>{{ sdbgfhgfd }}</h3>
    </div>
    `,
    data(){
        return {
            saludo: 'Hola desde Vue, con Componente'
        }
    }
})