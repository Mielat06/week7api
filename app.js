console.log("Fetching cool things");

async function getcats() {
  const imageUrl = "https://http.cat/401";

  const responseContainer = document.getElementById("responseContainer");

  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = "HTTP Cat";

  responseContainer.appendChild(img);
}

getcats();
