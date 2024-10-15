



/**
 * @throws {Error} Price and taxRate must be numbers
 */
function taxCalculation2(price, taxRate){
    if(typeof price !== 'number' || typeof taxRate !== 'number'){
        throw new Error('Price and taxRate must be numbers');
    }
    var tax = 0;
    tax = price * taxRate;
    return tax; 
}

