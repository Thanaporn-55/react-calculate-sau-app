import bmi from "./../assets/bmi.png";
import { Link } from "react-router";
import { useState } from "react";

export default function Bmi() {

  // เก็บค่าน้ำหนักและส่วนสูง
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  // เก็บผลลัพธ์ BMI
  const [result, setResult] = useState("0.00");

  // ฟังก์ชันคำนวณ BMI
  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === "" || height === "") {
      alert("กรุณาป้อนน้ำหนักและส่วนสูง");
      return;
    }

    // แปลงส่วนสูงจากเซนติเมตรเป็นเมตร
    const heightMeter = height / 100;

    // คำนวณ BMI
    const bmiResult = weight / (heightMeter * heightMeter);

    // แสดงผลทศนิยม 2 ตำแหน่ง
    setResult(bmiResult.toFixed(2));
  };

  // ฟังก์ชันยกเลิก / ล้างข้อมูล
  const resetBMI = () => {
    setWeight("");
    setHeight("");
    setResult("0.00");
  };

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

        {/* ส่วนของ Form */}
        <form className='w-full flex flex-col' onSubmit={calculateBMI}>

          <label className='font-kanit font-bold'>
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 shadow-sm'
            placeholder="กรอกน้ำหนัก"
          />

          <label className='font-kanit font-bold mt-5'>
            ป้อนส่วนสูง (เซนติเมตร)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 shadow-sm'
            placeholder="กรอกส่วนสูง"
          />

          {/* ปุ่มคำนวณ */}
          <button
            type="submit"
            className='bg-blue-600 hover:bg-blue-800 cursor-pointer text-white font-bold p-2 mt-5 font-kanit rounded-sm'
          >
            คํานวณ
          </button>

          {/* ปุ่มยกเลิก */}
          <button
            type="button"
            onClick={resetBMI}
            className='bg-gray-400 hover:bg-gray-600 cursor-pointer text-black font-bold p-2 mt-2 font-kanit rounded-sm'
          >
            รีเซ็ต
          </button>

        </form>

        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>
            ค่า BMI ที่คำนวณได้
          </p>

          <p className='font-kanit font-bold mt-5 text-blue-600'>
            {result}
          </p>
        </div>

        {/* ลิงก์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className='w-full text-center font-kanit font-bold mt-2 p-2 rounded-sm bg-gray-400 text-black cursor-pointer'
        >
          กลับไปหน้าหลัก
        </Link>

      </div>
    </>
  );
}