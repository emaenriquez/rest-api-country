
let formulario = document.getElementById("formulario")
let inputFormulario = document.getElementById("input-formulario")

const form = data => {
    formulario.addEventListener("keyup", e=>
    {

        e.preventDefault()
        const letraForm = inputFormulario.value.toLowerCase()

        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.common.toLowerCase()
            if(letraApi.indexOf(letraForm) !== -1){
                return item
            }
        })
    //    console.log(arrayFiltrado)
       mostrarBanderas(arrayFiltrado)
    })   
}