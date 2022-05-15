import "./link-section.scss";
import linkIcon from "./icons/link.png";
import agreementIcon from "./icons/agreement.png";
import helpIcon from "./icons/help.png";
import documentationIcon from "./icons/documentation.png";

export default class LinkSection {
  constructor() {}

  render(row3) {
    const linkSection = document.createElement("section");
    linkSection.classList.add("ho-link-section");
    row3.appendChild(linkSection);

    const html = `
    
  <div class="ho-links">


<a href="#" class="ho-link-box">
  <div class="ho-link-box__content">
    <img src="${linkIcon}" alt="" class="ho-link-box__icon">

    <p class="ho-link-box__value">
      لینک دریافت خدمت
    </p>
  </div>
</a>


<a href="#" class="ho-service-link ho-link-box">
<div class="ho-link-box__content">
  <img src="${agreementIcon}" alt="" class="ho-link-box__icon">

  <p class="ho-link-box__value">
    توافقنامه سطح خدمات
  </p>
</div>
</a>



<a href="#" class="ho-service-link ho-link-box">
<div class="ho-link-box__content">
  <img src="${helpIcon}" alt="" class="ho-link-box__icon">

  <p class="ho-link-box__value">
    راهنمای استفاده از خدمت
  </p>
</div>
</a>

<a href="#" class="ho-service-link ho-link-box">
      <div class="ho-link-box__content">
        <img src="${documentationIcon}" alt="" class="ho-link-box__icon">

        <p class="ho-link-box__value">
          اطلاعات تکمیلی خدمت
        </p>
      </div>
</a>

  </div>
    
    `;

    linkSection.innerHTML = html;
  }
}
