"use client"
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";
import { useBasket } from "../contexts/modules/BasketContext";

function Menu() {
  const { basketLength } = useBasket()

  return (
    <div>
      <ul className={"flex gap-7"}>
            <li className={"flex gap-2 items-center"}>
              <div className={"flex gap-2 items-center"}>
                <div className={"w-5 h-5 flex justify-center items-center text-white rounded-full text-xs font-semibold bg-orange-500"}>
                  {basketLength}
                </div>
                <span>Sepetim</span>
              </div>
              <SlBasket />
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