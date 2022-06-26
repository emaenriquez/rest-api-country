
const banderas = document.getElementById('banderas')

// const query = new URLSearchParams(window.location.search)

// const params = query.get('name')

document.addEventListener("DOMContentLoaded", e =>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all")
        const data = await res.json()
       

    //   let nombres =  data.forEach(item => {
    //         console.log(item.name.common)
    //     })

    // const filtroData = data.filter(item => item.name.common === nombres)

    //     mostrarBanderas(filtroData)
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
    });
    banderas.innerHTML = elementos
}