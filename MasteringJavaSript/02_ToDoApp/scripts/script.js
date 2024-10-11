const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Field can't be empty");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        addTask();
    }
});

listContainer.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("tasks_list__check");
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveData();
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function restoreData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

restoreData();