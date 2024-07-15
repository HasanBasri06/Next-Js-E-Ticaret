"use client"

function error() {
  return (
    <div className={"w-full h-[500px] flex justify-center items-center"}>
        <div className="flex flex-col text-center gap-10">
            <h1 className={"text-5xl font-extrabold"}>Aradığınız Sayfa Bulunamadı</h1>
            <h3 className={"text-3xl font-semibold text-gray-400"}>404 Not Found</h3>
        </div>
    </div>
  )
}

export default error