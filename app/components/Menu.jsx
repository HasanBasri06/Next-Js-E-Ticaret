
import { IoPersonOutline } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

function Menu() {
  return (
    <div>
        <ul className={"flex gap-7"}>
            <li className={"flex gap-2 items-center"}>
              <span>Sepetim</span>
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