import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import TransactionListItem from './TransactionListItem';

const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className='list'>
                {transactions.map(transaction => (
                    <TransactionListItem
                        key={transaction.id}
                        transaction={transaction}
                        deleteHandler={deleteTransaction}
                    />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
