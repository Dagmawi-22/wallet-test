import { useNavigate, useParams } from 'react-router-dom';
import { transactions } from '../data/mockData';
import './TransactionDetail.css';

function TransactionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const transaction = transactions.find((t) => t.id === id);

  if (!transaction) {
    return (
      <div className="transaction-detail">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back
          </button>
        </div>
        <div className="not-found">
          <h2>Transaction not found</h2>
        </div>
      </div>
    );
  }

  const getCategoryIcon = () => {
    return <img src="/apple.png" alt="Apple" className="detail-icon-img" />;
  };

  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <div className="transaction-detail">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <span className="back-arrow">←</span>
          <span>Back</span>
        </button>
        <h2 className="detail-title">Transaction Details</h2>
      </div>

      <div className="detail-content">
        <div className="detail-icon-section">
          <div className="detail-icon-large">
            {getCategoryIcon(transaction.category)}
          </div>
          <h3 className="detail-merchant">{transaction.title}</h3>
          <p className="detail-category">{transaction.category}</p>
        </div>

        <div className="detail-amount-card">
          <p className="amount-label">Amount</p>
          <h1
            className={`detail-amount ${
              transaction.type === 'credit' ? 'credit' : 'debit'
            }`}
          >
            {transaction.type === 'credit' ? '+' : '-'}$
            {transaction.amount.toFixed(2)}
          </h1>
        </div>

        <div className="detail-info-section">
          <div className="info-row">
            <span className="info-row-label">Merchant</span>
            <span className="info-row-value">{transaction.merchant}</span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Date & Time</span>
            <span className="info-row-value">
              {formatFullDate(transaction.date)}
            </span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Status</span>
            <span className={`status-pill ${transaction.status}`}>
              {transaction.status.charAt(0).toUpperCase() +
                transaction.status.slice(1)}
            </span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Transaction Type</span>
            <span className="info-row-value">
              {transaction.type.charAt(0).toUpperCase() +
                transaction.type.slice(1)}
            </span>
          </div>

          <div className="info-row">
            <span className="info-row-label">Transaction ID</span>
            <span className="info-row-value transaction-id">
              #{transaction.id}
            </span>
          </div>
        </div>

        {transaction.description && (
          <div className="description-section">
            <h4 className="description-title">Description</h4>
            <p className="description-text">{transaction.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TransactionDetail;
