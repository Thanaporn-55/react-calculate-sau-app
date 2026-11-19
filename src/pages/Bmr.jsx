import bmr from "./../assets/bmr.png";
import { Link } from "react-router";
import { useState } from "react";

export default function Bmr() {

  // เก็บข้อมูล
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");

  // เก็บผลลัพธ์
  const [result, setResult] = useState("0.00");

  // ฟังก์ชันคำนวณ BMR
  const calculateBMR = (e) => {
    e.preventDefault();

    if (weight === "" || height === "" || age === "") {
      alert("กรุณาป้อนข้อมูลให้ครบ");
      return;
    }

    let bmrResult;

    if (gender === "male") {
      // สูตรสำหรับผู้ชาย
      bmrResult =
        66 +
        (13.7 * weight) +
        (5 * height) -
        (6.8 * age);
    } else {
      // สูตรสำหรับผู้หญิง
      bmrResult =
        665 +
        (9.6 * weight) +
        (1.8 * height) -
        (4.7 * age);
    }

    setResult(bmrResult.toFixed(2));
  };

  // ฟังก์ชันรีเซ็ต
  const resetBMR = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setResult("0.00");
  };

  return (
    <>
      <div className='w-200 mt-40 mx-auto border-2 border-gray-100 rounded-2xl shadow-2xl flex flex-col items-center p-15'>

        {/* แสดงชื่อคำนวณ */}
        <p className='font-kanit text-3xl font-bold text-center'>
          BMR Calculator
        </p>

        <p className='font-kanit text-lg text-gray-700 text-center'>
          คำนวณ BMR
        </p>

        {/* แสดงรูป */}
        <img src={bmr} alt="bmr" className='mt-10 w-30' />

        {/* ส่วนของ Form */}
        <form
          className='w-full flex flex-col'
          onSubmit={calculateBMR}
        >

          {/* น้ำหนัก */}
          <label className='font-kanit font-bold'>
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>

          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* ส่วนสูง */}
          <label className='font-kanit font-bold mt-5'>
            ป้อนส่วนสูง (เซนติเมตร)
          </label>

          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* อายุ */}
          <label className='font-kanit font-bold mt-5'>
            ป้อนอายุ (ปี)
          </label>

          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='w-full border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* เลือกเพศ */}
          <label className='font-kanit font-bold mt-5'>
            เพศ:
          </label>

          <div className='flex flex-col mt-2 font-kanit'>

            <label className='flex items-center gap-2'>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              ชาย
            </label>

            <label className='flex items-center gap-2 mt-2'>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              หญิง
            </label>

          </div>

          {/* ปุ่มคำนวณและรีเซ็ต */}
          <div className='flex gap-3 mt-5'>

            <button
              type="submit"
              className='w-1/2 bg-blue-600 hover:bg-blue-800 cursor-pointer text-white font-bold p-2 font-kanit rounded-sm'
            >
              คำนวณ BMR
            </button>

            <button
              type="button"
              onClick={resetBMR}
              className='w-1/2 bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold p-2 font-kanit rounded-sm'
            >
              รีเซ็ต
            </button>

          </div>

        </form>

        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center mt-5 gap-5'>
          <p className='font-kanit font-bold mt-5'>
            ค่า BMR ที่คำนวณได้:
          </p>

          <p className='font-kanit font-bold mt-5 text-blue-600'>
            {result}
          </p>
        </div>

        {/* ลิงก์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className='w-full text-center font-kanit font-bold mt-5 p-2 rounded-sm bg-gray-400 text-black cursor-pointer'
        >
          กลับหน้าหลัก
        </Link>

      </div>
    </>
  );
}