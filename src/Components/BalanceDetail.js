import React, { useContext } from 'react'
import TransContext from "./TransContext"
import '../App.css'

function BalanceDetail() {

    let { transaction } = useContext(TransContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0)
                income = income + Number(transaction[i].amount)
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0)
                expense = expense + Number(transaction[i].amount)
        }
        return expense;
    }

    let yourExpense = getExpense();
    let yourIncome = getIncome();
    let totalBalance = yourIncome + yourExpense;

    return (
        <React.Fragment>
            <div>
                <h2>Your Balance <br /> {totalBalance}$  </h2>
            </div>
            <div className="expenseDetail">
                <div>
                    <h4>Income</h4>
                    <p>{yourIncome}$</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p>{yourExpense}$</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BalanceDetail
