

const calculatorButton = document.getElementById('calculate');

calculatorButton.addEventListener('click',function(){

    console.log('Kaaj kore');


    const income =parseFloat (document.getElementById('income').value) ;
    const software =parseFloat (document.getElementById('software').value) ;
    const courses =parseFloat (document.getElementById('courses').value) ;
    const internet =parseFloat (document.getElementById('internet').value) ;

    const totalExpense = software + courses + internet;
    const balance =income-totalExpense;

    const totalExpenseElement =document.getElementById('total-expenses');
    totalExpenseElement.innerText=totalExpense;

     
    const totalbalanceElement =document.getElementById('balance');
    totalbalanceElement.innerText=balance;

    const result =document.getElementById('results');
    result.classList.remove('hidden');

    console.table( {totalExpense,balance});
})
//add event listener for saving button

const csbtn =document.getElementById('calculate-savings')
csbtn.addEventListener('click',function(){

    console.log("Kaaj kore Saving");

    const savingPercent =parseFloat (document.getElementById('savings').value) ;
    console.log(savingPercent);

    const income =parseFloat (document.getElementById('income').value) ;
    const software =parseFloat (document.getElementById('software').value) ;
    const courses =parseFloat (document.getElementById('courses').value) ;
    const internet =parseFloat (document.getElementById('internet').value) ;

    const totalExpense = software + courses + internet;
    const balance =income-totalExpense;

    const savingAmount = (savingPercent*balance)/100;
    console.log(savingAmount)

    const remaingBlance =balance - savingAmount;

    const savingElement =document.getElementById('savings-amount')
    savingElement.innerText =savingAmount.toFixed(2);

    const remainingElememt =document.getElementById('remaining-balance')
    remainingElememt.innerText =remaingBlance.toFixed(2);

});
//history Tab
