import "./heading-section.scss";

export default class Heading {
  constructor() {}

  render(row1) {
    const heading = document.createElement("section");
    heading.classList.add("ho-heading");
    row1.appendChild(heading);

    const html = `
    
    <div class="ho-service-title">

    <span class="ho-fa-title">
      تسویه حساب مشترکین شرکت های توزیع نیروی برق
    </span>

    <span class="ho-en-title">
      Settlement of subscribers of electricity distribution companies
    </span>

  </div>
    
    `;

    heading.innerHTML = html;
  }
}
