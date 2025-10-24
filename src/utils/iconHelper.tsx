export const getCompanyIcon = (title: string): JSX.Element => {
  if (title === 'IKEA') {
    return <img src="/ikea.jpg" alt="IKEA" className="icon-img" />;
  }
  return <img src="/apple.png" alt="Apple" className="icon-img" />;
};
