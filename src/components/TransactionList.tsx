import { useNavigate } from 'react-router-dom';
import { Transaction } from '../data/mockData';
import { formatDate } from '../utils/dateFormatter';
import { getCompanyIcon } from '../utils/iconHelper';
import './TransactionList.css';

interface TransactionListProps {
  transactions: Transaction[];
}

function TransactionList({ transactions }: TransactionListProps) {
  const navigate = useNavigate();

  const handleTransactionClick = (id: string) => {
    navigate(`/transaction/${id}`);
  };

  return (
    <div className="transaction-list">
      <div className="list-header">
        <h3 className="list-title">Latest Transactions</h3>
      </div>

      <div className="transactions">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction-item"
            onClick={() => handleTransactionClick(transaction.id)}
          >
            <div className="transaction-icon">
              {getCompanyIcon(transaction.title)}
            </div>

            <div className="transaction-details">
              <div className="transaction-main">
                <h4 className="transaction-title">{transaction.title}</h4>
                <p className="transaction-category">{transaction.description}</p>
              </div>
              <p className="transaction-time">
                {formatDate(transaction.date)}
              </p>
            </div>

            <div className="transaction-amount-section">
              <p
                className={`transaction-amount ${
                  transaction.type === 'credit' ? 'credit' : 'debit'
                }`}
              >
                {transaction.type === 'credit' ? '+' : '-'}$
                {transaction.amount.toFixed(2)}
              </p>
              <span className="transaction-percentage">2%</span>
            </div>

            <div className="chevron-icon">›</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransactionList;
