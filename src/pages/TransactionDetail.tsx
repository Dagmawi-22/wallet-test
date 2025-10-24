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

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  return (
    <div className="transaction-detail">
      <div className="detail-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ‹
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-amount-card">
          <h1 className="detail-amount">
            ${transaction.amount.toFixed(2)}
          </h1>
          <p className="detail-company-name">{transaction.title}</p>
          <p className="detail-datetime">{formatDateTime(transaction.date)}</p>
        </div>

        <div className="status-total-card">
          <p className="status-text">Status: Approved</p>
          <p className="merchant-text">{transaction.merchant}</p>
          <div className="total-row">
            <span className="total-label">Total</span>
            <span className="total-amount">${transaction.amount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
