import "./section-3.scss";
import clock from "./icons/clock.png";
import phone from "./icons/phone.png";
import answerCenter from "./icons/answer-center.png";
import serviceLine from "./icons/service-line.png";
import documentsIcon from "./icons/documents.png";

export default class Section3 {
  constructor() {}

  render(row2) {
    const section3 = document.createElement("section");
    section3.classList.add("ho-section--3");
    row2.appendChild(section3);

    const html = `
    
    <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="${clock}" alt="" class="ho-icon">
      <p class="ho-time--name__value">
        متوسط زمان ارائه خدمت:
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-time__value">
        8 روز کاری
      </p>
    </div>

  </div>


  <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="${answerCenter}" alt="" class="ho-icon">
      <p class="ho-responsible--name__value">
        واحد پاسخگو :
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-responsible__value">
        معاونت مشترکین - واحد قطع و وصل
      </p>
    </div>

  </div>


  <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="${phone}" alt="" class="ho-icon">
      <p class="ho-responsibleContact--name__value">
        شماره تماس واحد پاسخگو :
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-responsibleContact__value">
        1521
      </p>
    </div>

  </div>



  <div class="ho-line-box">

  <div class="ho-line-box--first">
    <img src="${serviceLine}" alt="" class="ho-icon">
    <p class="ho-service-line--name__value">
      نحوه ارائه خدمت :
    </p>
  </div>

  <div class="ho-line-box--second">

    <input type="checkbox" id="ProvideServiceType1" name="ProvideServiceType1" value="Electronic" checked="true"
      disabled="true" data-uw-styling-context="true">
    <label for="ProvideServiceType1" data-uw-styling-context="true"> الکترونیکی</label>

    <input type="checkbox" id="ProvideServiceType2" name="ProvideServiceType2" value="NimeElectronic" disabled="true"
      data-uw-styling-context="true">
    <label for="ProvideServiceType2" data-uw-styling-context="true"> نیمه الکترونیکی</label>

    <input type="checkbox" id="ProvideServiceType3" name="ProvideServiceType3" value="Hozoori" disabled="true"
      data-uw-styling-context="true">
    <label for="ProvideServiceType3" data-uw-styling-context="true"> مراجعه حضوری</label>

  </div>

</div>



<div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="${documentsIcon}" alt="" class="ho-icon">
      <p class="ho-reqDocuments--name__value">
        مدارک لازم :
      </p>
    </div>

    <div class="ho-line-box--second">
      <ul class="ho-reqDocuments__value">
        <li>شناسه قبض محل مصرف</li>
      </ul>
    </div>

  </div>

    `;

    section3.innerHTML = html;
  }
}
