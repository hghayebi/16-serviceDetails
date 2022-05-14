import Description from "./components/description-section/description-section";
import Heading from "./components/heading-section/heading-section";
import Section3 from "./components/section-3/section-3";
import "./main.scss";
import "./row2.scss";

const serviceDetailes = document.createElement("div");
serviceDetailes.classList.add("ho-service-detailes");

const row1 = document.createElement("div");
row1.classList.add("ho-row1");

const row2 = document.createElement("div");
row2.classList.add("ho-row2");

document.querySelector("body").appendChild(row1);
document.querySelector("body").appendChild(row2);

// --------
const serviceTitle = new Heading();
serviceTitle.render(row1);
// ----------
const description = new Description();
description.render(row2);

// -------
const section3 = new Section3();
section3.render(row2);
