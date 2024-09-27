

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

    //history tab
    
    const  historyItem = document.createElement('div');
    historyItem.className = 
    'bg-white  p-3 rounded-md border-l-2 border-indigo-500';

    historyItem.innerHTML =`

     <p class = 'text-xs text-gray-500'>${new Date().toDateString()}</p>
     <p class = 'text-xs text-gray-500'>Income: $${income.toFixed(2)}</p>
     <p class = 'text-xs text-gray-500'>Expense: $${totalExpense.toFixed(2)}</p>
     <p class = 'text-xs text-gray-500'>Balance: $${balance.toFixed(2)}</p>
   ` ;
  
  const historyContainer =document.getElementById('history-list');
  historyContainer.appendChild(historyItem,historyContainer.firstChild);


});

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

const historyTab =document.getElementById('history-tab');
const assistantTab =document.getElementById('assistant-tab');
historyTab.addEventListener('click',function(){

    historyTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );
    historyTab.classList.remove('text-gray-600')
     assistantTab.classList.remove(

            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
     );
     historyTab.classList.add('text-gray-600')
     
     document.getElementById('expense-form').classList.add('hidden')
});


assistantTab.addEventListener('click',function(){
    assistantTab.classList.add(
        "text-white",
        "bg-gradient-to-r",
        "from-blue-500",
        "to-purple-600"
    );

    
     historyTab.classList.remove(

            "text-white",
            "bg-gradient-to-r",
            "from-blue-500",
            "to-purple-600"
     );
    
     document.getElementById('expense-form').classList.remove('hidden')
     document.getElementById('history-section').classList.add('hidden')

     

}) ;

