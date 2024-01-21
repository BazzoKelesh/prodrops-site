// Save form data in localstorage
// function saveForm1(e) {
//   let name = e.target.name;
//   const isCheckbox = e.target.type === "checkbox";
//   const value = isCheckbox ? e.target.checked : e.target.value;
//   if (isCheckbox) {
//     name = e.target.value
//   }
//   localStorage.setItem(`partnerForm1-${name}`, value);
// }
// function saveForm2(e) {
//   const isCheckbox = e.target.type === "checkbox";
//   const name = e.target.name;
//   const value = isCheckbox ? e.target.checked : e.target.value;
//   localStorage.setItem(`partnerForm2-${name}`, value);
// }

// async function setForm1() {
//   let items = { ...localStorage };
//   items = Object.fromEntries(Object.entries(items).filter(([key]) => key.includes("partnerForm1")));
//   for (const key of Object.keys(items)) {
//     const name = key.split("-")[1];
//     const value = items[key];
//     const el = form1.querySelector(`input[name="${name}"]`);
//     if (el) {
//       const isCheckbox = el.type === "checkbox";
//       if (isCheckbox) {
//         el.checked = value === "false" ? false : true;
//       } else {
//         console.log("sdd");
//         el.value = value;
//       }
//     }
//   }
// }
// async function setForm2() {
//   let items = { ...localStorage };
//   items = Object.fromEntries(Object.entries(items).filter(([key]) => key.includes("partnerForm2")));
//   for (const key of Object.keys(items)) {
//     const name = key.split("-")[1];
//     const value = items[key];
//     const el = form2.querySelector(`input[name="${name}"]`);
//     if (el) {
//       const isCheckbox = el.type === "checkbox";
//       if (isCheckbox) {
//         el.checked = value === "false" ? false : true;
//       } else {
//         console.log("sdd");
//         el.value = value;
//       }
//     }
//   }
// }

// form1.addEventListener("input", (e) => {
//   console.log("input");
//   saveForm1(e);
// });
// form2.addEventListener("input", (e) => {
//   console.log("input");
//   saveForm2(e);
// });
// setForm1();
// setForm2();
