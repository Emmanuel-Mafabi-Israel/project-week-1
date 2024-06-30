/*
    GLORY BE TO GOD,
    Speed Detector,
    By Israel Mafabi Emmanuel
*/

const console_io = require('./console_io');

/*
    LOGIC,
    -> Require Gross Salary input from the user
    -> We start by determining the total taxable amount:
        -> This involves first determining the 
        NSSF Tier I and NSSF Tier II amounts 
        depending on the amount the user recieves

        from the data collected we can now find the
        total taxable amount:
        which is: [gross_salary - nssf_deductions]

        -> From there we find the P.A.Y.E by applying
        the appropriate tax rates based on the taxable
        amount - total taxable amount.
        which is: [total_taxable_amount * tax_rate]

        -> Finally deducting the NHIF and Housing Levy
        * But first we need to determine - the Net 
        taxable amount: [total_taxable_amount - P.A.Y.E]
        * Deduct NHIF and Housing Levy from the Net 
        taxable amount. The difference now will be the 
        Net Pay!
    net_pay = net_taxable_amount - nhif_deductions - housing_levy(optional) - fringe benefits
    nhif deductions: 2.75% of the gross income

    -> Gross Salary
    -> Housing Levy - if available -> 18% of the gross income
    -> NHIF - automatic from Gross Salary
    -> NSSF - automatic from Gross Salary

    -> Taxable Amount - G and NSSF_TOTAL
    -> P.A.Y.E - T.A * Tax rate

    -> anual duration
*/

const NSSF_LIMIT_LOW = 7000;
const NSSF_LIMIT_HIGH = 36000;

function nssf_deductions(income = 0) {
    if(income < 7000) {
        // 6% of the limit
        return 420;
    } else {
        // the value is greater than
        // ksh7000 and limit for this 
        // ksh36000,
        return 2160;
    }
}

function tax_rate(taxable_amount = 0) {
    // calculating this for a year
    if(taxable_amount <= 288000) {
        return (0.1 * taxable_amount);
    } else if(taxable_amount > 288000 && taxable_amount <= 388000) {
        return (0.25 * taxable_amount);
    } else if(taxable_amount > 388000 && taxable_amount <= 6000000) {
        return (0.3 * taxable_amount);
    } else if(taxable_amount > 6000000 && taxable_amount <= 9600000) {
        return (0.325 * taxable_amount);
    } else if(taxable_amount > 9600000){
        // value greater than 9600000
        return (0.35 * taxable_amount);
    } else {
        return 0;
    }
}

function get_net_pay(gross_salary = 0) {
    let total_taxable_amount = gross_salary - nssf_deductions(gross_salary);
    let paye = tax_rate(total_taxable_amount);
    // deducting nhif and housing levy
    // but we need to find the net taxable amount
    let net_taxable_amount = total_taxable_amount - paye;
    let nhif = 0.025 * gross_salary; // usually 2.5% of the gross salary
    let housing_levy = 0.18 * gross_salary // usually 18% of gross salary, 1.5% a month
    
    // our return is net paye
    console.log(` Debug_info: NSSF[${nssf_deductions(gross_salary)}], TA[${total_taxable_amount}], PAYE[${paye}], Housing Levy[${housing_levy}]`);
    return (net_taxable_amount - (nhif + housing_levy));
}

console_io.console_input.question(` Enter Your Gross Salary[numerical values only]: `, function(_gross_income_) {
    if(isNaN(_gross_income_) || _gross_income_ < 0) {
        console.log(` Invalid input: ${_gross_income_}, expected a numerical input.`);
    } else {
        // we perform the calculation
        console.log(` Your Net annual Pay is: ${get_net_pay(_gross_income_)}`);
    }
    // after that we close the stream
    console_io.console_input.close();
});