const temperaturefeild=document.querySelector(".weather1");
const cityfeild=document.querySelector(".weather2 p");
const datefeild=document.querySelector(".weather2 span");
const emojifeild=document.querySelector(".weather3 img");
const weatherfeild=document.querySelector(".weather3 span");
let target ="delhi";
const searchfeild=document.querySelector(".searchfeild");
const form=document.querySelector("form");
const fetchData= async(target)=>{
   try {
    const url=`https://api.weatherapi.com/v1/current.json?key=c889d1affe924dc189c140425231607&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    const{current:{
        temp_c,condition:{
            text,icon
        }},
        location:{name,localtime},
    }=data;

     updateDom(temp_c,name,localtime,icon,text);
   } catch (error) {
    alert("location not found");
    
   }
};

function updateDom(temperate,city,time,emoji,text){
    temperaturefeild.innerText=temperate;
    cityfeild.innerText=city;
    const exactTime=time.split(" ")[1];
    const exactDate=time.split(" ")[0];
    const exactDay=new Date(exactDate).getDay();
   

  datefeild.innerText=`${exactTime}-${getDayfullname(exactDay)}  ${exactDate}`
    emojifeild.src=emoji
    weatherfeild.innerText=text;

}
fetchData(target);
function getDayfullname(num){
    switch (num) {
        case 0:
            return "Sunday";
            break;
            case 1:
                return "Monday";
            break;
            case 2:
              return "Tuesday";
            break;
            case 3:
              return "Wednesday";
            break;
            case 4:
              return "Thursday";
            break;
            case 5:
              return "Friday";
            break;
            case 6:
              return "Saturday";
            break;
    
        default:
            return "dont know";
            break;
    }

}
const search=(e)=>{
    e.preventDefault();
    target=searchfeild.value;
    fetchData(target);

}
form?.addEventListener("submit",search);