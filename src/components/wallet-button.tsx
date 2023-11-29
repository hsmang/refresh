import { Box, SvgIcon, Typography } from "@mui/material";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { walletState } from "@/recoil/state";

type EthereumWindow = Window & {
  ethereum?: {
    request: (args: { method: string }) => Promise<string[]>;
    send: (args: { method: string; params?: any[] }) => Promise<any>;
    on: (event: string, callback: () => void) => void;
  };
};

function maskAddress(address: string): string {
  // For example, display only the first 6 and last 4 characters
  const masked: string = `${address.substring(0, 6)}...${address.slice(-4)}`;
  return masked;
}

function WalletButton(): JSX.Element {
  const [maticAmount, setMaticAmount] = useState<string>('');
  const setWalletAddress = useSetRecoilState(walletState);
  const walletAddress = useRecoilValue(walletState);
  let ethereumWindow: EthereumWindow | null = null;
  const MATIC_ADDRESS = '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'; // Matic (Polygon) token contract address

  useEffect(() => {
    ethereumWindow = window as EthereumWindow;
  })

  const getReqAccts = async() => {

    if (typeof window !== 'undefined' && ethereumWindow.ethereum) {
      ethereumWindow.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          const address: string = accounts[0];

          // Display a masked or shortened version of the wallet address
          const maskedAddress: string = maskAddress(address);
          setWalletAddress(maskedAddress);
        })
        .catch((error: Error) => {
          console.error(error);
        });
    } else {
      console.error('MetaMask is not installed');
      alert('MetaMask is not installed')
    }
  };

  const handleAccountChange = () => {
    setWalletAddress('');
  };

  const handleMaticTransfer = async () => {
    if (walletAddress) {
      try {
        // Convert the amount to wei (smallest unit of ETH)
        const maticAmountInWei = window.ethereum.toWei(maticAmount, 'ether');

        // Call the transfer function on the Matic token contract
        const result = await ethereumWindow.ethereum.send({
          method: 'eth_sendTransaction',
          params: [
            {
              from: walletAddress,
              to: MATIC_ADDRESS,
              gas: '0x76c0', // Replace with the appropriate gas limit
              gasPrice: '0x9184e72a000', // Replace with the appropriate gas price
              value: maticAmountInWei,
              data: '0x', // Data field is empty for simple transfers
            }
          ],
        });

        console.log('Transaction result:', result);
      } catch (error) {
        console.error('Error transferring Matic:', error);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          width: 180,
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          borderRadius: 1,
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          p: "12px",
        }}
      >
        {
          walletAddress !== '' 
          ?
          <>
            <div>
            <p>{walletAddress}</p>
            <br>
            </br>
            <p>로그아웃</p>
            <br/>
            <label>
        Matic Amount:
        <input
          type="text"
          value={maticAmount}
          onChange={(e) => setMaticAmount(e.target.value)}
        />
      </label>

      <button onClick={handleMaticTransfer}>
        Transfer Matic
      </button>
            </div>
            
            
          </> 
          
          : 
          <>
          <div onClick={getReqAccts}>
          <Typography color="primary" variant="subtitle1">
            Connect Wallet
          </Typography>
          <Typography color="neutral.500" variant="body2">
            Click to connect.
          </Typography>
        </div>
          </>
        }
        
        <SvgIcon fontSize="small" sx={{ color: "neutral.500" }}>
          <ChevronRightIcon />
        </SvgIcon>
      </Box>
    </>
  );
}

export default WalletButton;
