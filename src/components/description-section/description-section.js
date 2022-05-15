import "./description-section.scss";

export default class Description {
  constructor() {}

  render(row2, data) {
    const descriptionSection = document.createElement("section");
    descriptionSection.classList.add("ho-description-section");

    row2.appendChild(descriptionSection);

    const html = `
    
    <div class="ho-fa-box">
    <h2 class="ho-description">
      شرح خدمت :
    </h2>

    <p class="ho-description__value">
     ${data.serviceDescription}
    </p>
  </div>

  <div class="ho-en-box">
    <h2 class="ho-descriptionEn">
      Description :
    </h2>

    <p class="ho-descriptionEn__value">
    ${data.serviceDescriptionEn}
    </p>
  </div>
    
    `;

    descriptionSection.innerHTML = html;
  }
}
