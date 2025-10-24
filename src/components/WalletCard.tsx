import { WalletData } from '../data/mockData';
import './WalletCard.css';

interface WalletCardProps {
  data: WalletData;
}

function WalletCard({ data }: WalletCardProps) {
  return (
    <div className="wallet-card">
      <div className="wallet-header">
        <h1 className="wallet-title">My Wallet</h1>
      </div>

      <div className="balance-section">
        <p className="balance-label">Card Balance</p>
        <h2 className="balance-amount">${data.cardBalance.toFixed(2)}</h2>
      </div>

      <div className="wallet-info">
        <div className="info-item">
          <div className="info-icon points-icon">⭐</div>
          <div className="info-content">
            <p className="info-label">Daily Points</p>
            <p className="info-value">{data.dailyPoints} pts</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon payment-icon">✓</div>
          <div className="info-content">
            <p className="info-label">Payments</p>
            <p className="info-value no-payments">
              {data.paymentsDue ? 'Payments due' : 'No payments due'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
