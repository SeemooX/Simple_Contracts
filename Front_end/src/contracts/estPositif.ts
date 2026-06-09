import { getPositiveContract } from "../lib/ethers";

export async function estPositif(x: string | bigint) {
  const contract: any = await getPositiveContract();
  const result = await contract.estPositif(x);

  return result;
}