import { getSumContract } from "../lib/ethers"

// Read functions
export const getAddition1 = async () => {
    const contract: any = await getSumContract();
    const result = await contract.addition1();

    return result.toString();
}

export async function getAddition2(x: (number | undefined), y: (number | undefined)) {
  const contract: any = await getSumContract();
  const result = await contract.addition2(x, y);

  return result.toString();
}

// Write functions, "in case later i decided to do some refactoring, and build an interface for them"
export const setVar1 = async (value: number) => {
    const contract: any = await getSumContract();
    const transaction = await contract.setVar1(value);
    await transaction.wait();

    return transaction.hash;
}

export async function setVar2(value: number) {
  const contract: any = await getSumContract();
  const tx = await contract.setVar2(value);
  await tx.wait();

  return tx.hash;
}