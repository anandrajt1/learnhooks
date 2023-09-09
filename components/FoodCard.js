import { useState } from "react";
function FoodCard(props){
    // function orderHandler(){
    //     console.log("Order successful for", props.title)
    //     if(props.price<100){
    //         console.log('Delivery charges applicable of rs 29!')
    //     }
    //     else{
    //         console.log('Eligible for free delivery!')
    //     }
    // }   

    
    let [btnStatus, setBtnStatus] = useState(false)
    function orderHandler(){
        
        setBtnStatus(true)
       
    }
    return(
        <div className="card"  >
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x1000/?"+props.img} />
                <div className={props.ratings>4.4 ? "best" : "d-none"}>Best Seller</div>
                
            </div>
            <div className= {btnStatus==true ? "d-none" : "card-body"}>
                <h3>{props.title}</h3>
                <h4 className="price">₹{props.price} <span className="fw-light">for one</span></h4>
                <p>{props.desc}</p>
                <button className="btn" onClick={orderHandler}>Place order</button>
            </div>
            <div className={btnStatus==true ? "orderplaced" : "d-none"}>
                <h3>Congratulations! <br></br> Your order is placed</h3>
                {
                    props.price<100 ? <p>Delivery charges applicable of rs 29!</p> : <p>Eligible for free delivery!</p>
                   
                    }
                
            </div>
        </div>
    )
}
export default FoodCard;