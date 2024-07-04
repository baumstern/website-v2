import { ProjectInterface } from "@/lib/types"

const description = `
P256 is an ERC-4337 smart contract wallet that leverages zk-SNARKs for WebAuthn and P-256 signature verification. It aims to simplify Ethereum transactions by incorporating familiar authentication methods like touchID and faceID. The project addresses the challenges of seed phrase management and leverages the biometric capabilities of billions of cellphones to create a more user-friendly crypto experience. Technically, it is an end-to-end ERC-4337 smart contract wallet that verifies ZK proofs of Passkey signatures using the Halo2 proving system.
`

export const p256: ProjectInterface = {
  id: "p256",
  section: "pse",
  projectStatus: "active",
  image: "",
  name: "P256",
  tldr: "Smart contract wallet enabling transactions through familiar flows like touchID, faceID, WebAuth, and Passkeys.",
  description,
  links: {
    website: "https://www.p256wallet.org/",
    github: "https://github.com/privacy-scaling-explorations/p256-circom",
  },
  tags: {
    keywords: [
      "Toolkits",
      "Infrastructure/protocol",
      "User Experience",
      "Key management",
      "Wallets",
      "Account Abstraction",
    ],
    themes: ["build"],
    types: ["Legos/dev tools"],
    builtWith: ["halo2"],
  },
}
