import WalletCard from '../components/WalletCard';
import TransactionList from '../components/TransactionList';
import { walletData, transactions } from '../data/mockData';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <WalletCard data={walletData} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;
