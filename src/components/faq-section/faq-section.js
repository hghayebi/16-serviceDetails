import "./faq-section.scss";
// import faqImage from "./question.jpg";

export default class FaqSection {
  constructor() {}

  render(row4, data) {
    const faqSection = document.createElement("section");
    faqSection.classList.add("ho-faq-section");
    row4.appendChild(faqSection);

    // let faq = ``;

    // // data.serviceFaq.replace(/\\"/, "");
    // data.serviceFaq.split("sss").forEach((questionAnswer) => {
    //   // console.log(questionAnswer);
    //   let [question, answer] = questionAnswer.split("qqq");
    //   faq += `

    // <div class="ho-question-box">
    //   <h2 class="ho-question">
    //     ${question}
    //   </h2>
    //   <p class="ho-answer">
    //     ${answer}
    //   </p>
    // </div>

    //   `;
    // });

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
    ${data.q1 || " "}
  </h2>
  <p class="ho-answer">
    ${data.a1 || " "}
  </p>
</div>

<div class="ho-question-box">
  <h2 class="ho-question">
    ${data.q2 || " "}
  </h2>
  <p class="ho-answer">
    ${data.a2 || " "}
  </p>
</div>


<div class="ho-question-box">
  <h2 class="ho-question">
    ${data.q3 || " "}
  </h2>
  <p class="ho-answer">
    ${data.a3 || " "}
  </p>
</div>


<div class="ho-question-box">
  <h2 class="ho-question">
    ${data.q4 || " "}
  </h2>
  <p class="ho-answer">
    ${data.a4 || " "}
  </p>
</div>


<div class="ho-question-box">
  <h2 class="ho-question">
    ${data.q5 || " "}
  </h2>
  <p class="ho-answer">
    ${data.a5 || " "}
  </p>
</div>

  </div>

  <div class="ho-faq__image-box">
    <img src="https://aped.ir/Dorsapax/Data/Sub_0/File/question.jpg
    " alt="تصویر آدمک باآیکون سوال" class="ho-faq__image">
  </div>

</div>


    `;

    faqSection.innerHTML = html;
  }
}
