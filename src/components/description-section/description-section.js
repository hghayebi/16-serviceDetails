import "./description-section.scss";

export default class Description {
  constructor() {}

  render(row2) {
    const descriptionSection = document.createElement("section");
    descriptionSection.classList.add("ho-description-section");

    row2.appendChild(descriptionSection);

    const html = `
    
    <div class="ho-fa-box">
    <h2 class="ho-description">
      شرح خدمت :
    </h2>

    <p class="ho-description__value">
      با استفاده از این خدمت مشترکین می توانند صورت حساب خارج از دوره خود را ثبت و پیگیری نمایند
    </p>
  </div>

  <div class="ho-en-box">
    <h2 class="ho-descriptionEn">
      Description :
    </h2>

    <p class="ho-descriptionEn__value">
      Using this service, subscribers can register and track their out-of-period bills
    </p>
  </div>
    
    `;

    descriptionSection.innerHTML = html;
  }
}
