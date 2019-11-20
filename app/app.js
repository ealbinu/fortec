AOS.init()

var app = new Vue({
    el: '#app',
    data () {
        return {
            vermapa: false,
            form: {
                area: 'Cotización',
                nombre: null,
                correo: null,
                telefono: null,
                mensaje: null
            }
        }
    }
})