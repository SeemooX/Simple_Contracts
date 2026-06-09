import { getEtherWeiConvertContract } from "../lib/ethers";

export async function etherToWei(ethAmount: number | undefined) {
  const contract: any = await getEtherWeiConvertContract();
  const result = await contract.etherToWei(ethAmount);

  return result.toString();
}

export async function weiToEther(weiAmount: string | undefined) {
  const contract: any = await getEtherWeiConvertContract();
  const result = await contract.weiToEther(weiAmount);

  return result.toString();
}