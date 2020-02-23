import React from 'react';

const TransactionListItem = ({ transaction, deleteHandler }) => {
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}{' '}
            <span>
                {sign}${Math.abs(transaction.amount)}
            </span>
            <button
                className='delete-btn'
                onClick={() => deleteHandler(transaction.id)}
            >
                x
            </button>
        </li>
    );
};

export default TransactionListItem;
