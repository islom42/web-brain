"use strict";
// Leep year
const getLeepYear = (year = 2020) => {
  const monthFeb =
    new Date(year, 1, 29).getDate() === 29
      ? `${year} is leep year`
      : `${year} is not leep year`;
      return monthFeb
};

console.log(getLeepYear(2017));