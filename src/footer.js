const top = document.createElement("div");
top.innerText = "Top of Footer";
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
