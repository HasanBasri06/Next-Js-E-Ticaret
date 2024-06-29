import Image from "next/image";

function Product({product}) {
  return (
    <div className={"w-full flex justify-start border rounded-t-sm items-center flex-col bg-white"}>
        <div className={"w-full h-56 rounded-t-sm overflow-hidden cursor-pointer group"}>
        <Image 
            src={product.image} 
            width={150} height={250} 
            className={"w-full h-full object-contain scale-75 group-hover:scale-90 duration-200"}
        />
        </div>
        <div className={"w-full h-36 py-2 px-4 flex flex-col gap-2"}>
            <h3 className={"text-sm h-20"}>{product.title}</h3>
            <div className={"flex justify-between items-center"}>
                <h4 className={"text-lg"}>{product.price} $</h4>
                <button className={"text-sm font-semibold bg-orange-500 text-white px-4 py-2 rounded-sm"}>Sepete Ekle</button>
            </div>
        </div>
    </div>
  )
}

export default Product