const Dates = document.getElementById("Date");
const Btn = document.getElementById("submit");
const Display = document.getElementById("display");



Btn.addEventListener("click", ()=>{
    const DateValue = Dates.value;
    if(DateValue === ""){
        Display.innerText = "Please Enter Birth Date First!";
    }

    else{
        const age = AgeCalculate(DateValue);
        Display.innerText = `Your Age is ${age} ${age > 1 ? "years" : "year"} old `
        
    }
});

function AgeCalculate(Birthdate){
    const CurrentDate = new Date();
    const InputDate = new Date(Birthdate);
    let age = CurrentDate.getFullYear() - InputDate.getFullYear();
    const month = CurrentDate.getMonth() - InputDate.getMonth();

    if(month < 0 ||( month === 0 && CurrentDate.getDate() < InputDate.getDate() )){
            age-- ;        
}

    return age;
}
