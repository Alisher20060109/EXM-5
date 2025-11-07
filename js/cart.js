let disCards = document.querySelector(".dis-cards");
let filterPuraducts = products.filter((el) => el.discount > 0);
let sliceProducts = filterPuraducts.slice(
  filterPuraducts.length - 4,
  filterPuraducts.length
);

let cards = JSON.parse(localStorage.getItem("cards") || "[]");
localStorage.setItem("cards", JSON.stringify(cards));
let badge = document.getElementById("badge");
badge.textContent = cards.length;

function showProducts(content, data) {
  content.innerHTML = "";
  data.map((el) => {
    let productInCart = cards.find((c) => c.id === el.id);

    content.innerHTML += `
     <div id="${el.id}" class=" max-w-[900px] w-full p-[10px] flex ">
        <div class="relative max-w-[900px] h-[90px]  p-[10px] w-full  flex gap-[40px] justify-between items-center rounded-[5px] hover:translate-y-[2px] transition-[900ms] shadow-lg">
            <img class="w-[90px] overflow-visible" src="${el.images[0]}" alt="${
      el.name
    }">
            
        <div class="flex flex-col justify-between ">
        
        <h2 class="text-[16px] text-[#414141]  line-clamp-[2]">${
          el.description
        }</h2>
            
            <div>
                <h3 class="text-[#414141] text-[18px]">$${el.price}</h3>
                <p class="text-[#BFBFBF] text-[12px]">за шт.</p>
            </div>
        </div>
       

        ${
          productInCart
            ? `
            <div class="grid grid-cols-3 h-[40px] rounded-[15px] w-[200px] ">
                <button onClick="decrease(${el.id})" class="w-full bg-[#FF6633] text-white text-[22px] font-bold flex items-center justify-center">
                    -
                </button>
                <span class="w-full bg-[white] text-[black] text-[22px] font-bold flex items-center justify-center">
                    ${productInCart.numbers}
                </span>
                <button onClick="increase(${el.id})" class="w-full bg-[#FF6633] text-white text-[22px] font-bold flex items-center justify-center">
                    +
                </button>
            </div>
        `
            : `
            <button onClick="addToCart(${el.id})"
            class="w-[200px]  h-[40px] rounded-[5px] border-2 border-[#70C05B] cursor-pointer hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-400">В корзину</button>
        `
        }
     </div>`;
  });
}

showProducts(disCards, sliceProducts);

function addToCart(id) {
  let item = products.find((el) => el.id === id);
  let exist = cards.find((c) => c.id === id);

  if (!exist) {
    item.numbers = 1;
    cards.push(item);
  } else {
    exist.numbers += 1;
  }

  localStorage.setItem("cards", JSON.stringify(cards));
  badge.textContent = cards.length;
  showProducts(disCards, sliceProducts);
}

function increase(id) {
  cards = cards.map((el) => {
    if (el.id === id) {
      el.numbers += 1;
    }
    return el;
  });

  localStorage.setItem("cards", JSON.stringify(cards));
  badge.textContent = cards.length;
  showProducts(disCards, sliceProducts);
}

function decrease(id) {
  cards = cards
    .map((el) => {
      if (el.id === id) {
        el.numbers -= 1;
      }
      return el;
    })
    .filter((el) => el.numbers > 0);

  localStorage.setItem("cards", JSON.stringify(cards));
  badge.textContent = cards.length;
  showProducts(disCards, sliceProducts);
}

let nevCards = document.querySelector(".nav-cards");
let nevPuraducts = products.filter((el) => el.discount > 0);
let slvPuraducts = nevPuraducts.slice(
  nevPuraducts.length - 8,
  nevPuraducts.length - 4
);


