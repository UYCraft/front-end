import acc from "../assets/acc.png";
import gerabah from "../assets/gerabah_icon.png";
import kayu from "../assets/kayu.png";
import kulit from "../assets/kulit.png";
import mainan from "../assets/mainan.png";
import tekstil from "../assets/tekstil.png";


const Category = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto mt-15.5">
        <div className="flex">
            <div className="w-5 h-10 bg-black rounded-md"></div>
            <div className="text-2xl my-auto ml-4 font-semibold">Kategori</div>
        </div>
        <div className="flex justify-between items-center mt-5">
            <div className="text-3xl font-semibold">Cari berdasarkan kategori</div>
            <div className="flex items-center">
                <div>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg> 
                    </a>                    
                </div>
                <div>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>  
                    </a>                    
                </div>
            </div>
        </div>
        <div className="grid grid-cols-6 mt-15 gap-7.5">
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={gerabah} alt="Gerabah" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Gerabah</div>
                    </div>
                </div>
            </a>
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={kayu} alt="Kayu" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Kayu</div>
                    </div>
                </div>
            </a>
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={tekstil} alt="Kain dan Tekstil" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Kain dan Tekstil</div>
                    </div>
                </div>
            </a>
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={kulit} alt="Kulit" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Kulit</div>
                    </div>
                </div>
            </a>
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={acc} alt="Aksesoris" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Aksesoris</div>
                    </div>
                </div>
            </a>
            <a href="" className="flex h-36.25 w-42.5 place-content-center border border-gray-700 border-opacity-30 rounded-md hover:bg-[#E9A631] hover:text-white hover:border-opacity-0">
                <div className="flex">
                    <div className="my-auto">
                        <img src={mainan} alt="Mainan dan Hobi" className="w-14.25 h-15.5 mx-auto" />
                        <div className="font-normal mt-1 text-center">Mainan dan Hobi</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </>
  )
}

export default Category