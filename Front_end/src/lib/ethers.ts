import { ethers } from "ethers";
import { Contract } from "ethers";
import { BrowserProvider } from "ethers";
import { sumABI, ethConversionABI, stringManagementABI, estPostifABI } from "../abi/abi";

export const SUM_CONTRACT_ADDRESS = "0x113658A92D3d76e6050E4E3596d0b7670b57a831";
const STRING_MANAGE_CONTRACT_ADDRESS = "0xDA614D68ffE73b8a767059864527d265fC570120";
const POSITIVE_CONTRACT_ADDRESS = "0xE08871266e4a84bCe3753B3E8e42734813A8A4c1";
const PAYMENT_CONTRACT_ADDRESS = "0x47E2A7A33B612f6Ed6CD10b2981a54F5279BE58D";
const EVEN_CHECK_CONTRACT_ADDRESS = "0xF58bc37dC55E67c224c424560247841FCc48a4B4";
const ETHER_CONVERSION_CONTRACT_ADDRESS = "0xc20cc0F842f100C038773edC07B51D9b94740D43";
const ARRAY_SUM_CONTRACT_ADDRESS = "0x96F91D0fE4C23587Cb0aa1F1baB75DB1a36daCfF";
const RECTANGLE_CONTRACT_ADDRESS = "0x8F265A88b7bBA0890F0A287f3B1b899F73e19f06";

export const networkInfos = async () => {
    const provider = new ethers.JsonRpcProvider("https://ethereum-sepolia-rpc.publicnode.com");

    const network = await provider.getNetwork();
    const block = await provider.getBlock("latest");

    return {
        url: "https://ethereum-sepolia-rpc.publicnode.com",
        chainId: Number(network.chainId),
        blockNumber: block?.number || "Failed to Return",
        hash: block?.hash,
        parentHash: block?.parentHash,
        timestamp: block
            ? new Date(block.timestamp * 1000).toLocaleString()
            : null,
        transactions: block?.transactions.length,
        difficulty: (block as any)?.difficulty?.toString?.() ?? "N/A",
        gasLimit: block?.gasLimit.toString(),
        gasUsed: block?.gasUsed.toString(),
        size: (block as any)?.size ?? "N/A",
    };
};

export const getSumContract = async () => {
    try {
        if (!window.ethereum) {
            throw new Error("Wallet Not found");
        }

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        return new Contract(SUM_CONTRACT_ADDRESS, sumABI, signer);
    } catch (error) {
        console.log("Failed to get Contract, error: ", error);
    }
}

export const getEtherWeiConvertContract = async () => {
    try {
        if (!window.ethereum) {
            throw new Error("Wallet Not found");
        }

        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        return new Contract(ETHER_CONVERSION_CONTRACT_ADDRESS, ethConversionABI, signer);
    } catch (error) {
        console.log("Failed to get Contract, error: ", error);
    }
}
