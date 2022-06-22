var cans = [];
var result = document.getElementById("result");
function reveal(){
    var count = 0;
    var correctAns = ["Chandigarh",6,"Gandhinagar"]
    for(let i=1; i<=3; i++){
        collect = "ans"+ `${i}`;
        cans.push(document.getElementsByName(collect));
    }

    var collectedAns = []
    for(let i = 0; i<3; i++){
        for(let j = 0; j<cans[i].length; j++){
            if(cans[i][j].checked){
                if(correctAns[i] == cans[i][j].value){
                    count = count+1
                }
            }
            else{
                count = count+0;
            }
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