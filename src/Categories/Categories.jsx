import first from './1.png'
import second from './2.webp'
function Categories() {
    return (
        <>
            <h1>Categories</h1>
            <div className='flex bg-red-700'>
                <img src={first} alt="" />
                <img src={second} alt="" />


            </div>

        </>
    )
}

export default Categories
