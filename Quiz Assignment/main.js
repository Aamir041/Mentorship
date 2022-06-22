var cans = [];
var result = document.getElementById("result");
function reveal(){
    var correctAns = ["Chandigarh",6,"Gandhinagar"]
    for(let i=1; i<=3; i++){
        collect = "ans"+ `${i}`;
        cans.push(document.getElementsByName(collect));
    }

    var collectedAns = []
    for(let i = 0; i<3; i++){
        for(let j = 0; j<cans[i].length; j++){
            if(cans[i][j].checked){
                console.log(cans[i][j].value);
                collectedAns.push(cans[i][j].value);
            }
        }
    }
    
    var count = 0;
    for(let i = 0; i<collectedAns.length;i++){
        if(correctAns[i] == collectedAns[i]){
            count = count + 1;
        }
    }
    result.innerHTML = `<h1>Total Marks ${count}/3</h1>`
}

function reset(){
    for(let i=0;i<cans.length;i++){
        for(let j=0;j<cans[i].length;j++){
            cans[i][j].checked = false;
        }
    }
    result.innerHTML = "";
}