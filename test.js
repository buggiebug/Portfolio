const calculateDate = (startYear, startMonth, startDay, endYear, endMonth, endDay) => {
    // Define the start and end dates
    const startDate = new Date(startYear, startMonth - 1, startDay); // Adjust for 0-indexed months
    let endDate;
    if (endYear && endMonth && endDay) {
        endDate = new Date(endYear, endMonth - 1, endDay); // Adjust for 0-indexed months
    } else {
        endDate = new Date();
    }

    // Calculate the difference in total months
    const totalYear = endDate.getFullYear() - startDate.getFullYear();
    const totalMonth = endDate.getMonth() - startDate.getMonth();
    const totalDay = endDate.getDate() - startDate.getDate();
    console.log(totalYear," year,",totalMonth, " month,", totalDay," day");

    const totalMonthsDifference = ( totalYear* 12 + totalMonth);
    console.log("Total Diff >>> ", totalMonthsDifference);

    // Calculate the number of years and remaining months
    const years = Math.floor(totalMonthsDifference / 12);
    const months = totalMonthsDifference % 12;

    // Adjust the number of days correctly when borrowing months
    let adjustedDays = totalDay;
    if (totalDay < 0) {
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        adjustedDays = previousMonth.getDate() + totalDay; // Get remaining days from the previous month
    }

    // Output the result
    if (!years) {
        return `${months} month(s)`;
    }
    return `${years} year(s) and ${months} month(s) and ${adjustedDays} day(s)`;
};


console.log(calculateDate(2000, 9, 5));


