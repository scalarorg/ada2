import poolsAbi from "@/abis/borrowPoolsAbi/index";
import tokensAbi from "@/abis/tokensAbi/index";
import { useImage } from "@/helpers/useImage";

import type { CauldronConfig } from "@/configs/cauldrons/configTypes";
import { sepoliaAddresses } from "../addresses/sepolia";
const mimInfo = {
  name: "sUSD",
  icon: useImage(`assets/images/tokens/MIM.png`),
  decimals: 18,
  address: sepoliaAddresses.stableCoin,
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
      address: sepoliaAddresses.market,
      abi: poolsAbi.scalarCauldronV4,
    },
    collateralInfo: {
      name: "sBTC",
      decimals: 18,
      address: sepoliaAddresses.sbtc,
      abi: tokensAbi.sBTC,
    },
    mimInfo,
  },
];

export default config;
