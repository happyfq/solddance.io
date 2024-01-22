import WalletProviderComponent from 'components/solana/WalletProvider';
import 'styles/globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProviderComponent>
          {children}
        </WalletProviderComponent>
      </body>
    </html>
  );
}
