"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  req.send();

  req.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    const lang = Object.entries(data.languages);
    const currency = Object.entries(data.currencies);
    console.log(data);
    console.log(currency);
    const html = `<article class="country">
  <img src="${data.flags.png}" alt="" class="country_img" />
  <div class="country_data">
    <h3 class="country_name">${data.name.common}</h3>
    <h4 class="country_region">${data.region}</h4>
    <p class="country_row"><span>Language : ${lang[0][1]}</span></p>
    <p class="country_row"><span>💵 : ${currency[0][1].name} (${currency[0][1].symbol})</p>
    <p class ="country_row"><span>Capital City : ${data.capital}</span>
    <p class ="country_row"><span>Population : ${data.population}</span>
    <p class ="country_row"><span>Borders : ${data.borders}</span>
  </div>
  </article>`;

    countries.innerHTML = html;
    // countries.insertAdjacentHTML("beforeend", html);
    countries.style.opacity = 1;
  });
};

const getRegion = function (region) {
  const req = new XMLHttpRequest();
  req.open("GET", `https://restcountries.com/v3.1/region/${region}`);
  req.send();

  req.addEventListener("load", function () {
    const data = JSON.parse(req.response);
    console.log(data);
    data.forEach((item) => {
      const lang = Object.entries(item.languages);
      const currency = Object.entries(item.currencies);

      const html = `<article class="country">
    <img src="${item.flags.png}" alt="" class="country_img" />
    <div class="country_data">
      <h3 class="country_name">${item.name.common}</h3>
      <h4 class="country_region">${item.region}</h4>
      <p class="country_row"><span>Language : ${lang[0][1]}</span></p>
      <p class="country_row"><span>💵 : ${currency[0][1].name} (${currency[0][1].symbol})</p>
      <p class ="country_row"><span>Capital City : ${item.capital}</span>
      <p class ="country_row"><span>Population : ${item.population}</span>
      <p class ="country_row"><span>Borders : ${item.borders}</span>
    </div>
    </article>`;

      countries.insertAdjacentHTML("beforeend", html);
      countries.style.opacity = 1;
    });
  });
};

document.querySelector(".btn-search").addEventListener("click", () => {
  const search = document.getElementById("search").value;
  getCountry(search);
});

document.querySelector(".btn-africa").addEventListener("click", () => {
  countries.innerHTML = "";
  getRegion("Africa");
});

document.querySelector(".btn-asia").addEventListener("click", () => {
  countries.innerHTML = "";
  getRegion("Asia");
});

document.querySelector(".btn-america").addEventListener("click", () => {
  countries.innerHTML = "";
  getRegion("America");
});

document.querySelector(".btn-europe").addEventListener("click", () => {
  countries.innerHTML = "";
  getRegion("Europe");
});

document.querySelector(".btn-oceania").addEventListener("click", () => {
  countries.innerHTML = "";
  getRegion("Oceania");
});

// getCountry("Laos");
// getCountry("USA");
// getCountry("Norway");
// getCountry("United Kingdom");
