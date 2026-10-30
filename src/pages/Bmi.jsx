import bmi from "./../assets/bmi.png";
import { Link } from "react-router";

export default function Bmi() {
  return (
    <>
      <div className='w-200 mt-40 mx-auto border-2 border-gray-100 rounded-2xl shadow-2xl flex flex-col items-center p-15'>

        {/* แสดงชื่อคำนวณ */}
        <p className='font-kanit text-3xl font-bold text-center'>
          BMI (ดัชนีมวลกาย)
        </p>
        <p className='font-kanit text-lg text-gray-700 text-center'>
          คำนวณค่าดัชนีมวลกาย
        </p>

        {/* แสดงรูป */}
        <img src={bmi} alt="bmi" className='mt-10 w-30' />

        {/* ส่วนของ Form ให้ผู้ใช้ป้อนเลือกคลิก */}
        <form className='w-full flex flex-col'>
          <label className='font-kanit font-bold'>ป้อนน้ำหนัก (กิโลกรัม)</label>
          <input type="number" name="" id="" className='border border-gray-500 rounded-sm p-2' />

          <label className='font-kanit font-bold mt-5'>ป้อนส่วนสูง (เซนติเมตร)</label>
          <input type="number" name="" id="" className='border border-gray-500 rounded-sm p-2' />

          <button className='bg-blue-600 hover:bg-blue-800 cursor-pointer text-white font-bold p-2 mt-5 font-kanit rounded-sm'>
            คํานวณ
          </button>

          <button className='bg-gray-400 hover:bg-gray-600 cursor-pointer text-white font-bold p-2 mt-2 font-kanit rounded-sm'>
            ยกเลิก
          </button>
        </form>

        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>ค่า BMI ที่คำนวณได้</p>
          <p className='font-kanit font-bold mt-5 text-blue-600'>0.00</p>
        </div>

        {/* ลิงก์กลับไปหน้าหลัก */}
        <Link to="/" className='w-full text-center font-kanit font-bold mt-2 p-2 rounded-sm bg-gray-400 text-white  cursor-pointer'>
        กลับไปหน้าหลัก
        </Link>
      </div>
    </>
  )
}
