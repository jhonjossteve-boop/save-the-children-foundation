import Header from '../Header';

export default function HeaderExample() {
  return <Header onDonateClick={() => console.log('Donate clicked from header')} />;
}
