import StripeCheckout from "react-stripe-checkout";
import {useNavigate} from 'react-router-dom'
import './Payment.css'
import { useEffect } from "react";
const Payment = (props) => {
    useEffect(()=>{
        props.setNavShow(false)
    },[props.setNavShow])
    const navigate=useNavigate();
    const handleToken = (token)=>{
    navigate('/Success')     
    };

return(
    <div className="payment">
        <StripeCheckout
         stripeKey='pk_test_51KEBUoSJBi3oJd6U4NZ8p125Y9i63w1fgOGXbVUt9adywov0gWnuUGL5Vfxn4k1ITne9l7kcfpYHfuof5GS7OvL500QcMo0ccE'
        token={handleToken}
        billingAddress
        shippingAddress={false}
        name='Diwi Health Studio'
        description="Appointment" // the pop-in header subtitle
        image='https://png.pngtree.com/png-vector/20190630/ourmid/pngtree-dental-logo-design-creative-dentist-logo-dental-clinic-creative-company-png-image_1523025.jpg'
        amount={250}
        currency='INR'
        email='diwiHealthStudio@gmail.com'></StripeCheckout>
    </div>
)
}

export default Payment;