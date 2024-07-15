"use client"
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useBasket } from "../contexts/modules/BasketContext";
import BasketProduct from "./BasketProduct";

function Menu() {
  const { basketLength, basketList } = useBasket()
  const [basketModal, setBasketModal] = useState(false)

  const handleBaketListModal = () => {
    if (basketLength > 0) {
      setBasketModal(!basketModal)
    }
  }

  return (
    <div>
      <ul className={"flex gap-7"}>
            <li className={"flex flex-col gap-2 items-end relative"}>
              <div className={"flex gap-2 items-center cursor-pointer"} onClick={handleBaketListModal}>
                { basketLength > 0 && (
                  <div className={"w-5 h-5 flex justify-center items-center text-white rounded-full text-xs font-semibold bg-orange-500"}>
                    {basketLength}
                  </div>
                ) }
                <span>Sepetim</span>
                <SlBasket />
              </div>
              {basketModal && (
                <div id="basketModal" className={"w-80 duration-500 h-auto bg-white absolute mt-10 z-50 rounded-md shadow-md border border-gray-200 -right-10 p-5"}>
                  <div className="flex flex-col space-y-7">
                    {basketList.map(product => (
                        <div key={product.id}>
                          <BasketProduct product={product} />
                        </div>
                      )
                    )}
                  </div>
                  <div className="flex gap-4 mt-5">
                    <button className="flex-1 h-10 font-medium rounded-md text-white bg-green-500 text-sm">Sepete Git</button>
                    <button className="flex-1 h-10 font-medium rounded-md text-white bg-orange-500 text-sm">Alışverişi Tamamla</button>
                  </div>
                </div>
              )}
            </li>
            <li className={"flex gap-2 items-center"}>
              <span>Giriş yap</span>
              <IoPersonOutline />
            </li>
        </ul>
    </div>
  )
}

export default Menu