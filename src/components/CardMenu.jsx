
export default function CardMenu({imgShow, titleShow, stitleShow}) {
    return (
        <>
            <div className='w-100 border-2 border-gray-200 rounded-2xl p-10 shadow-2xl flex flex-col items-center'>
                <img src={imgShow} alt="img" className='w-35' />

                <p className=' font-kanit text-xl font-bold mt-4'>
                    {titleShow}
                </p>

                <p className=' font-charm text-lg text-gray-500 mt-4 text-center'>
                    {stitleShow}
                </p>
            </div>
        </>
    )
}
