const handleChange =()=>{
    let text = document.getElementById("text").value
    let result = document.getElementById("result")
    if(text.length === 0){
        result.innerText = "parolni kiriting"
        result.classList.add("required")
        result.classList.remove("strong")
        result.classList.add("normal")
        result.classList.add("easy")
    }else if(text.length <= 4){
        result.innerText = "kuchsiz parol"
        result.classList.add("easy")
        result.classList.remove("strong")
        result.classList.remove("normal")
        result.classList.remove("required")
    }else if(text.length > 4 && text.length < 8){
        result.innerText = "o'rtacha parol"
        result.classList.add("normal")
        result.classList.remove("strong")
        result.classList.remove("required")
        result.classList.remove("easy")
    }else if(text.length >= 8){
        result.innerText = "kuchli parol"
        result.classList.add("strong")
        result.classList.remove("required")
        result.classList.remove("normal")
        result.classList.remove("easy")

}
}



const handleSubmit=()=>{
    e.prevenDefault();
    const users = []
    let payload = { 
        name: e.target[0].value,
        age: e.target[1].value,
        phone: e.target[2].value,
        Address: e.target[3].value,
    }
    user.push(payload)
    let tr = ""
    for(let item of users){
        tr += "<tr>" +
       " <td>" + item.name + "</td>" +
       " <td>" + item.age + "</td>" +
       " <td>" + item.phone + "</td>" +
       " <td>" + item.address + "</td>" +

        "</tr>"
        
    }
}