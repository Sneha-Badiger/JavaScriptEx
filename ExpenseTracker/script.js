document.addEventListener("DOMContentLoaded", loadExpenses);

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    const description = document.getElementById("description").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);

    if (description === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    const expense = { id: Date.now(), description, amount };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    renderExpenses();
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();
}

function loadExpenses() {
    renderExpenses();
}

function renderExpenses() {
    const expenseList = document.getElementById("expense-list");
    const totalAmount = document.getElementById("total-amount");
    
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach(expense => {
        const li = document.createElement("li");
        li.innerHTML = `${expense.description}:  Rs:${expense.amount.toFixed(2)}
                        <button class="delete-btn" onclick="deleteExpense(${expense.id})">X</button>`;
        expenseList.appendChild(li);
        total += expense.amount;
    });

    totalAmount.textContent = total.toFixed(2);
}
