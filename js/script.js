console.log("funciona")
// ## API utilizada

// Esta aplicación utiliza la API de REST Countries para obtener información sobre los países. La URL de la API es [https://restcountries.com/v3.1/all](https://restcountries.com/v3.1/all). Pero os dará un error. Hay que acceder a los datos que necesitáis. Por ejemplo:
// [https://restcountries.com/v3.1/all?fields=name,flags](https://restcountries.com/v3.1/all?fields=name,flags) poned una `,` para cada cosa que necesitéis. Estas son las que necesitamos:
// - name
// - flags
// - car
// - population
// - capital

const countrieslist= document.getElementById("countries-list")


const conseguirbandera = async ()=>{
try {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital")
  if (!response.ok){
    throw new error ("ha habido un error",response.status)
  }
  const data = await response.json()
  return {
  name: data.name,
  flags: data.flags,
  car: data.car,
  population : data.population,
  };

}catch (error){
  console.log("error al obtener datos", error)
}
};
(async () => {
        try {

const template =(id)=>{
    let templatebande =`<li>${id.name}</li>`
}
        
}
    }


    conseguirbandera().then((data)=>template(data))