<template lang="">
    <section>
        <h2>My friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>


<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lopez',
                    phone: '+57 312 6529966',
                    email: 'manuel@app.com'
                },
                {
                    id: 'lina',
                    name: 'Lina Contreras',
                    phone: '+57 300 2546632',
                    email: 'lina@app.com'
                },
            ]
        }
    },
}
</script>