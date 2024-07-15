import Link from "next/link"
import Menu from "../components/Menu"

function Header() {
  return (
    <header className={"w-full h-32 border-b shadow-sm flex flex-col items-center justify-between box-border"}>
        <div className={"menu-bar"}>
          <div className="text-2xl">
            <Link href={"/"}>LOog</Link>
          </div>
          <div>
            <Menu />
          </div>
        </div>
        <nav>
          <ul className={"w-layout mx-auto flex gap-10 font-semibold items-center justify-center h-12"}>
            <li>Erkek</li>
            <li>Kadın</li>
            <li>Aksesuar</li>
            <li>Ev / Yaşam</li>
            <li>Takı</li>
            <li>Outlet</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header