
    const contpre = document.getElementById('pre-simulation')
    const contPost = document.getElementById('post-simulation')



function simulador(){
    

    // VALORES DE LOS CAMPOS DEL FORMULARIO
    let cNombres = document.getElementById('Nombres').value
    let cTelefono = document.getElementById('Telefono').value
    let cEmail = document.getElementById('Email').value
    let cMonto = document.getElementById('Monto').value
    let cTiempo = document.getElementById('Tiempo').value

    // CONSTANTES QUE CAPTURAN LAS ETIQUETAS SPAN EN LAS QUE SE MUESTRAN LOS VALORES 



    const sTiempo = document.getElementById('sTiempo')
    const sInteres = document.getElementById('sInteres')
    const sTotal= document.getElementById('sTotal')
    const sGanancia = document.getElementById('sGanancia')
    const sNombres = document.getElementById('sNombres')
    const sCorreo = document.getElementById('sCorreo')

    // variables para realizar las operaciones 

    let ganancia = 0
    let total = 0


    switch (cTiempo) {
        // en este case realizaremos el calculo si el tiempo corresponde a 1 años
        case '1':
            ganancia = (cMonto*0.008)*12
            total = parseInt (cMonto) + parseInt(ganancia)
            sInteres.textContent = '0.8%'
            sTiempo.textContent = '12 MESES'
            break;

        // en este case realizaremos el calculo si el tiempo corresponde a 2 años
        case '2':
            ganancia = (cMonto*0.013)*24
            total = parseInt(cMonto) + parseInt(ganancia)
            sInteres.textContent = '0.13%'
            sTiempo.textContent = '24 MESES'
            break;

        // en este case realizaremos el calculo si el tiempo corresponde a 3 años
        case '3':
            ganancia = (cMonto * 0.017)*36
            total = parseInt(cMonto) + parseInt(ganancia)
            sInteres.textContent = '1.17%'
            sTiempo.textContent = '36 MESES'
        break;
    
        default:
            break;
    }

    if (cNombres == "" || cEmail == "" || cMonto == "" || cTiempo == "") {
        alert("Complete los cambios obligatorios")
        
    }else{
        contPost.classList.remove('disabled')
        contpre.classList.add('disabled')
        switch (cTiempo) {

        }
    }

    sTotal.textContent = total
    sGanancia.textContent = ganancia
    sNombres.textContent = cNombres
    sCorreo.textContent = cEmail


    contPost.classList.remove('disabled');
    contpre.classList.add('disabled');


    
}
    document.addEventListener('DOMContentLoaded',function(){
        document.getElementById('calcular').addEventListener('click',simulador);
})