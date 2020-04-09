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
        /*
        for (var pr in productoslista) {
            var prod = productoslista[pr]
            this.categoriasex.push(prod.categoria1)
            this.categoriasex.push(prod.categoria2)
        }
        */
        /*
        var contador = 0
        for (var pr in productoslista) {
            var prod = productoslista[pr]
            //Categorias
            var cats = prod.categorias.split('>')
            if (cats.length) {
                prod.categoria1 = cats[0]
                prod.categoria2 = cats[1]
            } else {
                prod.categoria1 = prod.categorias
            }
            //Imagenes
            var img = prod.image.split('|')
            if (img.length) {
                prod.image1 = img[0]
                //prod.image2 = img[1]
            } else {
                prod.image1 = prod.image
            }
            this.$delete(prod, 'categorias')
            this.$delete(prod, 'image')
            this.$delete(prod, 'id')
            this.$delete(prod, 'sku')
            contador += 1
            this.productos.push(prod)
        }
        console.log('Productos: ', contador)
        */
    }
})