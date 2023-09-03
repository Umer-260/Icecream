import React from "react";

function Form () {
    return (
        <form>
            <label>Order ID</label>
            <input type="text" id="orderId" name="OrderId"></input>
            <label>Flavor</label>
            <input type="text" id="flavor" name="flavor"></input>
            <label>Quantity</label>
            <input type="text" id="qty" name="qty"></input>
            <input type="button" value="Place Order" formAction="/GET"/>
            <input type="button" value="Delete Order" />
            <input type="button" value="Edit Order" />
            <input type="button" value="Show Order" />
        </form>
    );
}

export default Form;