import Image from "next/image"
import { Suspense } from "react"
import { SlBasket } from "react-icons/sl"

async function getProduct(id) {
    const response = await fetch('https://fakestoreapi.com/products/'+id)
    const resData = response.json()    

    return resData 
}

async function page({params}) {

    const useProduct = await getProduct(params.id)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className={"flex py-24"}>
                <div className="w-2/4 flex justify-center">
                    <Image 
                        src={useProduct.image}
                        width={400}
                        height={400} />
                </div>
                <div className="w-2/4 flex flex-col gap-4 ps-10">
                    <h1 className={"text-2xl font-bold"}>{useProduct.title}</h1>
                    <p className={"text-md"}>{useProduct.description}</p>
                    <h3>quantity</h3>
                    <div className={"flex gap-10 mt-10"}>
                        <button className={"w-32 rounded-md text-md font-semibold py-3 bg-orange-500 text-white"}>Hemen Al</button>
                        <button className={"w-32 rounded-md text-md flex items-center gap-4 font-semibold py-3 bg-white text-orange-500"}>
                            <span>Sepete Ekle</span>
                            <SlBasket />
                        </button>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}

export default page