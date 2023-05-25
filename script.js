


const time= document.getElementById('time');
const date= document.getElementById('date')

const monthName = ["Enero" , "Febrero" , "Marzo" , "Abril" , "Mayo", "Junio" , "Julio" , "Agosto" , "Septiembre" , "Octubre" , "Noviembre" , "Diciembre"] 


const interval = setInterval (() => {

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();
    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthName[month]} ${year}`;

}, 1000);