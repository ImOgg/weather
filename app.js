let cityname = document.querySelector(".cityname");
let temp = document.querySelector(".temp");
let mintemp = document.querySelector(".mintemp");
let maxtemp = document.querySelector(".maxtemp");
let wet = document.querySelector(".wet");
let wind = document.querySelector(".wind");
let citycode = 407;
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
    console.log(data.records.location);

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
  cityCode = 407; //台北
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
  cityCode = 414; //桃園
  hello(cityCode);
});

document.querySelector(".Taichung").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 481; //台中
  hello(cityCode);
});

document.querySelector(".Tainan").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 475; //台南
  hello(cityCode);
});

document.querySelector(".Kaohsiung").addEventListener("click", function () {
  cityname.innerHTML = "";
  temp.innerHTML = "";
  mintemp.innerHTML = "";
  maxtemp.innerHTML = "";
  wet.innerHTML = "";
  wind.innerHTML = "";
  cityCode = 382; //高雄市
  hello(cityCode);
});


let otherweather = document.querySelector(".gear-fill");
let showothercity = document.querySelector(".otherweather");
otherweather.addEventListener("click", () => {
  showothercity.classList.toggle("active");
});
let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();
// 要控制的對象
// duration
// 控制對象的初始狀態
// 控制對象結束動畫後的狀態
time_line
    .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
    .fromTo(slider, 1, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
    .fromTo(animation, 0.3, { opacity: "1" }, { opacity: "0", ease: Power2.easeInOut })
    ;
// 在完成動畫後 讓使控制項目無法被點擊
setTimeout(() => {
    animation.style.pointerEvents = "none";
}, 2500);