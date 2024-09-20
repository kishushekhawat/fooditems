import { useState } from "react";
function Card({ desc, img, title, type, ratings, price }) {
    let [showBadge, setBadge] = useState(false)
    const onClickHandler = () => {
        if (price >= 250) setBadge(true);
        else setBadge(false);
    }
    return (
        <>
            <div className="relative" onClick={onClickHandler}>
                <div className="border p-2 rounded-xl w-[400px] m-4 "

                >
                    <div className="relative">
                        <img className="rounded-xl" src={img} alt="" />
                        {
                            ratings >= 4.5 ? <div className="absolute bottom-0 m-2 px-2 py-2 bg-green-50 text-green-900 rounded-full text-sm">Best Seller</div> : ""
                        }

                    </div>
                    <div className="flex justify-between items-center">
                        <p className="mt-2">{title}</p>
                        <span className={type == 'veg' ? `h-2 w-2 rounded-full bg-green-600 ` : "h-2 w-2 rounded-full bg-red-600"}></span>
                    </div>
                    <p className=" text-sm-2 text-slate-600 text-md">{desc}</p>
                </div>


                {

                    showBadge && <div className="absolute rounded-xl top-8 right-8 border bg-orange-100 font-bold p-2 text-orange-500">Free Delivery </div>

                }

            </div >

        </>
    )
}
export default Card;  