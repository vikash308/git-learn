let input = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")


btn.addEventListener("click", addtask);

function addtask(){
    let li = document.createElement("li");
    li.innerText = input.value;
    input.value = ""
    ul.appendChild(li);

    let delBtn = document.createElement("button");
    delBtn.innerText = 'delete';
    li.appendChild(delBtn);

    delBtn.addEventListener("click", ()=>{
        let par = delBtn.parentElement;
        par.remove();
    })
}