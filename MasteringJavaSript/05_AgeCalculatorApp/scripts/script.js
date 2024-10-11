const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

function calculateAge() {
    if(!userInput.value){
        result.classList.remove("correct");
        result.classList.add("error");
        result.innerHTML = "Don't forget to input the date :)";
        return;
    }
    const birthdayDate = new Date(userInput.value);
    let dayOfBirth = birthdayDate.getDate();
    let monthOfBirth = birthdayDate.getMonth();
    let yearOfBirth = birthdayDate.getFullYear();

    const todayDate = new Date();
    let dayNow = todayDate.getDate();
    let monthNow = todayDate.getMonth();
    let yearNow = todayDate.getFullYear();

    let yearDiff = yearNow - yearOfBirth;
    let monthDiff = monthNow - monthOfBirth;
    let dayDiff = dayNow - dayOfBirth;

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12; 
    }

    if (dayDiff < 0) {
        const lastMonth = new Date(yearNow, monthNow, 0); 
        dayDiff += lastMonth.getDate(); 
        monthDiff--;
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    //console.log(`Years: ${yearDiff} Months: ${monthDiff} Days: ${dayDiff}`)
    result.classList.remove("error");
    result.classList.add("correct");
    result.innerHTML = `<span>${yearDiff}</span> Years <span>${monthDiff}</span> Months <span>${dayDiff}</span> Days`;
}

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateAge);