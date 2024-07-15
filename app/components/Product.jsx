"use client"

import Image from "next/image";
import Link from "next/link";
import { useBasket } from "../contexts/modules/BasketContext";

function Product({product}) {

    const { addToBasket } = useBasket()
    
    return (
            <div className={"w-full flex justify-start border rounded-t-sm items-center flex-col bg-white"}>
                <Link href={"/product/"+product.id}>
                    <div className={"w-full h-56 rounded-t-sm overflow-hidden cursor-pointer group"}>
                    <Image 
                        src={product.image} 
                        width={150} height={250} 
                        alt={product.title}
                        className={"w-full h-full object-contain scale-75 group-hover:scale-90 duration-200"}
                    />
                    </div>
                </Link>

                <div className={"w-full h-36 py-2 px-4 flex flex-col gap-2"}>
                    <Link href={"/product/"+product.id}>
                        <h3 className={"text-sm h-20"}>{product.title}</h3>
                    </Link>
                    <div className={"flex justify-between items-center"}>
                        <h4 className={"text-lg"}>{product.price} $</h4>
                        <button onClick={() => addToBasket(product)} className={"text-sm font-semibold bg-orange-500 text-white px-4 py-2 rounded-sm"}>Sepete Ekle</button>
                    </div>
                </div>
            </div>
    )
}

export default Product