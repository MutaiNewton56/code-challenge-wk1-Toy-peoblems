// Function to calculate PAYE tax based on the provided KRA tax rates
function calculatePAYE(basicSalary) {
    let tax = 0;
    if (basicSalary <= 12298) {
        tax = 0;
    } else if (basicSalary <= 23885) {
        tax = (basicSalary - 12298) * 0.1;
    } else if (basicSalary <= 35472) {
        tax = (11587 * 0.1) + ((basicSalary - 23885) * 0.15);
    } else if (basicSalary <= 47059) {
        tax = (11587 * 0.1) + (11587 * 0.15) + ((basicSalary - 35472) * 0.2);
    } else if (basicSalary <= 58646) {
        tax = (11587 * 0.1) + (11587 * 0.15) + (11587 * 0.2) + ((basicSalary - 47059) * 0.25);
    } else {
        tax = (11587 * 0.1) + (11587 * 0.15) + (11587 * 0.2) + (11587 * 0.25) + ((basicSalary - 58646) * 0.3);
    }
    return tax;
}

// Function to calculate NHIF deductions based on the provided NHIF rates
function calculateNHIF(basicSalary) {
    let nhif = 0;
    if (basicSalary <= 5999) {
        nhif = 150;
    } else if (basicSalary <= 7999) {
        nhif = 300;
    } else if (basicSalary <= 11999) {
        nhif = 400;
    } else if (basicSalary <= 14999) {
        nhif = 500;
    } else if (basicSalary <= 19999) {
        nhif = 600;
    } else if (basicSalary <= 24999) {
        nhif = 750;
    } else if (basicSalary <= 29999) {
        nhif = 850;
    } else if (basicSalary <= 34999) {
        nhif = 900;
    } else if (basicSalary <= 39999) {
        nhif = 950;
    } else if (basicSalary <= 44999) {
        nhif = 1000;
    } else if (basicSalary <= 49999) {
        nhif = 1100;
    } else if (basicSalary <= 59999) {
        nhif = 1200;
    } else if (basicSalary <= 69999) {
        nhif = 1300;
    } else if (basicSalary <= 79999) {
        nhif = 1400;
    } else if (basicSalary <= 89999) {
        nhif = 1500;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF deductions based on the provided NSSF rates
function calculateNSSF(basicSalary) {
    const nssfRate = 0.06;
    return basicSalary * nssfRate;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const payee = calculatePAYE(basicSalary);
    const nhifDeductions = calculateNHIF(basicSalary);
    const nssfDeductions = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
    
    return {
        payee,
        nhifDeductions,
        nssfDeductions,
        grossSalary,
        netSalary
    };
}

// Example usage
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
    console.log("Invalid input. Please enter valid numbers for basic salary and benefits.");
} else {
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log("PAYE (Tax): KES", salaryDetails.payee);
    console.log("NHIF Deductions: KES", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions: KES", salaryDetails.nssfDeductions);
    console.log("Gross Salary: KES", salaryDetails.grossSalary);
    console.log("Net Salary: KES", salaryDetails.netSalary);
}
