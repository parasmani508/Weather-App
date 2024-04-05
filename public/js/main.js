const submitbtn=document.getElementById('submitbtn')
const cityname=document.getElementById('cityname');

const city_name=document.getElementById('city_name');

const datahide=document.querySelector('.middle_layer');

const temp_val=document.getElementById('temp_val');
const temp_status=document.getElementById('temp_status')

const getInfo=async(event)=>
{
    event.preventDefault();
    let cityVal=cityname.value;
if(cityVal==="")
 {
  city_name.innerText="Please write something here";
  datahide.classList.add('data_hide')
 }
else
{

    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=matric&appid=3fc37226ec81e6c9b348a89c2786fa0e`;
    const response=await fetch(url);
    const data=await response.json();
    const arrData=[data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`

    temp_val.innerText=(arrData[0].main.temp-273.15).toFixed(2);
    let temp_mood=arrData[0].weather[0].main;
    //Condition to check Sunny,cloudy,rainy
    if(temp_mood==="Clear")
    {
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";

    }
    else if(temp_mood==="Clouds")
    {
        temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

    }
    else if(temp_mood==="Rain")
    {
        temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be;'></i>";

    }
    else
    {
        temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";

    }
    datahide.classList.remove('data_hide')

    }
    catch
    {
        city_name.innerText="Write City Name properly";
        datahide.classList.add('data_hide');
    }
}

}
//unist=metric is used to get the data in celcius    
submitbtn.addEventListener('click',getInfo);