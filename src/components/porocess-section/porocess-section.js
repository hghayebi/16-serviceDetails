import "./porocess-section.scss";
import processImage from "./service-process.jpg";

export default class ProcessSection {
  constructor() {}

  render(row3) {
    const processSection = document.createElement("section");
    processSection.classList.add("ho-process-section");
    row3.appendChild(processSection);

    const html = `
    
    <img src="${processImage}" alt="نمودار فرایند ارائه خدمت" class="ho-process-section__img">
    
    `;

    processSection.innerHTML = html;
  }
}
