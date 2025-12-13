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
const  info = document.getElementById("info")


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
   

let templatebandera=`<li class="card" >
<img src="${pais.flags.png}">
<br>${paisnombre}
 </li>`
container.innerHTML+= templatebandera  ;

  
  });

     const cards = document.querySelectorAll(".card")

cards.forEach((card,i)=>{
  card.addEventListener("click",()=>{

      info.classList.add("visible")    
      const paises =data.find(p=> p.name.common  ===PAISESORDENADOS[i]);
      const {flags, name:{common},population, car , capital} = paises
      


      const template=`
      <div  id="info-container" class="info-container" >
      <div >
      <div id="cerrado" class="cerrado" ></div>
        <img src="${flags.png}">
        <br>${common}
        <p> habitantes :${population}</p>
    <p> direccion de coche :${car.side}</p>
    <p> capital :${capital}</p>  
    <button id ="botoncerrado" class="btn"> CERRAR</button>   
      
      </div>
       </div>


      `

      info.innerHTML = template

   // console.log("prueba de indices" + i )<----- TODO FUNCIONA
  })
})




}catch (error){
  console.log("error al obtener datos", error)
}




info.addEventListener("click",(e)=>{
  if(e.target.id ==="botoncerrado" ||
    e.target.classList.contains("cerrado")){
info.classList.remove("visible")
  }
})


};




   conseguirbandera()
