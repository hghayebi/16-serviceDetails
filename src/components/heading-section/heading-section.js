import "./heading-section.scss";

export default class Heading {
  constructor() {}

  render(row1, data) {
    const heading = document.createElement("section");
    heading.classList.add("ho-heading");
    row1.appendChild(heading);

    const html = `
    
  <div class="ho-service-title">

    <span class="ho-fa-title">
      ${data.serviceName}
    </span>

    <span class="ho-en-title">
    ${data.serviceNameEn}
    </span>

  </div>
    
    `;

    heading.innerHTML = html;
  }
}
