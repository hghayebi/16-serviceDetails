import Description from "./components/description-section/description-section";
import FaqSection from "./components/faq-section/faq-section";
import Heading from "./components/heading-section/heading-section";
import LinkSection from "./components/link-section/link-section";
import ProcessSection from "./components/porocess-section/porocess-section";
import Section3 from "./components/section-3/section-3";
import "./main.scss";
import "./row2.scss";
import "./row3.scss";

fetch("https://aped.ir/Dorsapax/Data/Sub_0/File/service-details-data.json.pdf")
  .then(res => res.json())
  .then(data => {
    // import data from "./data/data0.json";
    console.log(data);
    const sName = document.querySelector(".ho-temp-service-name");
    console.log(sName);

    console.log(sName.textContent);
    const serviceData = data[`${sName.textContent}`];
    console.log(serviceData);
    sName.style.display = "none";

    const {
      serviceCode,
      serviceName,
      serviceNameEn,
      serviceDescription,
      serviceDescriptionEn,
      serviceLink,
      serviceTime,
      serviceResponsible,
      serviceResponsibleContact,
      serviceRequirements,
      serviceMethod,
      serviceSlaLink,
      serviceGuideLink,
      ServiceMardomLink,
      serviceProcessImageLink,
      q1,
      q2,
      q3,
      q4,
      q5,
      a1,
      a2,
      a3,
      a4,
      a5,
    } = serviceData;

    const serviceDetailes = document.createElement("div");
    serviceDetailes.classList.add("ho-service-detailes");

    // top right service code
    const topRightServiceCode = document.createElement("div");
    topRightServiceCode.classList.add("ho-top-service-code");
    topRightServiceCode.innerHTML = `

<a href="https://aped.ir/serviceinfo" class="ho-serviceInfo-main-page">معرفی خدمات</a>
/
<a href="#" class="ho-currentService-page">service-${serviceCode}</a>

`;

    serviceDetailes.appendChild(topRightServiceCode);

    const row1 = document.createElement("div");
    row1.classList.add("ho-row1");

    const row2 = document.createElement("div");
    row2.classList.add("ho-row2");

    const row3 = document.createElement("div");
    row3.classList.add("ho-row3");

    const row4 = document.createElement("div");
    row4.classList.add("ho-row4");

    document.querySelector(".ho-main-container").appendChild(serviceDetailes);
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
      serviceRequirements,
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
    processSection.render(row3, { serviceProcessImageLink });

    // FAQ section
    const faqSection = new FaqSection();
    faqSection.render(row4, { q1, q2, q3, q4, q5, a1, a2, a3, a4, a5 });
  })
  .catch(err => {
    console.log(`😍😍 ${err}`);
  });
