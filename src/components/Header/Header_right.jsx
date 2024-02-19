import { Link } from 'react-router-dom';
import CartImg from './../../assets/shopping-cart.png'

function Header_right() {

    return(
        <div className="mr-[20px]">
<div className="flex gap-[20px]">
    <Link to='Login'><h2>login</h2></Link>
    <div className='h-[20px] w-[20px]'><img src={CartImg} alt="img" /></div>
    
</div>

        </div>
    )
    
}

export default Header_right;