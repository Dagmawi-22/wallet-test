import { useNavigate } from 'react-router-dom';
import { Transaction } from '../data/mockData';
import './TransactionList.css';

interface TransactionListProps {
  transactions: Transaction[];
}

function TransactionList({ transactions }: TransactionListProps) {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  };

  const getCategoryIcon = () => {
    return <img src="/apple.png" alt="Apple" className="icon-img" />;
  };

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
              {getCategoryIcon(transaction.category)}
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
