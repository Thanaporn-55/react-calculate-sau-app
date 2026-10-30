import logo from "./../assets/logo.png";
import CardMenu from "./../components/CardMenu";
import bmi from "./../assets/bmi.png";
import bmr from "./../assets/bmr.png";
import car from "./../assets/car.png";
import Footer from "./../components/Footer";
import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div className='flex flex-col items-center'>
                {/* แสดงรูป */}
                <img src={logo} alt="logo" className='w-30 mt-20' />

                {/* แสดงชื่อเว็บ */}
                <p className=' font-kanit text-3xl font-bold mt-5'>
                    เครื่องคำนวณออนไลน์
                </p>
                <p className=' font-itim text-xl text-gray-700'>
                    เลือกการคำนวณที่คุณต้องการจากเมนูด้านล่าง
                </p>

                {/* แสดงเมนู 3 เมนู */}
                <div className='mt-18 flex gap-10'>
                    <Link to="/bmi">
                        <CardMenu imgShow={bmi} titleShow="BMI (ดัชนีมวลกาย)" stitleShow="คำนวณน้ำหนักและส่วนสูงว่าเหมาะสมหรือไม่" />
                    </Link>
                    <Link to="/bmr">
                        <CardMenu imgShow={bmr} titleShow="BMR (อัตราการเผาผลาญร่างกาย)" stitleShow="คำนวณอัตราการเผาผลาญที่ร่างกายต้องการ" />
                    </Link>
                    <Link to="/car">
                        <CardMenu imgShow={car} titleShow="CAR (เงินผ่อนรถต่อเงินเดือน)" stitleShow="คํานวณเงินผ่อนรถยนต์หรือรถเครื่องต่อเดือน" />
                    </Link>
                </div>

                {/* แสดง Footer */}
                <Footer />

            </div>
        </>
    )
}
