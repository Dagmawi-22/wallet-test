import { useNavigate, useParams } from 'react-router-dom';
import { transactions } from '../data/mockData';
import { formatDateTime } from '../utils/dateFormatter';
import { PAYMENT_METHOD, STATUS_APPROVED } from '../constants';
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
            ‹
          </button>
        </div>
        <div className="not-found">
          <h2>Transaction not found</h2>
        </div>
      </div>
    );
  }

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
          <p className="status-text">Status: {STATUS_APPROVED}</p>
          <p className="merchant-text">{transaction.merchant}</p>
          <div className="total-row">
            <span className="total-label">Total</span>
            <span className="total-amount">${transaction.amount.toFixed(2)}</span>
          </div>
        </div>

        <div className="additional-details">
          <div className="detail-row">
            <span className="detail-row-label">Payment Method</span>
            <span className="detail-row-value">{PAYMENT_METHOD}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Category</span>
            <span className="detail-row-value">{transaction.category}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Transaction ID</span>
            <span className="detail-row-value">#{transaction.id}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Type</span>
            <span className="detail-row-value">{transaction.type === 'credit' ? 'Credit' : 'Debit'}</span>
          </div>
          {transaction.description && (
            <div className="detail-row description-row">
              <span className="detail-row-label">Description</span>
              <span className="detail-row-value">{transaction.description}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TransactionDetail;
