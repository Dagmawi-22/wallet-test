import { WalletData } from '../data/mockData';
import { calculateDailyPoints, formatPoints } from '../utils/pointsCalculator';
import './WalletCard.css';

interface WalletCardProps {
  data: WalletData;
}

function WalletCard({ data }: WalletCardProps) {
  const dailyPoints = calculateDailyPoints();
  const formattedPoints = formatPoints(dailyPoints);

  return (
    <div className="wallet-card">

      <div className="cards-container">
        <div className="left-cards">
          <div className="card balance-card">
            <p className="card-label">Card Balance</p>
            <h2 className="card-value balance-value">${data.cardBalance.toFixed(2)}</h2>
            <p className="available-text">$1,534.40 available</p>
          </div>

          <div className="card points-card">
            <p className="card-label">Daily Points</p>
            <h2 className="card-value points-value">{formattedPoints}</h2>
          </div>
        </div>

        <div className="right-cards">
          <div className="card payment-card">
            <p className="card-label">
              {data.paymentsDue ? 'Payment Due' : 'No Payment Due'}
            </p>
            <p className="payment-description">
              {data.paymentsDue ? 'You have pending payments' : "You've paid your September balance"}
            </p>
            <div className="payment-check-icon">✓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletCard;
