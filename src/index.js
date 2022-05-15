import Description from "./components/description-section/description-section";
import FaqSection from "./components/faq-section/faq-section";
import Heading from "./components/heading-section/heading-section";
import LinkSection from "./components/link-section/link-section";
import ProcessSection from "./components/porocess-section/porocess-section";
import Section3 from "./components/section-3/section-3";
import "./main.scss";
import "./row2.scss";
import "./row3.scss";

import data from "./data/data0.json";
const serviceData =
  data["صدور قبض پایان دوره برای مشترکین شرکت های توزیع نیروی برق"];

const {
  serviceName,
  serviceNameEn,
  serviceDescription,
  serviceDescriptionEn,
  serviceLink,
  serviceTime,
  serviceResponsible,
  serviceResponsibleContact,
  serviceRequirements1,
  serviceRequirements2,
  serviceRequirements3,
  serviceMethod,
  serviceSlaLink,
  serviceGuideLink,
  ServiceMardomLink,
  serviceProcessImageLink,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
  question4,
  answer4,
  question5,
  answer5,
} = serviceData;

const serviceDetailes = document.createElement("div");
serviceDetailes.classList.add("ho-service-detailes");

const row1 = document.createElement("div");
row1.classList.add("ho-row1");

const row2 = document.createElement("div");
row2.classList.add("ho-row2");

const row3 = document.createElement("div");
row3.classList.add("ho-row3");

const row4 = document.createElement("div");
row4.classList.add("ho-row4");

document.querySelector("body").appendChild(serviceDetailes);
serviceDetailes.appendChild(row1);
serviceDetailes.appendChild(row2);
serviceDetailes.appendChild(row3);
serviceDetailes.appendChild(row4);

// heading --------
const serviceTitle = new Heading();
serviceTitle.render(row1, { serviceName, serviceNameEn });

// description ----------
const description = new Description();
description.render(row2, { serviceDescription, serviceDescriptionEn });

// -------
const section3 = new Section3();
section3.render(row2, {
  serviceTime,
  serviceResponsible,
  serviceResponsibleContact,
  serviceMethod,
  serviceRequirements1,
  serviceRequirements2,
  serviceRequirements3,
});

// Link section
const linkSection = new LinkSection();
linkSection.render(row3, {
  serviceSlaLink,
  serviceLink,
  serviceGuideLink,
  ServiceMardomLink,
});

// process section
const processSection = new ProcessSection();
processSection.render(row3);

// FAQ section
const faqSection = new FaqSection();
faqSection.render(row4);
