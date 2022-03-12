import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useEffect, useState } from "react";

import {
  useBurnerContract,
  useSakeNftContract,
  useSakeTokenContract,
} from "../../hooks/useContract";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
import { SAKE_BURNER_ADDRESS, SAKE_SWAP_URL } from "../../constants";
import { classNames } from "../../functions/styling";

function Claim() {
  const { account, activate, library, chainId } = useWeb3React();
  const sakeTokenContract = useSakeTokenContract();
  const burnerContract = useBurnerContract();
  const sakeNftContract = useSakeNftContract();

  const [numberOfNFTs, setNumberOfNFTs] = useState(1);
  const [allowance, setAllowance] = useState(0);
  const [balance, setBalance] = useState(0);
  const [redeemed, setRedeemed] = useState(0);
  const [success, setSuccess] = useState(false);

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
    if (account && sakeTokenContract) {
      (async function () {
        setBalance(
          (await sakeTokenContract.balanceOf(account))
            .div(BigInt(1e18))
            .toNumber()
        );
        setAllowance(
          (await sakeTokenContract.allowance(account, SAKE_BURNER_ADDRESS))
            .div(BigInt(1e18))
            .toNumber()
        );
      })();
    }
  }, [account, sakeTokenContract]);

  useEffect(() => {
    if (account && sakeNftContract) {
      (async function () {
        setRedeemed((await sakeNftContract.balanceOf(account, 1)).toNumber());
      })();
    }
  }, [account]);

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
      return;
    }
    if (allowance < numberOfNFTs) {
      await (
        await sakeTokenContract.approve(SAKE_BURNER_ADDRESS, BigInt(888e18))
      ).wait();
      setAllowance(
        (await sakeTokenContract.allowance(account, SAKE_BURNER_ADDRESS))
          .div(BigInt(1e18))
          .toNumber()
      );
      return;
    }
    await (await burnerContract.burnSake(numberOfNFTs)).wait();
    setSuccess(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="flex">
        <div className="flex flex-row bg-gray">
          <div
            className="flex items-center px-4 py-2 border border-white cursor-pointer"
            onClick={increase}
          >
            <PlusIcon width={16} height={16} />
          </div>
          <div className="flex items-center px-4 py-2 border border-white select-none">
            {numberOfNFTs}
          </div>
          <div
            className="flex items-center px-4 py-2 border border-white cursor-pointer"
            onClick={decrease}
          >
            <MinusIcon width={16} height={16} />
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className={classNames(
            "flex items-center justify-center w-48 h-12 space-y-2 border border-white cursor-pointer select-none bg-gray",
            account &&
              balance < 1 &&
              "text-[rgba(255,255,255,0.5)] border-[rgba(255,255,255,0.5)] cursor-default"
          )}
          onClick={onClick}
        >
          {!account
            ? "Connect Wallet"
            : allowance < numberOfNFTs && balance >= 1
            ? "Approve"
            : !success
            ? "Redeem"
            : "Success!"}
        </div>
      </div>
      <div className="flex flex-col items-center text-lg h-[56px]">
        {balance !== 0 || redeemed !== 0 ? (
          <>
            <div>Eligible for: {balance}</div>
            <div>Redeemed: {redeemed}</div>
          </>
        ) : account ? (
          <>
            <div>You don't have any SAKE NFT.</div>
            <a
              className="underline"
              href={SAKE_SWAP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Swap for SAKE
            </a>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Claim;
