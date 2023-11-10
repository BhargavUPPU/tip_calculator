var inputBill=document.getElementById("bill_amount");
var inputtip=document.getElementById("tip_percentage");
var btn = document.getElementById("btn");
var total=document.getElementById("total");
btn.addEventListener("click",function(){
    const Bill=inputBill.value;
    const Tip=inputtip.value;
    const tipAmount=Bill*(1+Tip/100);
    total.innerText = tipAmount.toFixed(2);
})