

/**
 * 
 * @description This function calculates the tax for a product
 * @returns {number} tax
 */
function taxCalculation() {
    var tax = 0;
    var price = 100;
    var taxRate = 0.1;
    tax = price * taxRate;
    return tax;
}