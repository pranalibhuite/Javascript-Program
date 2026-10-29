document.write("<h1>Hello i am coming from external file</h1>")

function demo(){
    document.getElementById('text').innerText="change the text"
}

function sum(a,b){
    return a+b
}

let result=sum(2,2)
document.getElementById('h2').innerText=result