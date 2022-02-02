const searchResult = () =>{
 
  const inputField=document.getElementById('input-field');
  const inputValue=inputField.value;
  if(inputField.value==0){
    alert("Input data");
  }
  else{
    
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=e97a12e96afc70d34c586860776bce56`
  fetch(url)
    .then(res => res.json())
    .then(data => showDetail(data)); 
   
 inputField.value='';
  }
}

const showDetail = data =>{
 const detail= document.getElementById('detail');
 
 const div=document.createElement('div');
 const number=data.main.temp;
 const celcius=  number - 273.15;
 detail.innerHTML='';

 div.innerHTML= `
    <h1>${celcius.toFixed(2)}</h1>
    <h1>${data.name}</h1>
 `
 
 detail.appendChild(div);

}