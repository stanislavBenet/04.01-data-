"use strict";

// const [wrap] = document.getElementsByClassName("wrapper");

const btns = document.querySelectorAll(".wrapperBtn>button");

// const btnHundler = ({
//    target: {
//       dataset: { direction },
//    },
// }) => {
//    document.body.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.style.flexDirection =
//       direction;
// };

// for (const btn of btns) {
//    btn.addEventListener("click", btnHundler);
// }

const btnHundler = ({
   target: {
      dataset: { direction },
      parentElement,
   },
}) => {
   parentElement.nextElementSibling.style.flexDirection = direction;
};

for (const btn of btns) {
   btn.addEventListener("click", btnHundler);
}

//?????????????????????????
