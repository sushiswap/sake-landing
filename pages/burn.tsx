import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";

import { Layout } from "../components";
import {
  BURNER_ADDRESS,
  useBurnerContract,
  useSakeContract,
} from "../hooks/useContract";

const Arrow = ({ direction, onClick }) => (
  <svg
    viewBox="0 0 1000 1000"
    enable-background="new 0 0 1000 1000"
    stroke="white"
    fill="white"
    transform={direction === "up" ? "rotate(270)" : "rotate(90)"}
    onClick={onClick}
  >
    <g>
      <path d="M219.6,10h140.2v138.7H219.6V10z" />
      <path d="M359.8,148.7H500v140.2H359.8V148.7L359.8,148.7z" />
      <path d="M500,288.9h140.2v140.2H500V288.9z" />
      <path d="M500,569.4h140.2v140.2H500V569.4L500,569.4z" />
      <path d="M359.8,709.6H500v140.2H359.8V709.6L359.8,709.6z" />
      <path d="M219.6,849.8h140.2V990H219.6V849.8z" />
      <path d="M640.2,429.1h140.2v140.2H640.2V429.1L640.2,429.1z" />
    </g>
  </svg>
);

const BurnPage = () => {
  const { account, activate, library, chainId } = useWeb3React();
  const sakeContract = useSakeContract();
  const burnerContract = useBurnerContract();

  const [numberOfNFTs, setNumberOfNFTs] = useState(1);
  const [ens, setEns] = useState();
  const [allowance, setAllowance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async function () {
      if (account && library) {
        setEns(
          await library.getSigner(account).provider.lookupAddress(account)
        );
      }
    })();
  }, [account]);

  useEffect(() => {
    (async function () {
      if (chainId !== 1) {
        await library?.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
      }
    })();
  }, [chainId]);

  useEffect(() => {
    if (account && sakeContract) {
      (async function () {
        setBalance(
          (await sakeContract.balanceOf(account)).div(BigInt(1e18)).toNumber()
        );
        setAllowance(
          (await sakeContract.allowance(account, BURNER_ADDRESS))
            .div(BigInt(1e18))
            .toNumber()
        );
      })();
    }
  }, [account, sakeContract]);

  const connect = () => activate(new InjectedConnector({}));

  const increase = () => {
    if (numberOfNFTs + 1 <= balance) setNumberOfNFTs(numberOfNFTs + 1);
  };

  const decrease = () => {
    if (numberOfNFTs !== 1) setNumberOfNFTs(numberOfNFTs - 1);
  };

  const onClick = async () => {
    if (!account) {
      connect();
      return;
    }
    if (balance < 1) {
      document.location.href =
        "https://app.sushi.com/swap?outputCurrency=0xe9f84de264e91529af07fa2c746e934397810334";
      return;
    }
    if (allowance < numberOfNFTs) {
      await (
        await sakeContract.approve(BURNER_ADDRESS, BigInt(1000e18))
      ).wait();
      setAllowance(
        (await sakeContract.allowance(account, BURNER_ADDRESS))
          .div(BigInt(1e18))
          .toNumber()
      );
      return;
    }
    await (await burnerContract.burnSake(numberOfNFTs)).wait();
    setSuccess(true);
  };

  console.log(allowance, balance);

  return (
    <Layout currentPage="burn">
      <div className="flex flex-col w-full h-screen text-white brand-font">
        <div className="flex justify-end w-full">
          <div
            className="p-4 m-4 border border-white cursor-pointer"
            onClick={connect}
          >
            {!account
              ? "Connect Wallet"
              : ens ?? `${account?.slice(0, 5)}...${account?.slice(-4)}`}
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="p-4 space-y-2 border border-white">
            <div>Number of NFTs</div>
            <div className="flex items-center justify-center space-x-2">
              <div className="text-xl" style={{ marginTop: "-8px" }}>
                {numberOfNFTs}
              </div>
              <div className="w-3.5 h-7 cursor-pointer select-none">
                <Arrow direction="up" onClick={increase} />
                <Arrow direction="down" onClick={decrease} />
              </div>
            </div>
            <div
              className="flex justify-center w-full p-2 border border-white cursor-pointer"
              onClick={onClick}
            >
              {!account
                ? "Connect"
                : balance < 1
                ? "Swap"
                : allowance < numberOfNFTs
                ? "Approve"
                : !success
                ? "Burn"
                : "Success!"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BurnPage;
