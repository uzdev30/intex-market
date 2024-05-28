import React, { useRef,useState } from 'react';
import { X } from 'lucide-react';
import menuImg from "../../assets/images/menuImg.png";
import modalImg1 from "../../assets/images/modalImg1.svg";
import modalImg2 from "../../assets/images/modalImg2.svg";
import modalImg3 from "../../assets/images/modalImg3.svg";
import modalImg4 from "../../assets/images/modalImg4.svg";
import modalImg5 from "../../assets/images/modalImg5.svg";
import modalImg6 from "../../assets/images/modalImg6.svg";
import axios from 'axios';




function Updata({onClose,setData}){
const modalRef = useRef() ;
const inputRef = useRef(null)
const inputRef2 = useRef()
const inputRef3 = useRef()
const inputRef5 = useRef()
const [valueValidat,setValueValidat] = useState(false)
const [valueValidat2,setValueValidat2] = useState(false)
const [valueValidat3,setValueValidat3] = useState(false)
const [valueValidat4,setValueValidat4] = useState(false)
const [valueValidat5,setValueValidat5] = useState(false)
const [valueValidat6,setValueValidat6] = useState(false)




const closeModal = (e) => {
    if(modalRef.current === e.target) {
        onClose()
    }
}

const [selectedFile, setSelectedFile] = useState(null);

const handleClickImg = () => {
    inputRef.current.click();
}

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
        setSelectedFile(e.target.result);

        inputRef2.current.style.display = 'none'
        inputRef3.current.style.display = 'none'
    };
        reader.readAsDataURL(file);
    }
};


const [value,setValue] = useState({Изображение: '' ,Цена: '' , Рамка:'' , Размер:'',Количество:'', Глубина:''})
const handleSubmit = (e) => {
    e.preventDefault()

    if(value.Цена == "") {
        setValueValidat(true)
    }if(value.Рамка == "") {
        setValueValidat2(true)
    }if(value.Размер == "") {
        setValueValidat3(true)
    }if(value.Количество == "") {
        setValueValidat4(true)
    }if(value.Глубина == "") {
        setValueValidat5(true)
    }if(value.Цена == "") {
        setValueValidat6(true)
    }else {
        onClose()
        axios.post('http://localhost:3000/data',{
            "Изображение":value.Изображение,
            "Цена":value.Цена,
            "Рамка":value.Рамка,
            "Размер":value.Размер,
            "Количество":value.Количество,
            "Глубина":value.Глубина
        }).then((res) => {
            setValue({Изображение: '' ,Цена: '' , Рамка:'' , Размер:'',Количество:'', Глубина:''})
            axios.get('http://localhost:3000/data')
            .then(res => {
                setData(res.data)
            })
        })
    }

}

