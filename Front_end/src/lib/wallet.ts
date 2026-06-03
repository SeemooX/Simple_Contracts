import { BrowserProvider } from "ethers"

declare global {
    interface Window {
        ethereum?: any
    }
}

let provider: BrowserProvider | null = null;

export async function launchToConnect() {
    try {
        if (!window.ethereum) return;

        if (!provider) {
            provider = new BrowserProvider(window.ethereum);
        }

        await provider.send("eth_requestAccounts", []);

        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        return { provider, signer, address };
    } catch (err) {
        console.error("Wallet error:", err);
    }
}