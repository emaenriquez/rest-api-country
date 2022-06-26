
let banderas = document.getElementById("banderas")


document.addEventListener("DOMContentLoaded", () =>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()
        mostrarBanderas(data)
        form(data)
        filtroRegion(data)
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const mostrarBanderas =  data =>{
    let elementos = ""
    data.forEach(item => {
        elementos +=  `
        <article class="card">
            <img src="${item.flags.svg}" class="img-fluid">
            <div class="card-content">
                <h3>${item.name.common}</h3>
                <p>
                    <b>population:</b>
                    ${item.population}
                </p>
                <p>
                    <b>Capital:</b>
                    ${item.capital}
                </p>
                <p>
                    <b>continente:</b>
                    ${item.continents}
                </p>
        </div>
    </article> `
    // <p>
    //    <a href="pais.html?=${item.name.common}">Mas info</a>
    // </p>
    });
    banderas.innerHTML = elementos
}