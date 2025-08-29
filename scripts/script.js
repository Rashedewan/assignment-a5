let classClicked = document.getElementsByClassName('heartBeat');
let increaseBeat = document.getElementById('heartCount');
let totalBeat = parseInt(increaseBeat.innerText);
let count = 0;
 
for(const cl of classClicked){
    cl.addEventListener('click', function(){
        totalBeat += 1
       increaseBeat.innerText = totalBeat
    })
    
}

document.getElementById("nenBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('nen');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('nenN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
     let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})

document.getElementById("phlBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('phl');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('phlN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
    let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})

document.getElementById("fsnBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('fsn');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('fsnN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
    let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})
 

document.getElementById("asBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('as');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('asN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
    let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})

document.getElementById("wchBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('wch');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('wchN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
    let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})

document.getElementById("achBtn").addEventListener("click", function(e){
    e.preventDefault();
   const nam = document.getElementById('ach');
   const serviceName = nam.innerHTML;
   const num = document.getElementById('achN');
   const serviceNum = num.innerText;
   let coin = document.getElementById("coinCount");
    let coinCheck = parseInt(coin.innerText);
   if(coinCheck <= 20){
    alert("recharge to continue your progress");
    return
   }else{
        alert("Dialing "+serviceName+" "+serviceNum+"...");
        countBalance = coinCheck - 20;
        coin.innerText = countBalance;
   }  
})

// function myFunction(){
//     const copyText = document.getElementById("nenN")
//     const copySpan = document.getElementById("copySpan");
//     const copyz = parseInt(copySpan.innerText);
//     copyText.innerText;
//     // copyText.setSelectionRange(0, copyText.value.length);
//     navigator.clipboard.writeText(copyText.innerText)
//     alert("Copied the text: " + copyText.innerText);
//     let totalCopy = copyz + 1
//     copySpan.innerText = totalCopy;

// }

function myFunction(a,v){
    const copyText = document.getElementById(a)
    const copySpan = document.getElementById(v);
    const copyz = parseInt(copySpan.innerText);
    copyText.innerText;
    // copyText.setSelectionRange(0, copyText.value.length);
    navigator.clipboard.writeText(copyText.innerText)
    alert("Copied the text: " + copyText.innerText);
    let totalCopy = copyz + 1
    copySpan.innerText = totalCopy;

}










