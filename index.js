// create car stating

  let car = document.getElementById("car");
  let position = 0;

  setInterval(() => {
    position += 1;
    if (position > window.innerWidth) {
      position = -1;
    }
    car.style.top  = position + "px";
  }, 10);
//   ending code
let header = document.createElement("header");
header.style.backgroundColor = "#1f632e";
header.style.color = "white";
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "center";
header.style.gap ="90px"
header.style.height = "60px";
header.style.fontSize = "22px";
header.innerHTML = `<i class="fa-solid fa-left-long"></i> <i><b calss="gap-4">settings</b></i> <i class="fa-solid fa-magnifying-glass"></i>`;
document.body.appendChild(header);
header.addEventListener("click", ()=>{
header.style.backgroundColor = "#3a3b3aff";
header.style.color = "white";
header.textContent = "this is header";
header.style.alignItems = "center";
header.style.textAlign = "center";
header.style.textTransform = "capitalize";
});
let Constaner = document.createElement("div");
Constaner.style.display ="flex";
Constaner.style.gap = "22px";
Constaner.style.backgroundColor = "#dce3de";
Constaner.style.marginTop = "0%"
Constaner.style.textAlign = "center";
Constaner.style.justifyContent = "bettwen";
Constaner.style.alignItems = "center";
document.body.append(Constaner);
// Image
let img = document.createElement("img");
img.src = "data:image/jpeg;base64,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";
img.style.height = "50px";
img.style.borderRadius = "50%";
img.style.width = "50px";
img.style.margin = "6px";
img.style.marginLeft ="12px"
Constaner.append(img);
// inter div
let div = document.createElement("div");
div.textContent = "fazila Baloch";
div.style.fontSize ="20px";
div.style.marginRight ="10px";
div.style.textTransform = "capitalize";
Constaner.append(div);
// inter icone
let icon = document.createElement("div");
icon.innerHTML = `<i class="fa-solid fa-grip-vertical"></i>`
icon.style.color = "#17612bff";
icon.style.borderRadius = "12px";
icon.style.width ="24px";
Constaner.append(icon);
// icon2 creat
let icon2 = document.createElement("div");
icon2.innerHTML = `<i class="fa-solid fa-gear"></i>`
icon2.style.color= "#17612bff";
Constaner.append(icon2);
// creat contener2
let contaner = document.createElement("div");
contaner.style.backgroundColor = "#c2c7c3ff";
contaner.style.display = "flex";
contaner.style.textAlign = "center";
contaner.style.gap = "30px";
contaner.style.alignItems = "center";
document.body.append(contaner)
contaner.style.justifyContent = "bettwen";
// cantaner key
let paragraph = document.createElement("p");
paragraph.style.margin = "21px";
contaner.style.display = "flex-col";
paragraph.style.display = "flex";
paragraph.innerHTML = `<i class="fa-solid fa-key"></i>`;
contaner.append(paragraph);
// creat h1
let h1 = document.createElement("h1");
h1.textContent = "account";
h1.style.textTransform = "capitalize";
h1.style.marginLeft = "90px";
h1.style.margin = "2px";
contaner.appendChild(h1);
// para 
let para = document.createElement("p");
para.textContent = "Security notifications, account info";
para.style.textTransform = "capitalize";
para.style.textAlign = "center";
para.style.alignItems = "center";
para.style.justifyContent = "bettwen";
h1.append(para);
// creat contaner3
let contaner3 = document.createElement("div");
contaner3.style.backgroundColor = "#a7aaa8ff";
contaner3.style.display = "flex";
contaner3.style.textAlign = "center";
contaner3.style.gap = "30px";
contaner3.style.alignItems = "center";

document.body.append(contaner3);
// creat lock
let p = document.createElement("p");
p.style.color = "#2e2d2dff";
p.style.backgroundColor = "#a7aaa8ff";
p.style.margin = "12px";
p.innerHTML = `<i class="fa-solid fa-lock"></i>`;
contaner3.append(p);
// crat para3
let para3 = document.createElement("p");
para3.textContent ="encryption";
para3.style.color = "#585858ff";
para3.style.textTransform = "capitalize";
contaner3.append(para3);
// careat para4
let para4 = document.createElement("p");
para4.textContent = "messages are end-to-end encrypted. click to verify."
para4.style.fontSize = "12px";
para4.style.color = "#585858ff";
para3.append(para4);
// carate contaner4
let contaner4 = document.createElement("div");
contaner4.style.backgroundColor = "#c2c7c3ff";
contaner4.style.display = "flex";
contaner4.style.textAlign = "center";
contaner4.style.gap = "30px";
contaner4.style.alignItems = "center";
document.body.append(contaner4);
// crate paragraph 
let pg = document.createElement("p");
pg.innerHTML = `<i class="fa-solid fa-square-envelope"></i>`;
pg.style.margin = "12px";
pg.style.color = "#585858ff";
contaner4.append(pg);
