import React, { useEffect,useState } from 'react';
import axios from 'axios';

// Images
import logo from "../../assets/images/logo2.svg";
import people from "../../assets/images/peopleImg.svg";
import search from "../../assets/images/searchImg.png";
import edit from "../../assets/images/edit_img.svg";
import dalete from "../../assets/images/dalate__img.svg";
import Modal__post from '../Modal/Modal__post';
import Updata from '../Modal/Updata';



const Admin__page2 = () => {

    const [data,setData] = useState([])
    
    const [ serchData, setSerachData ] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showModalUpdata, setShowModalUpdata] = useState(false)



    useEffect(() => {
        axios.get('http://localhost:3000/data2')
        .then(res => {
            setData(res.data)
        })
    },[])

    const heandleDalete = (id) => {
        axios.delete('http://localhost:3000/data2/' + id)
        .then(res => {
            axios.get('http://localhost:3000/data2')
            .then(res => {
                setData(res.data)
            })
        })
    }

    const heandleUpdate = (id) => {
        axios.get('http://localhost:3000/data2/' + id)
        .then(res => {
            axios.get('http://localhost:3000/data2')
            .then(res => {
                setData(res.data)
                setShowModalUpdata(true)
            })
        })
    }    
    
    
    
    return (
        <div className='w-[1480px] p-[20px] m-auto flex'>

        <div className="w-[262px] h-[1024px] bg-[white] pl-7 mt-5">
            <img className='w-[180px] h-[24px]' src={logo} alt="img" />
            <div className="font-[400] font-Source Sans text-[#B4B4C6] mt-14">Продукты</div>  
            <div className="font-[400] font-Source Sans text-[#B4B4C6] mt-2">Заказы</div>           
            <div className="font-[400] font-Source Sans text-[#B4B4C6] mt-2">Категории</div>           
            <div className="font-[400] font-Source Sans text-[#B4B4C6] mt-2">Сайт</div>           
        </div>

        <div className="bg-[#F8F8F8] mt-[-20px] pt-[32px] ml-[-20px] w-[1005px]">
            <hr className='h-[3px] bg-[#EBEBFF]  translate-y-12 ml-[-260px]' />
            <div className=" flex ">
                <a href="#" className='text-[#A6A6A6] font-[Source Sans] font-normal text-lg ml-[650px] '>Просмотр веб-сайта</a>
                <div className="h-[14px] border-[2x] bg-[#D6D6D6] w-[1px] ml-5 mt-2"></div>
                <img className='w-[18px] h-[22px] ml-5 mt-1' src={people} alt="img" />
                <a href="#" className='text-[#A6A6A6] ml-4 font-[Source Sans] font-normal text-lg'>Joe Melton</a>
            </div>
            <div className="mt-14 flex justify-around">
                <input onChange={(evt) => setSerachData (evt.target.value)} type="text" className='p-5 w-[377px] h-[64px] rounded-[30px]'  placeholder='Найти'/>
                <div className="flex  translate-x-[-220px] bg-white h-[50px] mt-[8px] w-[70px] ">
                    <div className="h-[42px] border-[2x] z-10 bg-[#D6D6D6] w-[1px] ml-5 mt-2"></div>
                    <img className='w-[24px] h-[24px] ml-4 mt-3' src={search} alt="img" />
                </div>
                <button onClick={() => setShowModal(true)} className='w-[222px] h-[64px] bg-[#009398] font-sans rounded-[29px] font-bold text-lg text-white'>+ Добавить продукт</button>
                {showModal && <Modal__post  setData={setData}   onClose={() => setShowModal(false)}/>}
            </div>
            <div className="flex justify-center">
                <div className="mr-40 mt-10 font-sans font-bold text-3xl text-[#A6A6A6]">Каркасные</div>
                <div className="mt-10 font-sans font-bold text-3xl text-[#A6A6A6]">Надувные</div>
            </div>
            <ul className="ml-[55px] w-[900px] h-[69px] mt-10 bg-white flex rounded-[30px] justify-around p-5">
                <li className="font-normal text-base font-sans">Изображение</li>
                <li className="ml-[-25px] font-normal text-base font-sans">Цена(сум)</li>
                <li className="ml-5 font-normal text-base font-sans">Количество</li>
                <li className="ml-[-20px] font-normal text-base font-sans">Рамка</li>
                <li className="ml-8  font-normal text-base font-sans">Размер(м)</li>
                <li className=" font-normal text-base font-sans">Глубина(см)</li>
                <li className="font-normal text-base font-sans">Действия</li>
            </ul>
        <ul>
            {
                data && data.filter((item) => {
                    return serchData == serchData.toLowerCase() ? item : item.Рамка.includes(serchData)
                })
                .map ((item) =>{
                    return (
                        <li className='flex mt-4 ml-14 pt-4 justify-around w-[900px] h-[69px] bg-white rounded-[30px]' >
                            <img className='w-[110px] h-[41px]' src={item.Изображение} alt="img" />
                            <div className="mt-[-10px] ml-[-20px]   w-[140px] ">
                                <s className='font-base text-xs font-sans'>1.800.000 сум</s>
                                <h2 className=' font-bold text-sm font-sans' >{item.Цена}</h2>
                            </div>
                            <h3 className=' ml-[-30px]'>{item.Количество} <br /></h3>
                            <div className='w-[138px] ml-10'>{item.Рамка}</div>
                            <div className='w-[87px] ml-[-40px]'>{item.Размер}</div>
                            <div className=''>{item.Глубина}</div>
                            <div className='flex ml-[50px] mr-2 '>

                                
                            <div onClick={() => heandleUpdate(item.id)} className=" cursor-pointer">
                                <img className='w-[22px] h-[22px] cursor-pointer mr-3' src={edit} alt="img" />
                                {showModalUpdata && <Updata setData={setData} onClose={() => setShowModalUpdata(false)}/>} 
                            </div>

                            <div onClick={() => heandleDalete(item.id)} className="">
                                <img className='w-[15px] h-[18px] cursor-pointer' src={dalete} alt="img" />
                            </div>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        </div>
        

    </div>
)
}

export default Admin__page2