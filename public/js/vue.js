/* Variable con nueva instancia de vue */
var app = new Vue({
    /* el id que dispara bue esta en el div con la etiqueta #app */
    el: '#app',
    data: {
        datos: [],
        message: ''
    },
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
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                animation: false,
                progressSteps: ['1', '2', '3']
            }).queue([{
                    title: 'Question 1',
                    text: 'Chaining swal2 modals is easy'
                },
                'Question 2',
                'Question 3'

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