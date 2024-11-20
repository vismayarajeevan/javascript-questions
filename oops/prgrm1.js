var purchase1 = {
    shoe:100,
    stateTax:1.2,
    totalPrice:function(){

        var calculation= purchase1.shoe * purchase1.stateTax;
        console.log('Total Price:',calculation);
        
    }
}
purchase1.totalPrice();