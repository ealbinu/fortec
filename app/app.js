AOS.init()

var app = new Vue({
    el: '#app',
    data () {
        return {
            vermapa: false,
            productos: productoslista,
            categorias: [
                'Sobres',
                ['Sobres Especiales', 'Sobres Manila', 'Sobres Blancos', 'Sobres Correspondencia', 'Sobres de Polipropileno'],
                'Papeles',
                ['Papel Colores', 'Papel Neón', 'Papel Pastel', 'Papel Sunshine'],
                'Folders',
                ['Folder Tradicional Carta', 'Folder Tradicional Oficio', 'Folder Intenso', 'Folder Lux'],
                'Carpetas',
                ['Carpetas Blancas', 'Caja Archivo', 'Registradores'],
                'Otros',
                ['Libros', 'Formas Administrativas', 'Despachadores de Agua', 'Calculadoras', 'Burbuja', 'Manteles']
            ],
            categoriaactiva: 'Sobres Especiales',       
            form: {
                area: 'Cotización',
                nombre: null,
                correo: null,
                telefono: null,
                mensaje: null
            }
        }
    },
    created () {
        console.log('created')
        const urlParams = new URLSearchParams(window.location.search)
        const correoenviado = urlParams.get('enviado')
        console.log(correoenviado)
        if (correoenviado!=null) {
            this.$buefy.dialog.alert({message:'Tu mensaje ha sido enviado.', type: 'is-info'})
        }
    }
})