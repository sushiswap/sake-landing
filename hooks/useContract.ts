import { Contract } from "@ethersproject/contracts";
import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import {
  SAKE_BURNER_ADDRESS,
  SAKE_NFT_ADDRESS,
  SAKE_TOKEN_ADDRESS,
} from "../constants";

import SAKE_TOKEN_ABI from "../constants/abis/sake_token.json";
import SAKE_BURNER_ABI from "../constants/abis/sake_burner.json";
import SAKE_NFT_ABI from "../constants/abis/sake_nft.json";

export function useSakeTokenContract() {
  const { library, account } = useWeb3React();
  return useMemo(
    () =>
      library
        ? new Contract(
            SAKE_TOKEN_ADDRESS,
            SAKE_TOKEN_ABI,
            account ? library.getSigner(account) : library
          )
        : undefined,
    [library]
  );
}

export function useBurnerContract() {
  const { library, account } = useWeb3React();
  return useMemo(
    () =>
      library
        ? new Contract(
            SAKE_BURNER_ADDRESS,
            SAKE_BURNER_ABI,
            account ? library.getSigner(account) : library
          )
        : undefined,
    [library]
  );
}

export function useSakeNftContract() {
  const { library, account } = useWeb3React();
  return useMemo(
    () =>
      library
        ? new Contract(
            SAKE_NFT_ADDRESS,
            SAKE_NFT_ABI,
            account ? library.getSigner(account) : library
          )
        : undefined,
    [library]
  );
}
