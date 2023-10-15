import React from 'react';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistoryTable}>
            <thead className={css.tableHead}>
                <tr className={css.tableHeadRow}>
                    <th className={css.tableHeadColumn}>Type</th>
                    <th className={css.tableHeadColumn}>Amount</th>
                    <th className={css.tableHeadColumn}>Currency</th>
                </tr>
            </thead> 

            <tbody className={css.tableBody}>
                {items.map((item) => (
                    <tr className={css.tableBodyRow} key={item.id} id={item.id}>
                        <td className={css.tableBodyColumn}>{item.type}</td>
                        <td className={css.tableBodyColumn}>{item.amount}</td>
                        <td className={css.tableBodyColumn}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};