import car from "./../assets/car.png";
import { Link } from "react-router";
import { useState } from "react";

export default function Car() {

  // เก็บข้อมูล
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [interest, setInterest] = useState("");
  const [downPayment, setDownPayment] = useState("15");
  const [months, setMonths] = useState("24");

  // เก็บผลลัพธ์
  const [result, setResult] = useState("0.00");

  // ฟังก์ชันคำนวณค่างวดรถ
  const calculateCar = (e) => {
    e.preventDefault();

    if (name === "" || price === "" || interest === "") {
      alert("กรุณาป้อนข้อมูลให้ครบ");
      return;
    }

    // คำนวณเงินดาวน์
    const downPaymentAmount = price * (downPayment / 100);

    // คำนวณยอดจัดไฟแนนซ์
    const financeAmount = price - downPaymentAmount;

    // คำนวณดอกเบี้ยทั้งหมด
    const totalInterest =
      financeAmount * (interest / 100) * (months / 12);

    // คำนวณยอดรวมที่ต้องผ่อน
    const totalPayment = financeAmount + totalInterest;

    // คำนวณค่างวดต่อเดือน
    const monthlyPayment = totalPayment / months;

    setResult(monthlyPayment.toFixed(2));
  };

  // ฟังก์ชันรีเซ็ตข้อมูล
  const resetCar = () => {
    setName("");
    setPrice("");
    setInterest("");
    setDownPayment("15");
    setMonths("24");
    setResult("0.00");
  };

  return (
    <>
      <div className='w-200 mt-10 mx-auto border-2 border-gray-100 rounded-2xl shadow-2xl flex flex-col items-center p-10'>

        {/* แสดงชื่อคำนวณ */}
        <p className='font-kanit text-3xl font-bold text-center'>
          Car Installment Calculator
        </p>

        <p className='font-kanit text-lg text-gray-700 text-center'>
          คำนวณ Car Installment
        </p>

        {/* แสดงรูป */}
        <img src={car} alt="car" className='mt-10 w-50' />

        {/* ส่วนของ Form */}
        <form
          className='w-full flex flex-col'
          onSubmit={calculateCar}
        >

          {/* ชื่อผู้คำนวณ */}
          <label className='font-kanit font-bold mt-5'>
            ชื่อผู้คำนวณ
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* ราคารถ */}
          <label className='font-kanit font-bold mt-5'>
            ราคารถ (บาท)
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* ดอกเบี้ย */}
          <label className='font-kanit font-bold mt-5'>
            ดอกเบี้ยต่อปี (%)
          </label>

          <input
            type="number"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className='border border-gray-300 rounded-md p-2 shadow-sm'
          />

          {/* เงินดาวน์ */}
          <label className='font-kanit font-bold mt-5'>
            เงินดาวน์ (%)
          </label>

          <div className='flex items-center gap-2 mt-2 font-kanit'>

            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="downPayment"
                value="15"
                checked={downPayment === "15"}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              15%
            </label>

            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="downPayment"
                value="20"
                checked={downPayment === "20"}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              20%
            </label>

            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="downPayment"
                value="25"
                checked={downPayment === "25"}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              25%
            </label>

            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="downPayment"
                value="30"
                checked={downPayment === "30"}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              30%
            </label>

            <label className='flex items-center gap-1'>
              <input
                type="radio"
                name="downPayment"
                value="35"
                checked={downPayment === "35"}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              35%
            </label>

          </div>

          {/* จำนวนเดือนที่ผ่อน */}
          <label className='font-kanit font-bold mt-5'>
            จำนวนเดือนที่ผ่อน
          </label>

          <select
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className='border border-gray-300 rounded-md p-2 shadow-sm'
          >
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          {/* ปุ่มคำนวณและรีเซ็ต */}
          <div className='flex gap-3 mt-5'>

            <button
              type="submit"
              className='w-1/2 bg-blue-600 hover:bg-blue-800 cursor-pointer text-white font-bold p-2 font-kanit rounded-lg shadow-md'
            >
              คำนวณ
            </button>

            <button
              type="button"
              onClick={resetCar}
              className='w-1/2 bg-gray-300 hover:bg-gray-400 cursor-pointer text-black font-bold p-2 font-kanit rounded-lg shadow-md'
            >
              ล้างข้อมูล
            </button>

          </div>

        </form>

        {/* ส่วนแสดงผล */}
        <div className='flex items-center justify-center mt-5 gap-2'>
          <p className='font-kanit font-bold mt-5'>
            ผ่อนชำระต่อเดือน:
          </p>

          <p className='font-kanit font-bold mt-5 text-blue-600'>
            {Number(result).toLocaleString("th-TH")} บาท
          </p>
        </div>

        {/* ลิงก์กลับไปหน้าหลัก */}
        <Link
          to="/"
          className='w-full text-center font-kanit font-bold mt-5 p-2 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer'
        >
          กลับหน้าหลัก
        </Link>

      </div>
    </>
  );
}