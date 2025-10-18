let disCards = document.querySelector(".dis-cards");
let filterPuraducts = products.filter((el) => el.discount > 0);
let sliceProducts = filterPuraducts.slice(
  filterPuraducts.length - 4,
  filterPuraducts.length
);

sliceProducts.map((el) => {
  disCards.innerHTML += `
     <a href="../pages/singl.html?id=${
       el.id
     }" class=" max-w-[400px] w-full p-[10px] ">
                        <div class="relative max-w-[400px]  w-full ">
                            <img class="w-full h-[300px]" src="${
                              el.images[0]
                            }" alt="${el.name}">
                            <h3
                                class="bg-[#FF6633]  w-[50px] text-center cursor-pointer text-[#FFFFFF] text-[18px] absolute  bottom-2 left-2 ">${
                                  el.discount
                                }%</h3>
                        </div>
                        <div class="flex justify-between pt-[10px] pb-[10px]">
                            <div>
                                <h3 class="text-[#414141] text-[18px]">$${
                                  el.price - (el.price * el.discount) / 100
                                }</h3>
                                <p class="text-[#BFBFBF] text-[12px]">С картой</p>
                            </div>
                            <div>
                                <h3 class="text-[#414141] text-[18px]">$${
                                  el.price
                                }</h3>
                                <p class="text-[#BFBFBF] text-[12px]">Обычная</p>
                            </div>
                            
                        </div>
                        <p class="text-[18px] text-[#FF6633]">${el.name}</p>
                        <h2 class="text-[16px] text-[#414141] pb-[10px] line-clamp-[2]">${
                          el.description
                        }</h2>
                        ${
                          el.rating === 5
                            ? `
                              <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">

                        </div>
                            `
                            : el.rating === 4.5
                            ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">

                        </div>`
                            : el.rating === 4
                            ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            

                        </div>`
                            : el.rating === 3.5
                            ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">
                        </div>`
                            : el.rating === 3
                            ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                        </div>`
                            : el.rating === 2.5
                            ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">

                        </div>`
                            : el.rating === 2
                        }
                        <button
                            class="w-full  h-[40px] rounded-[5px] border-2 border-[#70C05B] cursor-pointer hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-400">В
                            корзину</button>
                    </a>
                    `;
});

let nevCards = document.querySelector(".nav-cards");
let nevPuraducts = products.filter((el) => el.discount > 0);
let slvPuraducts = nevPuraducts.slice(
  nevPuraducts.length - 8,
  nevPuraducts.length - 4
);

slvPuraducts.map((el) => {
  nevCards.innerHTML += `
    <div class="  px-[10px] max-w-[400px] w-full ">
                            <div class="max-w-[400px] ">
                                <img class="w-full h-[300px]" src="${
                                  el.images[0]
                                }" alt="">
                                <h3 class="text-[18px] text-[#414141] pb-[10px] pt-3">$${
                                  el.discount
                                }</h3>
                                <p class="text-[16px] text-[#414141] pb-[7px] line-clamp-[2]">${
                                  el.description
                                }</p>
                                <div class="flex items-center gap-1 pb-[10px]">
                                         ${
                                           el.rating === 5
                                             ? `
                              <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">

                        </div>
                            `
                                             : el.rating === 4.5
                                             ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">

                        </div>`
                                             : el.rating === 4
                                             ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            

                        </div>`
                                             : el.rating === 3.5
                                             ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">
                        </div>`
                                             : el.rating === 3
                                             ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                        </div>`
                                             : el.rating === 2.5
                                             ? `  <div class="flex items-center gap-1 pb-[10px]">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-full.svg" alt="">
                            <img class="max-w-[20px]" src="./imgs/star-half.svg" alt="">

                        </div>`
                                             : el.rating === 2
                                         }
                                </div>
                                <button
                                    class="w-full  h-[40px] rounded-[5px] border-2 border-[#70C05B] cursor-pointer hover:bg-[#FF6633] hover:border-[#FF6633] transition duration-400">В
                                    корзину</button>
                            </div>
                        </div>
    `;
});

let loading = document.getElementById("loading");
window.addEventListener("load", function () {
  loading.classList.add("hidden");
});

let togglBtn = document.getElementById("toggle-btn");
let resNav = document.getElementById("res-nav");

togglBtn.addEventListener("click", function () {
  resNav.classList.toggle("translate-y-[-100%]");
});

//sorch

let sorchCards = document.getElementById("sorchCards");

let isExistProduct = false;
let sorchInput = document.getElementById("input");


 isExistProduct ?  sorchCards.classList.remove("hidden") : sorchCards.classList.add("hidden");
sorchInput.addEventListener("input", function (e) {
  sorchCards.innerHTML = "";
  sorchCards.classList.remove("h-[300px]");
  sorchCards.classList.remove("h-[70px]")
  let inputValue = e.target.value;
  let res = products.filter((el) =>
    el.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  inputValue ? isExistProduct = true : isExistProduct = false
  isExistProduct ?  sorchCards.classList.remove("hidden") : sorchCards.classList.add("hidden"); 

  res.length > 0 ? res.map((el) => {
    sorchCards.innerHTML += `
     <div class="flex gap-[25px] border-[2px] border-gray-300 p-[10px] cursor-pointer bg-white">
                            <img class="object-cover rounded-md" width="60px" src="${el.images[0]}" alt="">
                            <div>
                                <h1 >${el.name}</h1>
                                <p class="line-clamp-[1] text-[16px]">${el.description}.</p>
                            </div>
                        </div>`;
  }) :  sorchCards.innerHTML = "Bunday maxsulot topilmadi iltmos xatoyingizni to'g'rlang";

  res.length > 0 ? sorchCards.classList.add("h-[300px]") : sorchCards.classList.add("h-[70px]")
  
});


//savat 


