let cityname = document.querySelector(".cityname");
let temp = document.querySelector(".temp");
let mintemp = document.querySelector(".mintemp");
let maxtemp = document.querySelector(".maxtemp");
let wet = document.querySelector(".wet");
let wind = document.querySelector(".wind");
let citycode = 408;
async function hello(citycode) {
  try {
    let result = await fetch(
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0001-001?Authorization=CWB-2CA97EFA-C92D-4D92-A8AD-6A074C467B5E"
    );
    let data = await result.json();
    cityname.innerHTML +=
      data.records.location[citycode].parameter[0].parameterValue;
    temp.innerHTML +=
      data.records.location[citycode].weatherElement[3].elementValue + " ℃";
    mintemp.innerHTML +=
      data.records.location[citycode].weatherElement[12].elementValue + " ℃";
    maxtemp.innerHTML +=
      data.records.location[citycode].weatherElement[10].elementValue + " ℃";
    wet.innerHTML +=
      data.records.location[citycode].weatherElement[4].elementValue * 100 +
      "%";
    wind.innerHTML +=
      data.records.location[citycode].weatherElement[2].elementValue +
      "公里/小時";
    console.log(data.records);

  } catch {
    console.log(e);
  }
}

hello(citycode);

document.querySelector(".Taipei").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 408; //台北
  hello(cityCode);
});

document.querySelector(".NewTapei").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 482; //台北
  hello(cityCode);
});

document.querySelector(".TaoYuan").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 415; //桃園
  hello(cityCode);
});

document.querySelector(".Taichung").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 116; //台中
  hello(cityCode);
});

document.querySelector(".Tainan").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 412; //台南
  hello(cityCode);
});

document.querySelector(".Kaohsiung").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 419; //高雄市
  hello(cityCode);
});


let otherweather = document.querySelector(".gear-fill");
let showothercity = document.querySelector(".otherweather");
otherweather.addEventListener("click", () => {
  showothercity.classList.toggle("active");
});
