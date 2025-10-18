let params = new URLSearchParams(window.location.search);
const id = params.get("id");
let singlePro = document.querySelector(".singlePro");

let singlProduct = products.filter((el) => el.id == id);
console.log(singlProduct);

singlProduct.map((el) => {
  singlePro.innerHTML += `
      <div class="grid grid-cols-2 items-center justify-between gap-[30px]">
                            <div class="flex items-center gap-4 justify-between  relative">
                                <div class="flex flex-col gap-4">
                                   ${el.images.map((img) => {
                                     return ` <img class="max-w-[100px] w-full" src="${img}" alt="">
                                    `;
                                   })}
                                </div>
                                <div class="relative">
                                    <img class="max-w-[500px] w-full" src="${
                                      el.images[0]
                                    }" alt="">
                                    <h1
                                        class="absolute top-3 right-3 text-[18px] bg-[#FF6633] px-3 py-1 text-white rounded-lg">
                                        ${el.discount}%
                                    </h1>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p>$${el.price}</p>
                                        <p class="text-[12px] text-[#8F8F8F]">Обычная цена</p>
                                    </div>
                                    <div>
                                        <p>$${
                                          el.price -
                                          (el.price * el.discount) / 100
                                        }</p>
                                        <p class="text-[12px] text-[#8F8F8F]">С картой Северяночки</p>
                                    </div>

                                </div>
                                <div class="flex justify-center items-center pt-[20px]">
                                    <button
                                        class="bg-[#FF6633] flex items-center gap-4 cursor-pointer max-w-[300px] w-full text-center h-[50px] rounded-[5px] px-[70px] "><img
                                            src="../imgs/shopping-cart.png" alt=""> В корзину</button>
                                </div>
                                <ul class="flex flex-col pt-[40px]">
                                    <li class="flex items-center gap-[123px]">
                                        <p class="text-[12px] text-[#414141]" ">Бренд</p>
                                    <p class=" text-[12px] text-[#414141]">ПРОСТОКВАШИНО</p>
                                    </li>
                                    <li class="flex items-center gap-[30px] ">
                                        <p class="text-[12px] text-[#414141]">Страна производителя</p>
                                        <p class="text-[12px] text-[#414141]">Россия</p>
                                    </li>
                                    <li class="flex items-center gap-[102px] ">
                                        <p class="text-[12px] text-[#414141]">Упаковка</p>
                                        <p class="text-[12px] text-[#414141]">180 г</p>
                                    </li>
                                </ul>
                            </div>
                        </div>`;
});

//ishlamayabdi tuglniki
// let togglBtn = document.getElementById("toggle-btn");
// let resNav = document.getElementById("res-nav");


// togglBtn.addEventListener("click", function(){
//   resNav.classList.toggle("translate-y-[-100%]")
// })