return (
    <div ref={modalRef} onClick={closeModal} className=' absolute inset-0  w-full h-[4000px]  bg-[#000000] bg-opacity-5 backdrop-blur-sm flex justify-center '>
        <div className="mt-10 flex-col gap-5 w-[1130px] h-[1177px] shadow-lg shadow-indigo-500/40 bg-white z-10 rounded-[35px]">
            <button onClick={onClose} className='ml-[1070px] mt-[30px]'><X size={30}/></button>
            <div className="">
                <form action="">
                    <div onChange={handleFileChange}  className='rounded-[21px] shadow-xl ml-56 translate-cdy-[-16px]  flex-none bg-[white]  w-[691px] h-[316px] border-[0.87px] border-dashed  border-[#3A3A3A]' onClick={handleClickImg}>
                        <div value={value.Изображение} className="flex ml-40 mt-32">
                            <img ref={inputRef2} src={modalImg6} alt="img" />
                            <span ref={inputRef3}  className='black ml-7 text-[#898989] font-normal text-[30px]'>Выберите изображение</span>
                        </div>
                        <input value={value.Изображение} onChange={(e) => setValue({...value, Изображение:e.target.value})} ref={inputRef} type="file" style={{display:"none"}} accept="image/*"   placeholder='Выберите изображение' />
                        {selectedFile && <img   src={selectedFile} onChange={(e) => setValue({...value, Изображение:e.target.value})} alt="Yuklangan rasm" className="w-[612px] h-[228px] mt-[-80px] ml-[40px] absolute" />} <br />
                    </div>
                        {valueValidat6 && <p className='text-[red] ml-60 mt-2'>Ma'lumotni to'ldiring</p>}

                    <div className="flex mt-7 ml-5">
                    <div className="">
                    <div className="w-[425px] flex ml-20">
                        <img className='w-[28px] h-[27px] mt-9' src={menuImg} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Категории</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <select className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории">
                                    <option   value="">Каркасные</option>
                                    <option value="">Надувные</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-[425px] mt-5 flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg1} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Стартая цена (сум) </label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Цена} onChange={(e) => setValue({...value, Цена:e.target.value})} type='number' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/> 
                            </div>
                                {valueValidat && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] mt-2 flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg2} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Рамка</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Рамка} onChange={(e) => setValue({...value, Рамка:e.target.value})} type='text' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/> 
                            </div>
                            {valueValidat2 && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] mt-2 flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg3} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Размер (м)</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Размер}  onChange={(e) => setValue({...value, Размер:e.target.value})} type='number' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/>
                            </div>
                            {valueValidat3 && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg4} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Статус</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <select className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории">
                                    <option   value="">Рекомендуем</option>
                                    <option value="">Мы  не рекомендуем</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="">
                    <div className="w-[425px] flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg5} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Количество</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Количество}  onChange={(e) => setValue({...value, Количество:e.target.value})} type='number' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/>
                            </div>
                            {valueValidat4 && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] flex ml-20 mt-4">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg1} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Цена со скидкой (сум) </label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Цена}  type='number' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/>
                            </div>
                            {valueValidat && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] flex ml-20 mt-4">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg2} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Рамка на узбекском</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Рамка} type='text' className='w-[379px] text-[##545454] font-normal  text-[28px]'  name="" id="Категории"/>
                            </div>
                            {valueValidat2 && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    <div className="w-[425px] flex ml-20">
                        <img className='w-[28px] h-[27px] mt-12' src={modalImg3} alt="img" />
                        <div className="ml-4">
                            <label className='text-[#898989] font-normal  text-[23px]' htmlFor="" id='Категории'>Глубина(см)</label><br />
                            <div className="w-[379px] text-[black] border-b-[2px] pb-2 ">
                                <input value={value.Глубина}  onChange={(e) => setValue({...value, Глубина:e.target.value})} type='number' className='w-[379px] text-[##545454] font-normal  text-[28px]' name="" id="Категории"/>
                            </div>
                            {valueValidat5 && <p className='text-[red]'>Ma'lumotni to'ldiring</p>}
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="">
                            <div className="w-[915px] ml-24 mt-4 text-[black] border-b-[2px] pb-2 ">
                                <select className='w-[915px] text-[#898989] font-normal  text-[28px]' name="" id="Категории">
                                    <option   value="">Комплектация</option>
                                    <option value="">Металлический</option>
                                    <option value="">Прямоугольная</option>
                                    <option value="">Рамка призмы</option>
                                </select>
                            </div>
                            <div className="w-[915px] ml-24 mt-2 text-[black] border-b-[2px] pb-2 ">
                                <select className='w-[915px] text-[#898989] font-normal  text-[28px]' name="" id="Категории">
                                    <option   value="">Комплектация на узбекском</option>
                                    <option value="">Metall</option>
                                    <option value="">To'rtburchak</option>
                                    <option value="">Prizma ramkasi</option>
                                </select>
                            </div>
                            <button ref={inputRef5} onClick={handleSubmit} className='w-[237px] h-[47px] bg-[#009398] rounded-[25px] text-white font-bold text-xl font-sans ml-96 mt-5'>Добавить</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Updata