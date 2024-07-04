/*
    GLORY BE TO GOD,
    Net Salary Calculator,
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
    -> Housing Levy - if available -> 1.5% of the gross income
    -> NHIF - automatic from Gross Salary
    -> NSSF - automatic from Gross Salary

    -> Taxable Amount - G and NSSF_TOTAL
    -> P.A.Y.E - T.A * Tax rate

    -> monthly duration
*/

const NSSF_LIMIT_LOW    = 7000;
const PERSONAL_RELIEF   = 2400;
const HOUSING_LEVY_RATE = 0.015;

function nssf_deductions(income = 0) {
    return income <= NSSF_LIMIT_LOW ? 420 : 2160;
}

function nhif_deductions(income = 0) {
    if(income < 6000) {
        return 150;
    } else if(income >= 6000 && income < 8000) {
        return 300;
    } else if(income >= 8000 && income < 12000) {
        return 400;
    } else if(income >= 12000 && income < 15000) {
        return 500;
    } else if(income >= 15000 && income < 20000) {
        return 600;
    } else if(income >= 20000 && income < 25000) {
        return 750;
    } else if(income >= 25000 && income < 30000) {
        return 850;
    } else if(income >= 30000 && income < 35000) {
        return 900;
    } else if(income >= 35000 && income < 40000) {
        return 950;
    } else if(income >= 40000 && income < 45000) {
        return 1000;
    } else if(income >= 45000 && income < 50000) {
        return 1100;
    } else if(income >= 50000 && income < 60000) {
        return 1200;
    } else if(income >= 60000 && income < 70000) {
        return 1300;
    } else if(income >= 70000 && income < 80000) {
        return 1400;
    } else if(income >= 80000 && income < 90000) {
        return 1500;
    } else if(income >= 90000 && income < 100000) {
        return 1600;
    }  else {
        return 1700;
    }
}

function tax_rate(taxable_amount = 0) {
    let deductions = []
    // calculating The paye tax for a month
    if(taxable_amount <= 24000) {
        return (0.1 * taxable_amount);
    } else if(taxable_amount > 24000 && taxable_amount <= 32333) {
        if(taxable_amount > 24000 && taxable_amount < 32333) {
            deductions.push(2400, (0.25 * (taxable_amount - 24000)));
        } else {
            deductions.push(2400, (0.25 * (32333 - 24000)));
        }
    } else if(taxable_amount > 32333 && taxable_amount <= 500000) {
        if(taxable_amount > 32333 && taxable_amount < 500000) {
            deductions.push(2400, 2083.25, (0.3 * (taxable_amount - 32333)));
        } else {
            deductions.push(2400, 2083.25, (0.3 * (500000 - 32333)));
        }
    } else if(taxable_amount > 500000 && taxable_amount <= 800000) {
        if(taxable_amount > 500000 && taxable_amount < 500000) {
            deductions.push(2400, 2083.25, 140300.1, (0.325 * (taxable_amount - 500000)));
        } else {
            deductions.push(2400, 2083.25, 140300.1, (0.325 * (800000 - 500000)));
        }
    } else if(taxable_amount > 800000){
        // value greater than 9600000
        deductions.push(2400, 2083.25, 140300.1, 97500, (0.35 * (taxable_amount - 800000)));
    } else {
        return 0;
    }

    let total = 0;
    // calculate now the sum of the items in the array
    deductions.forEach(element => {
        total += element;
    });

    console.log(` deductions: ${deductions}`);
    return total;
}

function get_net_pay(gross_salary = 0) {
    let total_taxable_amount = gross_salary - nssf_deductions(gross_salary);
    let paye = tax_rate(total_taxable_amount) - PERSONAL_RELIEF;
    // deducting nhif and housing levy
    // but we need to find the net taxable amount
    let net_taxable_amount = total_taxable_amount - paye;
    let housing_levy = HOUSING_LEVY_RATE * gross_salary // 1.5% a month
    
    // our return is net pay
    console.log(` Debug_info: NSSF[ksh ${nssf_deductions(gross_salary)}], TA[ksh ${total_taxable_amount}], PAYE[ksh ${paye}], Housing Levy[ksh ${housing_levy}]`);
    return (net_taxable_amount - (nhif_deductions(gross_salary) + housing_levy));
}

console_io.console_input.question(` Enter Your Gross Salary[numerical values only]: `, function(_gross_income_) {
    let income = parseFloat(_gross_income_);

    if(isNaN(income) || income < 0) {
        console.log(` Invalid input: ${income}, expected a numerical input.`);
    } else {
        // we perform the calculation
        console.log(` Your Net Pay is: ksh ${get_net_pay(income)}, without insurance relief.`);
    }
    // after that we close the stream
    console_io.console_input.close();
});