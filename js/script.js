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
 container= document.getElementById("listapaises")

const conseguirbandera = async ()=>{
try {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,car,population,capital")
      if (!response.ok){
        throw new Error ("ha habido un error",response.status)
  }
  const data = await response.json()
  console.log("este es el data con todo para mirarlo",data)
  const PAISESORDENADOS= data.map (pais=>pais.name.common).sort((a,b)=>a.localeCompare(b));

  console.log(PAISESORDENADOS)

  PAISESORDENADOS.forEach(paisnombre => {
    const pais = data.find(p=>p.name.common===paisnombre)
   

let templatebandera=`<li><img src="${pais.flags.png}"><br>PAIS:${paisnombre} </li>`
container.innerHTML+= templatebandera  ;

  });


  

}catch (error){
  console.log("error al obtener datos", error)
}
};



   conseguirbandera()