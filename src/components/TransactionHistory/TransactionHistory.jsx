import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.list_head}>
          <th className={s.item_head}>Type</th>
          <th className={s.item_head}>Amount</th>
          <th className={s.item_head}>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {items.map((item) => {
          return (
            <tr className={s.list_body} key={item.id}>
              <td className={s.item_body}>{item.type}</td>
              <td className={s.item_body}>{item.amount}</td>
              <td className={s.item_body}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;