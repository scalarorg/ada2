import poolsAbi from "@/abis/borrowPoolsAbi/index";
import tokensAbi from "@/abis/tokensAbi/index";
import { useImage } from "@/helpers/useImage";

import type { CauldronConfig } from "@/configs/cauldrons/configTypes";
const mimInfo = {
  name: "sUSD",
  icon: useImage(`assets/images/tokens/MIM.png`),
  decimals: 18,
  address: "0xbF8c55fa09aec6097ccE1fe3D070A23F0f74F5B1",
  abi: tokensAbi.stableCoin,
};

const config: Array<CauldronConfig> = [
  {
    icon: useImage(`assets/images/tokens/WBTC.png`),
    name: "sBTC",
    chainId: 11155111,
    id: 1,
    liquidationFee: 6,
    mcr: 80,
    borrowFee: 0.5,
    version: 4,
    cauldronSettings: {
      isNew: true,
      is0xSwap: false,
      isSwappersActive: false,
      isDegenBox: true,
      strategyLink: false,
      isDepreciated: false,
      acceptUseDefaultBalance: true,
      healthMultiplier: 1,
      hasAccountBorrowLimit: false,
      hasWithdrawableLimit: false,
      localBorrowAmountLimit: false,
      hasCrvClaimLogic: false,
      isTesting: false,
    },
    contract: {
      name: "CauldronV4",
      address: "0xc39f8C845452423b4C77c106b0fF057507c41def",
      abi: poolsAbi.scalarCauldronV4,
    },
    collateralInfo: {
      name: "sBTC",
      decimals: 18,
      address: "0xcbC3B6F28Ea17bcce8ab4F39a75D51658A8f3c24",
      abi: tokensAbi.sBTC,
    },
    mimInfo,
  },
];

export default config;
