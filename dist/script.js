(()=>{"use strict";window.addEventListener("load",(()=>{document.querySelectorAll(".n-name__value").forEach((e=>{"American"==e.value&&e.setAttribute("selected","selected")})),document.querySelectorAll(".d-name__value").forEach((e=>{"21"==e.value&&e.setAttribute("selected","selected")})),document.querySelectorAll(".m-name__value").forEach((e=>{"December"==e.value&&e.setAttribute("selected","selected")})),document.querySelectorAll(".y-name__value").forEach((e=>{"1995"==e.value&&e.setAttribute("selected","selected")}))})),document.querySelector(".complete__button").addEventListener("click",(()=>{const e=document.querySelector(".submit__complete");e.classList.add("shake-x"),setTimeout((()=>e.classList.remove("shake-x")),2e3)})),(()=>{const e=document.querySelector(".main__form"),t=document.querySelector(".box__e-name"),c=document.querySelector(".box__e-line"),l=document.querySelector(".box__e-check"),r=()=>{t.validity.valueMissing&&(c.classList.add("line-error"),l.classList.remove("check-true")),t.validity.typeMismatch&&(c.classList.add("line-error"),l.classList.remove("check-true")),t.validity.tooShort&&(c.classList.add("line-error"),l.classList.remove("check-true"))};t.addEventListener("input",(e=>{t.validity.valid?(c.classList.remove("line-error"),l.classList.add("check-true")):r()})),e.addEventListener("submit",(e=>{t.validity.valid||(r(),e.preventDefault())}))})()})();