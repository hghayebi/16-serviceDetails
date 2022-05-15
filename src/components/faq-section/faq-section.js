import "./faq-section.scss";
import faqImage from "./question.jpg";

export default class FaqSection {
  constructor() {}

  render(row4) {
    const faqSection = document.createElement("section");
    faqSection.classList.add("ho-faq-section");
    row4.appendChild(faqSection);

    const html = `
    
    <div class="ho-faq-title">

    <span class="ho-fa-title">
    سوالات متداول
    </span>

  </div>


  
  <div class="ho-faq-box">

  <div class="ho-faq-questions">

    <div class="ho-question-box">
      <h2 class="ho-question">
        1- مدت زمان ارائه خدمت چند روز می باشد؟
      </h2>
      <p class="ho-answer">
        بطور متوسط 8 روز کاری طوال خواهد کشید .
      </p>
    </div>

    <div class="ho-question-box">
      <h2 class="ho-question">
        2- آیا صورتحساب های صادره دقیقا وفق نرخ های مصوب وزارت نیرو صادر شده است ؟
      </h2>
      <p class="ho-answer">
        بله , بر اساس شرایط تعرفه های برق مصوب وزارت نیرو و صادر می گردد.
      </p>
    </div>

    <div class="ho-question-box">
      <h2 class="ho-question">
        3- آیا لوازم اندازه گیری تست و عمکلرد آن مورد سنجش و تایید قرار می گیرد ؟
      </h2>
      <p class="ho-answer">
        بله , فرآیند تست لوازم اندازه گیری انجام می یابد .
      </p>
    </div>

    <div class="ho-question-box">
      <h2 class="ho-question">
        4- آیا پیگیری فرآیند تسویه حساب بصورت غیر حضوری توسط مشترک مقدور میباشد؟
      </h2>
      <p class="ho-answer">
        بله : مشترک از نتایج فرآیند با مراجعه بخش پیگیری برنامه برق من , مطلع خواهد گردید.
      </p>
    </div>

    <div class="ho-question-box">
      <h2 class="ho-question">
        5- آیا در فرآیند توسیه حساب فقط بدهی برق مصرفی پرداخت می گردد؟
      </h2>
      <p class="ho-answer">
        نخیر : در این فرآیند لو.ارم اندازه گیری تست , آخرین صورتحساب برق مصرفی صادر و کل بدهی تسویه می گردد.
      </p>
    </div>


  </div>

  <div class="ho-faq__image-box">
    <img src="${faqImage}" alt="" class="ho-faq__image">
  </div>

</div>


    `;

    faqSection.innerHTML = html;
  }
}
