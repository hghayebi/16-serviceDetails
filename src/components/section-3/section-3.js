import "./section-3.scss";
// import clock from "./icons/clock.png";
// import phone from "./icons/phone.png";
// import answerCenter from "./icons/answer-center.png";
// import serviceLine from "./icons/service-line.png";
// import documentsIcon from "./icons/documents.png";

export default class Section3 {
  constructor() {}

  render(row2, data) {
    const section3 = document.createElement("section");
    section3.classList.add("ho-section--3");
    row2.appendChild(section3);

    // requirements
    let requirementsList = ``;
    data.serviceRequirements.split("///").forEach(r => {
      let tempLi = `
      <li>
        ${r}
      </li>

      `;

      requirementsList += tempLi;
    });

    const html = `
    
    <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/clock.png" alt=" آیکون نمایشگر ساعت" class="ho-icon">
      <p class="ho-time--name__value">
        متوسط زمان ارائه خدمت:
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-time__value">
        ${data.serviceTime}
      </p>
    </div>

  </div>


  <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/answer-center.png" alt="آیکون فرد پاسخگو" class="ho-icon">
      <p class="ho-responsible--name__value">
        واحد پاسخگو :
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-responsible__value">
      ${data.serviceResponsible}
      </p>
    </div>

  </div>


  <div class="ho-line-box">

    <div class="ho-line-box--first">
      <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/phoneC.png" alt="آیکون تلفن" class="ho-icon">
      <p class="ho-responsibleContact--name__value">
        شماره تماس واحد پاسخگو :
      </p>
    </div>

    <div class="ho-line-box--second">
      <p class="ho-responsibleContact__value">
      ${
        data.serviceResponsibleContact?.trim() == "واحد مربوطه"
          ? '<a href="https://aped.ir/page-main/fa/0/form/pId864" >واحد مربوطه</a>'
          : data.serviceResponsibleContact
      }
      </p>
    </div>

  </div>



  <div class="ho-line-box">

  <div class="ho-line-box--first">
    <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/service-line.png" alt="آیکون دست دادن" class="ho-icon">
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
      <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/documents.png" alt="" class="ho-icon">
      <p class="ho-reqDocuments--name__value">
        مدارک لازم :
      </p>
    </div>

    <div class="ho-line-box--second">
      <ul class="ho-reqDocuments__value">
        ${requirementsList}
      </ul>
    </div>

  </div>

    `;

    section3.innerHTML = html;
  }
}
