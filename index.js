/**
 * 
 *      <div class="color-container">
        <div class="color-showcase"></div>
        <h4 class="color-id">#FBF3AB</h4>
       </div>
 */

const colorPickerInput = document.getElementById("color-input");
const schemeContainer = document.getElementById("scheme");
const submitBtn = document.getElementById("submit-btn");
const selectionList = document.getElementById("color-schema-options");

submitBtn.addEventListener("click", function () {
  const colorHex = colorPickerInput.value.slice(1);

  schemeContainer.innerHTML = "";
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${selectionList.value}`,
    { method: "GET", headers: { "Content-Type": "application/json" } }
  )
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data.colors);
      data.colors.forEach((color) => {
        console.log(color.rgb.value);
        schemeContainer.innerHTML += `
            <div class="color-container">
            <div class="color-showcase" style="background-color:${color.rgb.value}"></div>
            <h4 class="color-id">${color.hex.value}</h4>
            </div>
        `;
      });
    });
});
