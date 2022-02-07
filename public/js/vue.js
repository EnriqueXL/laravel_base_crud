/* No funciona */
/* const { Toast } = require("bootstrap"); */

/* Variable con nueva instancia de vue */
var app = new Vue({
    /* el id que dispara bue esta en el div con la etiqueta #app */
    el: '#app',
    data: {
        datos: [],
        message: ''
    },
    /* Obtengo los datos por medio del metodo GET del Api */
    methods: {
        getDatos() {
            let url = 'http://127.0.0.1:8000/api/datosp';
            axios.get(url).then(response => {
                console.log(response.data);
                this.datos = response.data;
            });
        },

        NuevoDato() {
            console.log('nuevo dato');

            Swal.mixin({

                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                /*  animation: false, */
                progressSteps: ['1', '2', '3']
            }).queue([{
                    title: 'Escribe el nombre completo:',
                    text: 'Nombre completo',
                    input: 'text',
                    inputValidator: (value) => {
                        if (!value) {
                            toastr.error('Debes digitar un nombre', 'Error');
                            return ' '
                        }
                    }
                },
                {
                    title: 'Selecciona el puesto:',
                    text: 'Posición de empleado',
                    input: 'select',
                    inputOptions: {
                        'Roles': {
                            Auditor: 'Auditor',
                            Soporte: 'Soporte',
                            Seguridad: 'Seguridad'
                        }
                    },
                    inputPlaceholder: 'Selecciona una posición',
                },
                {
                    title: 'Escribe el salario de este empleado:',
                    text: 'Este campo acepta decimales:',
                    input: 'number'
                },

            ]).then((result) => {
                if (result.value) {
                    const answers = JSON.stringify(result.value)
                    Swal.fire({
                        title: 'All done!',
                        html: `Your answers: <pre><code>${answers}</code></pre>`,
                        confirmButtonText: 'Lovely!'
                    })
                }
            })




        }

    },
    /* Función de vue  */
    /* Una ves que termine de ejecutar todo, entra moutend */
    mounted() {
        this.getDatos();
    }

})