let cityName=document.getElementById('cityName');

let dataaa=[];

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

async function search(city){


if(city.length>=3){
    let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7549b809e7934c2b8b5180605220106&q=${city}&days=3`);
    
    dataaa=await response.json();
    displayFristDay();
    display();
 
}

    }

    search("cairo");


function displayFristDay(){
    days=dataaa.forecast.forecastday[0];
    locate=dataaa.location.name;
    const today = new Date();
    let currentDay = weekDays[today.getDay()];


let fristDayContent='';
fristDayContent+=`<div>
<div class=" d-flex justify-content-between frist-title w-100 p-2 ">
  <span>${currentDay}</span>
   <span>${ today.getDate() + monthNames[today.getMonth()] }</span>

</div>
<div class="frist-content p-3  ">
  <div class="location">
      <span>${locate}</span>

  </div>

  <div class="temperature d-flex  justify-content-between">
      <h1 class=" text-white mb-4 " id="fristTemp">${days.day.maxtemp_c}</h1>
      <span class=" mt-5"><img src=" https://${days.day.condition.icon}"></span>
  </div>
  <div class="climate mb-3">
      <span>${days.day.condition.text}</span>
  </div>
  <div class="status d-flex justify-content-between w-75">
      <div class="raining">
          <i class="fa-solid fa-umbrella"></i>
          <span>
          ${days.day.daily_chance_of_rain}%
          </span>
      </div>
      <div class="wind">
          <i class="fa-solid fa-wind"></i>
          <span>${days.day.maxwind_kph}km/h</span>
      </div>
      <div class="direction">
          <i class="fa-solid fa-location-crosshairs"></i>
          <span> ${days.hour[1].wind_dir}</span>
      </div>
  </div>
</div>

     
</div>`

document.getElementById('fristDay').innerHTML=fristDayContent;


}

function display(){


    let otherDayes=[];
    otherDayes=dataaa.forecast.forecastday;
        let cartoona='';
        for(var i=1;i<otherDayes.length;i++)
    {
    
    
    cartoona+=`<div class="col-lg-6 third-day text-center g-0">
    <div>
    <div class="  frist-title w-100 p-2 text-center">
      <span>${weekDays[new Date(otherDayes[i].date.replace(' ', 'T')).getDay()] }</span>
    </div>
     <div class="  p-4 mt-4">
      <div class="second-container ">
          <div>
              <span class=" mt-3"><img src=" https://${otherDayes[i].day.condition.icon}"></span>
          </div>
          <div>
             <h3 class=" text-white" id="thirdTemp">
             ${otherDayes[i].day.maxtemp_c}
             </h3>
             <span>${otherDayes[i].day.mintemp_c}</span>
          </div>
          <div class="climate mb-3">
              <span>${otherDayes[i].day.condition.text}</span>
          </div>
      </div>
     </div>
    
    </div>
    
    </div>
    `

    
    }
            
    document.getElementById('otherDays').innerHTML=cartoona;
    
    
    
    }
    

