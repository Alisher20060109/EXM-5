let karzinkaCards = document.getElementById("karzinka-cards");
let totalPrice = document.getElementById("totalPrice");

function showCartProducts() {
  karzinkaCards.innerHTML = "";
  cards = JSON.parse(localStorage.getItem("cards") || "[]");

  let total = 0;

  cards.forEach((el) => {
    let itemTotal = (el.price - (el.price * el.discount) / 100) * el.numbers;
    total += itemTotal;

    karzinkaCards.innerHTML += `
      <div class="flex items-center max-w-[940px] w-full h-[80px] justify-between p-[10px] gap-[30px] hover:shadow-lg">
        <img class="w-[80px]" src="${el.images[0]}" alt="${el.name}">
        
        <div class="max-w-[300px]">
          <h1 class="text-[18px] text-[#414141] line-clamp-[1]">${el.description}</h1>
          <h1 class="text-[16px] text-[#414141]">$${el.price}</h1>
        </div>

        <div class="flex items-center justify-between gap-[30px]">
          <div class="max-w-[200px] w-full flex items-center h-[60px]">
            <button onclick="decrease(${
              el.id
            })" class="w-[66px] bg-[red] cursor-pointer h-[30px] rounded-lg text-white">-</button>
            <span class="w-[66px] text-center text-[20px]">${el.numbers}</span>
            <button onclick="increase(${
              el.id
            })" class="w-[66px] bg-[#70C05B] cursor-pointer h-[30px] rounded-lg text-white">+</button>
          </div>
          <h1 class="text-[26px] text-[#414141]">$${itemTotal.toFixed(2)}</h1>
        </div>
        
      </div>
    `;
  });

  totalPrice.textContent = total.toFixed(2);
  badge.textContent = cards.length;
}

function increase(id) {
  cards = cards.map((el) => {
    if (el.id === id) el.numbers += 1;
    return el;
  });

  localStorage.setItem("cards", JSON.stringify(cards));
  badge.textContent = cards.length;
  showCartProducts();
}

function decrease(id) {
  cards = cards
    .map((el) => {
      if (el.id === id) el.numbers -= 1;
      return el;
    })
    .filter((el) => el.numbers > 0);

  localStorage.setItem("cards", JSON.stringify(cards));
  badge.textContent = cards.length;
  showCartProducts();
}
if (karzinkaCards) {
  showCartProducts();
}
