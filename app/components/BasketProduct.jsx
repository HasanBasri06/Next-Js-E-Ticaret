import Image from "next/image"

function BasketProduct({product}) {
  return (
    <div className="flex h-20">
        <div className={"w-1/4"}>
            <Image className="w-full h-full object-contain" src={product.image} alt={product.title} width={150} height={150} />
        </div>
        <div className="flex flex-col w-3/4 ps-2">
            <h4 className={"text-md font-semibold text-gray-500"}>{product.title}</h4>
            <h5 className={"text-sm"}>10</h5>
            <h5 className={"text-sm"}>{product.price} $</h5>
        </div>
    </div>
  )
}

export default BasketProduct