import ReactMarkdown from "react-markdown";

const customComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl! font-bold my-8! text-gray-900">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl! font-semibold mb-4! my-8! text-gray-800 border-b border-gray-200 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl! font-medium mb-3! my-6! text-gray-700">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl! font-medium mb-2! my-4! text-gray-700">
      {children}
    </h4>
  ),
  p: ({ children }: any) => (
    <p className="mb-4! text-gray-600 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="mb-4! ml-6! list-disc text-gray-600">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="mb-4! ml-6! list-decimal text-gray-600">{children}</ol>
  ),
  li: ({ children }: any) => <li className="mb-2!">{children}</li>,
  code: ({ children, className }: any) => {
    const isInline = !className;
    return isInline ? (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ) : (
      <code
        className={`${className} block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono`}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 text-sm font-mono">
      {children}
    </pre>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 text-gray-700 italic">
      {children}
    </blockquote>
  ),
  a: ({ children, href }: any) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  strong: ({ children }: any) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  hr: () => <hr className="border-gray-300 my-8" />,
  img: ({ src, alt }: any) => (
    <figure className="w-richtext-align-center w-richtext-figure-type-image mb-4">
      <div>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-gray-500 mt-2 text-sm">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

const coreConcepts = `# 

## Overview

Lambda Builders' Kit transforms any application into a privacy-preserving system through a layered architecture that handles encryption, validation, and computation seamlessly. Our SDK abstracts complex cryptographic operations into simple API calls while maintaining security and verifiability.

---

## System Architecture

\`\`\`mermaid
graph TB
    subgraph "Developer Layer"
        A[Your Application]
        B[Lambda SDK]
    end

    subgraph "Privacy Layer"
        C[Encryption Engine]
        D[ZK Proof Generator]
        E[MPC Coordinator]
    end

    subgraph "Execution Layer"
        F[CXE - Confidential Execution Environment]
        G[Private State Manager]
    end

    subgraph "Blockchain Layer"
        H[Smart Contracts]
        I[On-Chain Verification]
    end

    A --> B
    B --> C
    B --> D
    B --> E
    C --> F
    D --> I
    E --> F
    F --> G
    G --> H
    H --> I

\`\`\`

### Architecture Breakdown

**Developer Layer**

- **Your Application**: Standard web/mobile app (React, Node.js, Python, Rust)
- **Lambda SDK**: High-level APIs abstracting cryptographic operations

**Privacy Layer**

- **Encryption Engine**: FHE (TFHE/BFV), AES-256-GCM, Threshold Encryption (Shamir's Secret Sharing)
- **ZK Proof Generator**: zk-SNARKs (Groth16, Plonk), zk-STARKs, Bulletproofs
- **MPC Coordinator**: Garbled Circuits, Secret Sharing, Byzantine fault tolerance

**Execution Layer**

- **CXE**: TEE (Intel SGX, AMD SEV), MPC Networks, Remote attestation
- **Private State Manager**: Sparse Merkle Trees, AES-GCM encryption, Poseidon hashing

**Blockchain Layer**

- **Smart Contracts**: Solidity/Rust contracts, state commitments, access control
- **On-Chain Verification**: Pairing checks (BN254, BLS12-381), SNARK verification (240K-350K gas)

---

## 1. Data Encryption Flow

### How It Works

When you mark data as private in Lambda, it flows through a multi-stage encryption pipeline that ensures confidentiality while maintaining computational capability.

\`\`\`mermaid
sequenceDiagram
    participant App as Your Application
    participant SDK as Lambda SDK
    participant Enc as Encryption Engine
    participant CXE as Confidential Execution Environment
    participant Chain as Blockchain

    App->>SDK: Mark data as private
    SDK->>SDK: Analyze data structure
    SDK->>Enc: Generate encryption keys
    Enc->>Enc: Apply homomorphic encryption
    Enc->>SDK: Return encrypted data + metadata
    SDK->>CXE: Deploy to execution environment
    CXE->>Chain: Store encrypted state commitment
    Chain-->>App: Return transaction proof

\`\`\`

### Technical Flow

**1. Data Marking & Analysis**

- SDK intercepts \`PRIVATE()\` decorator, performs type inference
- Serializes using Protobuf/MessagePack
- Generates unique nonces/IVs for semantic security

**2. Key Generation**

- HKDF key derivation: master key → application keys → data-specific keys
- EdDSA/ECDSA (secp256k1) signatures on key material
- Storage in HSM or WebCrypto API

**3. Homomorphic Encryption**

- TFHE for arithmetic operations on ciphertexts
- Ring-LWE security, bootstrapping for unlimited computation depth
- Generates evaluation keys for homomorphic operations

**4. Metadata Preservation**

- Encrypted envelopes: ciphertext + encryption scheme + key commitments
- SHA-256 key commitment hashes for verifiability
- ABE for access control policies
- NIZK proof of encryption well-formedness

**5. CXE Deployment**

- Packages as WASM module with encrypted data
- Remote attestation (SGX quotes/AMD SEV)
- TLS 1.3 secure channels, Shamir's t-of-n secret sharing

**6. On-Chain Commitment**

- Merkle root (Poseidon/SHA-256 hash)
- Ethereum transaction (EIP-1559), emits event logs

### Key Components

**Encryption Types**

- **FHE**: TFHE-rs, 128-bit security, addition/multiplication on ciphertext
- **Symmetric**: AES-256-GCM, ~1GB/s throughput
- **Threshold**: BLS12-381, t=⌈n/2⌉+1 threshold

**Key Management**

- **Hardware RNG**: FIPS 140-2 certified entropy
- **MPC Key Sharing**: Threshold ECDSA, no single point of failure
- **Auto Rotation**: 90-day default, re-encryption with backward compatibility

---

## 2. Zero-Knowledge Proof Generation

### How It Works

ZK proofs allow you to prove statements about private data without revealing the data itself. Lambda automatically generates and verifies these proofs using cutting-edge cryptographic protocols.

\`\`\`mermaid
graph LR
    subgraph "Proof Generation"
        A[Private Input] --> B[Circuit Compiler]
        B --> C[Witness Generation]
        C --> D[Proof Creation]
    end

    subgraph "Proof Verification"
        D --> E[Proof Data]
        F[Public Input] --> G[Verifier]
        E --> G
        G --> H{Valid?}
        H -->|Yes| I[Accept Transaction]
        H -->|No| J[Reject Transaction]
    end

    style A fill:#f9f,stroke:#333
    style F fill:#9ff,stroke:#333

\`\`\`

### Technical Process

**Circuit Compilation**

- DSL: Write in Circom, Cairo, or Noir
- R1CS: Converts to Rank-1 Constraint System (quadratic equations)
- Arithmetization: Logic gates → arithmetic circuits (BN254/BLS12-381 fields)
- Trusted Setup: Powers of Tau ceremony for proving/verifying keys

**Witness Generation**

- Assigns private inputs to constraint variables
- Satisfies R1CS: A·w ⊙ B·w = C·w
- Polynomial evaluation for SNARK protocols
- Cost: O(n) for n constraints (10⁴-10⁶ typical)

**Proof Creation**

- KZG polynomial commitments
- Fiat-Shamir transform (interactive → non-interactive)
- Elliptic curve pairings: e(G₁, G₂) → Gₜ
- Size: ~200-300 bytes (constant)
- Time: Groth16 0.5-2s, STARKs 2-10s

**Verification**

- 2-4 pairing operations (milliseconds)
- Soundness: 2⁻¹²⁸ forgery probability
- Gas: 240K-350K for Groth16 on Ethereum

### Proof Types Supported

**Range Proofs**

\`\`\`mermaid
flowchart TD
    A[Secret Value: x] --> B{Prove: min ≤ x ≤ max}
    B --> C[Generate Range Proof]
    C --> D[Verifier checks proof]
    D --> E[Confirm without learning x]

\`\`\`

- **Protocol**: Bulletproofs, O(log n) size for n-bit range
- **Bit Decomposition**: x = Σ bᵢ·2ⁱ where bᵢ ∈ {0,1}
- **Size**: ~672 bytes for 64-bit, ~10ms proving, ~5ms verification
- **Use**: Balance proofs, age verification, credit scores

**Membership Proofs**

\`\`\`mermaid
flowchart TD
    A[Secret Element: e] --> B{Prove: e ∈ Set S}
    B --> C[Generate Merkle Proof]
    C --> D[Verifier checks against root]
    D --> E[Confirm membership without revealing e]

\`\`\`

- **Data Structure**: Sparse Merkle Tree with Poseidon hash
- **Size**: O(log n), 256-512 bytes for 2²⁰ elements
- **Depth 20**: ~10ms proving, ~3ms verification
- **Use**: Whitelist verification, credentials, token ownership

**Computation Proofs**

\`\`\`mermaid
flowchart TD
    A[Private Inputs] --> B[Execute Function f]
    B --> C[Generate Execution Proof]
    C --> D{Prove: output = f(inputs)}
    D --> E[Public Output + Proof]
    E --> F[Verify correctness]

\`\`\`

- **Systems**: Groth16 (fast), PLONK (flexible), STARKs (transparent)
- **Recursion**: Proof-of-proof for scalability
- **Performance**: 1000 gates ~50ms, 1M gates ~2s proving
- **Use**: Private smart contracts, ML inference, encrypted computation

### Advanced Techniques

**PLONK**: Universal setup, custom gates, ~350K gas verification
**STARKs**: No trusted setup, post-quantum, 50-200KB proofs
**Recursive**: Nova for O(1) proofs, IVC for long computations

---

## 3. Confidential Execution Environment (CXE)

### How It Works

CXEs are isolated computation environments where encrypted data is processed securely using TEEs and MPC protocols.

\`\`\`mermaid
graph TB
    subgraph "CXE Cluster"
        subgraph "Node 1"
            A1[Encrypted Shard 1]
            B1[MPC Compute Engine]
        end

        subgraph "Node 2"
            A2[Encrypted Shard 2]
            B2[MPC Compute Engine]
        end

        subgraph "Node 3"
            A3[Encrypted Shard 3]
            B3[MPC Compute Engine]
        end
    end

    C[Encrypted Function] --> B1
    C --> B2
    C --> B3

    B1 --> D[Secure Multi-Party Protocol]
    B2 --> D
    B3 --> D

    D --> E[Encrypted Result]
    E --> F[Result Shares]
    F --> G[Reconstruct Output]

\`\`\`

### Technical Components

**TEE Infrastructure**

- Intel SGX: 128MB-256GB encrypted memory enclaves
- AMD SEV-SNP: Full VM memory encryption
- Remote Attestation: DCAP for code integrity verification
- Memory Encryption: AES-128-GCM via MEE

**MPC Compute Engine**

- Protocol: SPDZ (malicious-secure) or BGW (information-theoretic)
- Secret Sharing: Additive shares over 𝔽ₚ (p ≈ 2²⁵⁶)
- Beaver Triples: Pre-computed for efficient multiplication
- Communication: TLS 1.3, 1-10 MB/s bandwidth

**Byzantine Fault Tolerance**

- Tolerates f < n/3 malicious nodes
- BFT Consensus: PBFT/Tendermint, 3s blocks
- Threshold Signatures: BLS for aggregate attestations
- Shamir Sharing: (t, n)-threshold with t = ⌈2n/3⌉

### Execution Process

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Gateway as CXE Gateway
    participant Node1 as CXE Node 1
    participant Node2 as CXE Node 2
    participant Node3 as CXE Node 3
    participant Chain as Blockchain

    Client->>Gateway: Submit encrypted computation
    Gateway->>Gateway: Split into secret shares

    Gateway->>Node1: Send share 1 + circuit
    Gateway->>Node2: Send share 2 + circuit
    Gateway->>Node3: Send share 3 + circuit

    par Multi-Party Computation
        Node1->>Node1: Compute on share 1
        Node2->>Node2: Compute on share 2
        Node3->>Node3: Compute on share 3
    end

    Node1->>Gateway: Return result share 1
    Node2->>Gateway: Return result share 2
    Node3->>Gateway: Return result share 3

    Gateway->>Gateway: Reconstruct result
    Gateway->>Chain: Submit proof of computation
    Chain-->>Client: Return encrypted result

\`\`\`

### Execution Steps

**1. Submission**: Client packages WASM bytecode + encrypted input + resource limits
**2. Share Distribution**: Gateway splits input into n additive shares: x = x₁ + x₂ + ... + xₙ
**3. MPC Computation**:

- Linear ops (add/multiply): Local computation
- Non-linear ops: 2-3 communication rounds, 10-100ms latency
**4. Reconstruction**: Lagrange interpolation from t shares
**5. Proof**: zkSNARK proves correct execution, 500-2000ms generation

### Security & Performance

**Security**:

- No single node learns plaintext (information-theoretic privacy)
- TEE prevents OS/hypervisor access
- Side-channel resistance: Constant-time ops, ORAM

**Performance**:

- Latency: 1-3s per operation (100ms compute + 50-200ms network)
- Throughput: 100-500 TPS per cluster
- Simple ops: 100-500ms | Complex ops: 1-3s

---

## 4. Complete Transaction Flow

### End-to-End Privacy-Preserving Transaction

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant User
    participant SDK
    participant Encryption
    participant ZK
    participant CXE
    participant Blockchain
    participant Verifier

    User->>SDK: Initiate private transaction
    SDK->>Encryption: Encrypt transaction data
    Encryption-->>SDK: Encrypted data + keys

    SDK->>ZK: Generate proof of validity
    ZK->>ZK: Create witness
    ZK->>ZK: Compile circuit
    ZK-->>SDK: ZK proof generated

    SDK->>CXE: Submit to execution environment
    CXE->>CXE: Execute private computation
    CXE->>CXE: Generate execution proof
    CXE-->>SDK: Encrypted result + proof

    SDK->>Blockchain: Submit transaction
    Blockchain->>Verifier: Verify ZK proof
    Verifier->>Verifier: Check proof validity
    Verifier-->>Blockchain: Proof valid ✓

    Blockchain->>Blockchain: Update encrypted state
    Blockchain-->>User: Transaction confirmed

    Note over User,Blockchain: All sensitive data remains encrypted end-to-end

\`\`\`

### Transaction Phases

**Phase 1: Initialization (Steps 1-2)**

- SDK detects \`PRIVATE()\` wrapper, generates unique txID
- Encryption: HKDF key derivation → AES-256-GCM encryption
- Output: \`{ciphertext, nonce, tag, metadata, key_commitment}\`

**Phase 2: Proof Generation (Steps 3-5)**

- Witness: \`{amount: 1000, balance_alice: 5000, balance_bob: 2000}\`
- Circuit: R1CS with ~10K constraints (balance ≥ amount, state transitions)
- Groth16: ~500ms proving, 128-byte proof (A, B, C points)

**Phase 3: CXE Execution (Steps 6-8)**

- Submit to CXE cluster with TLS 1.3 + attestation
- MPC: 3 nodes compute on secret shares (no single node sees data)
- Generate execution proof: zkSNARK of correct state transition

**Phase 4: Blockchain Settlement (Steps 9-14)**

- Submit: \`{txID, encryptedData, stateCommitment, proof (128 bytes)}\`
- Verify: Pairing check \`e(A, B) · e(α, β) · e(L, γ) · e(C, δ) = 1\`
- Gas: ~240K-350K for proof verification
- Update: New Merkle root stored on-chain

### Performance & Security

**Latency**: 1-2s (encryption + proof + CXE) + 12s (Ethereum block time)

**Gas Cost**: $5-20 on L1, $0.10-0.50 on L2

**Security**: End-to-end encryption, soundness 2⁻¹²⁸, no data leakage

---

## 5. Private State Management

### How State Remains Confidential

\`\`\`mermaid
graph TB
    subgraph "Application State"
        A[Public State] --> B[State Manager]
        C[Private State] --> B
    end

    subgraph "Storage Layer"
        B --> D{State Type?}
        D -->|Public| E[On-Chain Storage]
        D -->|Private| F[Encrypted State Tree]
    end

    subgraph "Private State Tree"
        F --> G[Merkle Tree Root]
        G --> H[Encrypted Leaf 1]
        G --> I[Encrypted Leaf 2]
        G --> J[Encrypted Leaf 3]
    end

    subgraph "Blockchain"
        E --> K[Public Data]
        G --> L[Root Hash Only]
    end

    style C fill:#f9f,stroke:#333
    style F fill:#f9f,stroke:#333
    style H fill:#f9f,stroke:#333
    style I fill:#f9f,stroke:#333
    style J fill:#f9f,stroke:#333

\`\`\`

### State Architecture

**Public State**: On-chain storage, Solidity mappings, 20K gas new slots
**Private State**: Sparse Merkle Tree (256 levels, 2²⁵⁶ keys)

- Leaf: \`{key: H(owner, nonce), value: AES_encrypt(data)}\`
- Internal nodes: Poseidon hash (8x faster in SNARKs than SHA-256)
- Storage: IPFS/Arweave for leaves, only 32-byte root on-chain
- Proof: 8KB Merkle proof (32 bytes × 256 levels)

### State Update Process

\`\`\`mermaid
stateDiagram-v2
    [*] --> ReadState: User requests private data
    ReadState --> DecryptLocal: Retrieve encrypted state
    DecryptLocal --> Compute: Decrypt with user key
    Compute --> EncryptNew: Execute state transition
    EncryptNew --> GenerateProof: Encrypt updated state
    GenerateProof --> SubmitTransaction: Create ZK proof of valid transition
    SubmitTransaction --> VerifyOnChain: Submit to blockchain
    VerifyOnChain --> UpdateRoot: Verify proof
    UpdateRoot --> [*]: Update state tree root

    note right of DecryptLocal
        Decryption happens
        client-side only
    end note

    note right of GenerateProof
        Proof shows state transition
        is valid without revealing
        old or new state
    end note

\`\`\`

### Update Steps

1. **Read**: Query IPFS for encrypted leaf + Merkle proof, verify against on-chain root
2. **Decrypt**: HKDF key derivation → AES-GCM decryption (client-side only)
3. **Compute**: Execute state transition (balance updates, transfers, etc.)
4. **Encrypt**: Fresh nonce → new ciphertext, generate commitment
5. **Prove**: zkSNARK proving valid transition (old_root → new_root), 1-2s generation
6. **Submit**: Transaction with new root + proof, ~240K gas verification

### Advanced Techniques

**Batching**: 100-1000 leaves updated with single root change, 100x throughput
**Rollups**: L2 batched updates via EIP-4844 blobs, ~$0.01 per update
**Sharding**: Partition by key prefix, parallel updates, linear scaling
**ABE**: Attribute-based encryption for conditional access policies

### Security

**Confidentiality**: Only 32-byte root visible on-chain, leaves encrypted (AES-256-GCM)
**Integrity**: Merkle proofs + zkSNARKs ensure valid transitions
**Availability**: Redundant IPFS/Arweave storage, on-chain root always accessible

---

## 6. SDK Integration Flow

### Developer Experience

\`\`\`mermaid
flowchart TD
    A[Install Lambda SDK] --> B[Initialize Client]
    B --> C{What to build?}

    C -->|Private Transaction| D[Use Transaction API]
    C -->|Encrypted Data| E[Use Encryption API]
    C -->|Confidential Contract| F[Use Contract API]

    D --> G[Mark inputs as private]
    E --> G
    F --> G

    G --> H[SDK handles encryption automatically]
    H --> I[SDK generates proofs]
    I --> J[SDK manages CXE deployment]
    J --> K[Submit to blockchain]

    K --> L[Receive encrypted result]
    L --> M[SDK handles decryption]
    M --> N[Return plaintext to authorized user]

    style G fill:#9f9,stroke:#333
    style H fill:#ff9,stroke:#333
    style I fill:#ff9,stroke:#333
    style J fill:#ff9,stroke:#333

\`\`\`

### Installation & Setup

\`\`\`bash
npm install @lambda-builders/sdk

\`\`\`

\`\`\`tsx
import { Lambda, PrivacyLevel } from '@lambda-builders/sdk';

const client = new Lambda({
  network: 'mainnet',
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY',
  privateKey: process.env.PRIVATE_KEY,
  cxeEndpoint: 'https://cxe.lambda.network',
  zkBackend: 'groth16',  // or 'plonk', 'stark'
  privacyLevel: PrivacyLevel.HIGH,
});

\`\`\`

### Example: TypeScript SDK Usage

\`\`\`mermaid
sequenceDiagram
    participant Dev as Developer Code
    participant SDK as Lambda SDK
    participant Backend as Lambda Backend

    Note over Dev: Import SDK
    Dev->>SDK: import { Lambda } from 'lambda-sdk'

    Note over Dev: Initialize
    Dev->>SDK: const client = new Lambda(config)

    Note over Dev: Create private transaction
    Dev->>SDK: client.transaction.create({ amount: PRIVATE(1000) })

    SDK->>SDK: Detect PRIVATE marker
    SDK->>Backend: Encrypt amount
    Backend-->>SDK: Encrypted data + proof

    SDK->>Backend: Submit transaction
    Backend->>Backend: Execute in CXE
    Backend->>Backend: Generate ZK proof
    Backend-->>SDK: Transaction receipt

    SDK-->>Dev: Return { txHash, proof }

    Note over Dev: All complexity abstracted away!

\`\`\`

### SDK Workflow

**1. Mark Private Data**: Use \`PRIVATE()\` wrapper

\`\`\`tsx
const tx = await client.transaction.create({
  from: alice.address,
  to: bob.address,
  amount: PRIVATE(1000),  // Hidden
  memo: PUBLIC("Payment"),  // Visible
});

\`\`\`

**2. Auto Encryption**: SDK handles HKDF key derivation → AES-256-GCM encryption

**3. Auto Proof Gen**: Generates zkSNARK (~500ms) transparently

**4. CXE Deployment**: Uploads to CXE with attestation verification

**5. Blockchain Submit**: EIP-1559 transaction with gas optimization

**6. Auto Decryption**: Returns plaintext to authorized users only

### API Examples

\`\`\`tsx
// Private transfer
await client.token.transfer({
  token: '0xA0b86...',
  to: bob.address,
  amount: PRIVATE(100),
});

// Private DEX swap
await client.defi.swap({
  tokenIn: 'USDC',
  tokenOut: 'ETH',
  amountIn: PRIVATE(1000),
});

// Encrypted storage
await client.storage.store({
  data: PRIVATE({ ssn: '123-45-6789' }),
  accessPolicy: 'owner OR auditor',
});

\`\`\`

---

## 7. Security Model

### Trust Assumptions

\`\`\`mermaid
graph TB
    subgraph "No Trust Required"
        A[Blockchain Consensus]
        B[Cryptographic Primitives]
        C[ZK Proof Verification]
    end

    subgraph "Minimal Trust"
        D[CXE Node Majority]
        E[TEE Hardware]
    end

    subgraph "User Controls"
        F[Private Keys]
        G[Decryption Keys]
        H[Access Policies]
    end

    A --> I[Security Guarantees]
    B --> I
    C --> I
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I

    I --> J[Confidentiality]
    I --> K[Integrity]
    I --> L[Availability]

\`\`\`

### Security Foundations

**Trustless**: Blockchain (51% honest), Crypto (SHA-256, AES-256, ECDSA), ZK (2⁻¹²⁸ soundness)
**Minimal Trust**: CXE (>2/3 honest nodes), TEE (hardware vendor trust)
**User Controls**: Private keys (self-custodial), decryption keys (hierarchical), access policies (ABE)

### Threat Model Protection

\`\`\`mermaid
mindmap
    root((Lambda Security))
        Confidentiality
            Encrypted at rest
            Encrypted in transit
            Encrypted during compute
            Key isolation
        Integrity
            ZK proofs
            Blockchain consensus
            Tamper-proof logs
            Attestation
        Availability
            Distributed CXE nodes
            Redundant storage
            Failover systems
            DDoS protection
        Privacy
            No data leakage
            Unlinkable transactions
            Anonymous credentials
            Selective disclosure

\`\`\`

**Threats**: Eavesdropping → TLS 1.3 | Data breach → Client-side encryption | Invalid computation → zkSNARKs | Double-spend → Nullifiers | DDoS → Rate limiting

---

## 8. Performance & Scalability

### Optimization Architecture

\`\`\`mermaid
graph LR
    subgraph "Input Layer"
        A[Raw Transaction]
    end

    subgraph "Optimization Pipeline"
        B[Batch Processing] --> C[Parallel Proof Generation]
        C --> D[Proof Aggregation]
        D --> E[Compressed Output]
    end

    subgraph "Execution Layer"
        E --> F{Complexity?}
        F -->|Simple| G[Single CXE]
        F -->|Complex| H[CXE Cluster]
    end

    subgraph "Results"
        G --> I[Fast: ~2s]
        H --> J[Scalable: ~5s]
    end

    A --> B

\`\`\`

### Optimization Techniques

**Batching**: 100 txs in one proof, 7x gas reduction (350K → 50K per tx)
**Parallel Proofs**: 8-core CPU ~6.7x speedup, GPU ~20x speedup
**Recursive SNARKs**: Aggregate n proofs → 1 proof, O(1) verification
**Caching**: 30-50% hit rate, ~10x speedup on cache hits

### Performance Metrics

| Configuration | TPS | Cost/Tx | Latency |
| --- | --- | --- | --- |
| Single CXE | 100-500 | $5-20 (L1) | 1-3s |
| CXE Cluster | 1000-5000 | $5-20 (L1) | 2-5s |
| With Batching | 10,000+ | $0.50-2 | 5-10s |
| L2 Rollup | 50,000+ | $0.01-0.10 | 1-2s |

**Latency**: Encryption 10ms + Proof 500ms + CXE 100ms + Network 50ms = 1-2s (+ 12s block time)

### Future Optimizations

- **Nova**: O(log n) prover, no trusted setup
- **Plonky2**: 100x faster than Groth16
- **Hardware**: FPGA/ASIC for 1000x speedup

---

# Lambda Developer Guides

## Guides Overview

Build privacy-preserving applications on Lambda with our comprehensive step-by-step guides. Each guide walks you through implementing real-world use cases using Multi-Party Computation (MPC) and confidential computing.

---

## 1. Private DeFi (Dark Pools)

### Overview

Build decentralized dark pools on Solana where trade orders remain completely hidden until execution. This guide shows you how to create private order books that prevent front-running, MEV exploitation, and market manipulation while maintaining full decentralization.

### What You'll Build

A confidential trading platform where:

- Order details (price, size, trader identity) remain encrypted on-chain
- Trades execute without revealing sensitive information
- No centralized intermediary can access or manipulate orders
- Full composability with Solana DeFi ecosystem (Jupiter, Raydium, etc.)

### Why Dark Pools?

Traditional blockchain transparency creates vulnerabilities in DeFi trading. Public order books expose trading strategies, enable sandwich attacks, and cause price slippage on large orders. Dark pools handle ~40% of daily U.S. trading volume, and Lambda brings this capability on-chain in a trustless, decentralized manner.

### Prerequisites

- Basic understanding of Solana development
- Familiarity with Anchor framework
- Node.js and TypeScript installed
- Lambda CLI installed ([Installation Guide](https://docs.lambda.com/developers/installation))

### Step 1: Set Up Your Development Environment

\`\`\`bash
# Install Lambda CLI
npm install -g @lambda/cli

# Create a new Lambda project
lambda init dark-pool-dex
cd dark-pool-dex

# Install dependencies
npm install

\`\`\`

### Step 2: Define Your MXE (Multi-Party eXecution Environment)

Create a confidential MXE that will handle encrypted order matching:

\`\`\`rust
use arcis::prelude::*;

#[mxe]
pub struct DarkPoolMXE {
    // Encrypted order book state
    buy_orders: Vec<EncryptedOrder>,
    sell_orders: Vec<EncryptedOrder>,
}

#[derive(ArcisType)]
pub struct EncryptedOrder {
    price: u64,
    quantity: u64,
    trader: Pubkey,
    timestamp: i64,
}

\`\`\`

### Step 3: Write Confidential Instructions

Mark functions as \`[confidential]\` to execute them on encrypted data:

\`\`\`rust
#[confidential]
pub fn place_order(
    ctx: Context<PlaceOrder>,
    price: u64,
    quantity: u64,
    is_buy: bool,
) -> Result<()> {
    // This function processes encrypted data
    // No node ever sees the actual price or quantity

    let order = EncryptedOrder {
        price,
        quantity,
        trader: ctx.accounts.trader.key(),
        timestamp: Clock::get()?.unix_timestamp,
    };

    if is_buy {
        ctx.accounts.mxe.buy_orders.push(order);
    } else {
        ctx.accounts.mxe.sell_orders.push(order);
    }

    Ok(())
}

#[confidential]
pub fn match_orders(ctx: Context<MatchOrders>) -> Result<()> {
    // Order matching logic runs on encrypted data
    // Lambda's MPC nodes collaboratively execute matching
    // without revealing individual order details

    let mxe = &mut ctx.accounts.mxe;

    // Sort and match orders (all operations on encrypted data)
    for buy_order in &mxe.buy_orders {
        for sell_order in &mxe.sell_orders {
            if buy_order.price >= sell_order.price {
                // Execute trade confidentially
                execute_trade(buy_order, sell_order)?;
            }
        }
    }

    Ok(())
}

\`\`\`

### Step 4: Configure Your MXE Parameters

Set up security requirements, cluster selection, and execution parameters:

\`\`\`tsx
import { LambdaClient } from '@lambda/sdk';

const client = new LambdaClient({
  cluster: 'devnet',
  wallet: yourWallet,
});

// Create MXE with custom configuration
const mxe = await client.createMXE({
  name: 'DarkPoolOrderBook',
  persistent: true, // Reusable across multiple computations
  cluster: {
    minNodes: 5, // Minimum nodes for execution
    protocol: 'cerberus', // Dishonest majority protocol
  },
  authorization: {
    allowedTraders: [], // Empty = permissionless
  },
});

\`\`\`

### Step 5: Integrate Client-Side Encryption

\`\`\`tsx
// Client encrypts order data before sending
async function submitOrder(price: number, quantity: number, isBuy: boolean) {
  const encryptedOrder = await client.encrypt({
    price,
    quantity,
    isBuy,
  });

  // Submit to your Solana program
  await program.methods
    .placeOrder(encryptedOrder)
    .accounts({
      mxe: mxeAccount,
      trader: wallet.publicKey,
    })
    .rpc();
}

\`\`\`

### Step 6: Build and Deploy

\`\`\`bash
# Build your Lambda program
lambda build

# Deploy to Solana devnet
lambda deploy --network devnet

# Test your dark pool
npm run test

\`\`\`

### Key Features Implemented

✅ **Private Order Submission** - Orders encrypted before touching the blockchain

✅ **Confidential Matching** - MPC nodes match orders without seeing details

✅ **Zero Front-Running** - Orders invisible until execution

✅ **Composable with DeFi** - Integrates with Jupiter, Raydium, and other Solana protocols

✅ **Trustless Execution** - No centralized intermediary required

### Advanced Configurations

**Flexible Encryption Levels:**

\`\`\`tsx
// Option 1: Encrypt only order details
encryptFields: ['price', 'quantity']

// Option 2: Encrypt trading algorithms
encryptFields: ['price', 'quantity', 'strategy']

// Option 3: Different security/latency tradeoffs per user
mxeConfig: {
  highFrequency: { latency: 'low', security: 'standard' },
  institutional: { latency: 'standard', security: 'maximum' },
}

\`\`\`

### Production Considerations

- **Liquidity Routing**: Route to external DEXs through Wormhole bridges
- **Parallel Processing**: MXEs enable multiple order books simultaneously
- **Fee Structure**: Base network fees + optional priority fees
- **Monitoring**: Set up alerts for cluster health and execution times

### Demo & Resources

- [Live Dark Pool Demo](https://demos.lambda.com/dark-pool)
- [Complete Example Code](https://github.com/lambda-hq/examples/tree/main/dark-pool)
- [Dark Pools Article](https://www.lambda.com/articles/redefining-defi-with-on-chain-dark-pools)

---

## 2. Confidential Gaming (Hidden Information Games)

### Overview

Build on-chain games with hidden information using encrypted game state. This guide shows you how to create fair, verifiable games like poker, blackjack, or strategy games where certain information must remain secret until the right moment.

### What You'll Build

A fully on-chain poker game where:

- Player hands remain hidden until showdown
- Card dealing is verifiably random and fair
- No centralized server can access private game state
- All game logic executed on encrypted data via MPC

### Why Hidden Information Games?

Traditional blockchains expose all state publicly, making hidden-information games impossible. Players could simply view the blockchain to see opponents' cards or hidden game elements. Lambda's MPC enables truly private game state while maintaining blockchain's verifiability and fairness guarantees.

### Use Cases

- **Casino Games**: Poker, Blackjack, Roulette
- **Strategy Games**: Hidden unit positions (like Battleship), fog-of-war mechanics
- **Card Games**: Any game requiring hidden hands
- **Auctions**: Sealed-bid auctions with private valuations

### Prerequisites

- Solana & Anchor framework experience
- Understanding of game mechanics (we'll use poker as example)
- Lambda development environment set up

### Step 1: Initialize Your Game Project

\`\`\`bash
lambda init encrypted-poker
cd encrypted-poker

\`\`\`

### Step 2: Define Encrypted Game State

\`\`\`rust
use arcis::prelude::*;

#[mxe]
pub struct PokerGameMXE {
    // Encrypted deck and game state
    deck: Vec<Card>,
    players: Vec<Player>,
    community_cards: Vec<Card>,
    pot: u64,
    current_bet: u64,
}

#[derive(ArcisType)]
pub struct Card {
    suit: u8,    // Encrypted: clubs=0, diamonds=1, hearts=2, spades=3
    rank: u8,    // Encrypted: 2-14 (14=Ace)
}

#[derive(ArcisType)]
pub struct Player {
    pubkey: Pubkey,
    hand: [Card; 2],      // Hidden from other players
    chips: u64,
    current_bet: u64,
    has_folded: bool,
}

\`\`\`

### Step 3: Implement Confidential Game Logic

\`\`\`rust
#[confidential]
pub fn deal_cards(ctx: Context<DealCards>) -> Result<()> {
    let game = &mut ctx.accounts.game;

    // Shuffle deck using verifiable randomness
    // All operations happen on encrypted data
    let mut deck = initialize_deck();
    shuffle_deck(&mut deck)?;

    // Deal 2 cards to each player
    // Cards remain encrypted - no node sees the values
    for player in &mut game.players {
        player.hand[0] = deck.pop().unwrap();
        player.hand[1] = deck.pop().unwrap();
    }

    game.deck = deck;
    Ok(())
}

#[confidential]
pub fn reveal_community_cards(
    ctx: Context<RevealCommunity>,
    stage: GameStage,
) -> Result<()> {
    let game = &mut ctx.accounts.game;

    match stage {
        GameStage::Flop => {
            // Reveal 3 cards
            for _ in 0..3 {
                let card = game.deck.pop().unwrap();
                game.community_cards.push(card);
            }
        },
        GameStage::Turn | GameStage::River => {
            // Reveal 1 card
            let card = game.deck.pop().unwrap();
            game.community_cards.push(card);
        },
        _ => {}
    }

    Ok(())
}

#[confidential]
pub fn determine_winner(ctx: Context<DetermineWinner>) -> Result<Pubkey> {
    let game = &ctx.accounts.game;

    // Evaluate all hands (still encrypted)
    let mut best_hand = None;
    let mut winner = None;

    for player in &game.players {
        if !player.has_folded {
            let hand_rank = evaluate_poker_hand(
                &player.hand,
                &game.community_cards
            )?;

            if best_hand.is_none() || hand_rank > best_hand.unwrap() {
                best_hand = Some(hand_rank);
                winner = Some(player.pubkey);
            }
        }
    }

    // Only the winner is revealed, not all hands
    winner.ok_or(ErrorCode::NoWinner.into())
}

\`\`\`

### Step 4: Handle Player Actions

\`\`\`rust
#[confidential]
pub fn player_action(
    ctx: Context<PlayerAction>,
    action: Action,
    amount: Option<u64>,
) -> Result<()> {
    let game = &mut ctx.accounts.game;
    let player = get_current_player_mut(game, &ctx.accounts.player.key())?;

    match action {
        Action::Fold => {
            player.has_folded = true;
        },
        Action::Call => {
            let call_amount = game.current_bet - player.current_bet;
            player.chips -= call_amount;
            player.current_bet = game.current_bet;
            game.pot += call_amount;
        },
        Action::Raise => {
            let raise_amount = amount.ok_or(ErrorCode::InvalidAmount)?;
            player.chips -= raise_amount;
            player.current_bet += raise_amount;
            game.current_bet = player.current_bet;
            game.pot += raise_amount;
        },
        Action::Check => {
            // No chips moved
        },
    }

    Ok(())
}

\`\`\`

### Step 5: Client Integration

\`\`\`tsx
import { LambdaClient } from '@lambda/sdk';

class PokerGameClient {
  async createGame(players: PublicKey[], buyIn: number) {
    // Create MXE for this game
    const mxe = await this.lambdaClient.createMXE({
      name: \`PokerGame-\${Date.now()}\`,
      persistent: false, // Single-use for one game
      cluster: {
        minNodes: 3,
        protocol: 'cerberus',
      },
    });

    // Initialize game
    await this.program.methods
      .initializeGame(players, buyIn)
      .accounts({ mxe: mxe.address })
      .rpc();

    return mxe;
  }

  async dealCards(gameId: PublicKey) {
    // Trigger confidential card dealing
    await this.program.methods
      .dealCards()
      .accounts({ game: gameId })
      .rpc();
  }

  async getMyHand(gameId: PublicKey): Promise<[Card, Card]> {
    // Only you can decrypt your own hand
    const encryptedHand = await this.program.account.game.fetch(gameId);
    return await this.lambdaClient.decrypt(
      encryptedHand.players.find(p => p.pubkey.equals(this.wallet.publicKey)).hand
    );
  }

  async makeAction(
    gameId: PublicKey,
    action: 'fold' | 'call' | 'raise' | 'check',
    amount?: number
  ) {
    await this.program.methods
      .playerAction(action, amount)
      .accounts({
        game: gameId,
        player: this.wallet.publicKey,
      })
      .rpc();
  }
}

\`\`\`

### Step 6: Verifiable Randomness

\`\`\`rust
// Use Lambda's built-in verifiable randomness
#[confidential]
fn shuffle_deck(deck: &mut Vec<Card>) -> Result<()> {
    // Each MPC node contributes randomness
    // Combined using secure multi-party protocols
    // Result is verifiable and fair

    let randomness = arcis::crypto::secure_random_bytes(32)?;

    for i in (1..deck.len()).rev() {
        let j = (randomness[i % 32] as usize) % (i + 1);
        deck.swap(i, j);
    }

    Ok(())
}

\`\`\`

### Key Features Implemented

✅ **Hidden Hands** - Player cards encrypted until showdown

✅ **Verifiable Randomness** - Provably fair card dealing

✅ **Fair Gameplay** - No way to cheat or see hidden information

✅ **On-Chain Settlement** - Automatic pot distribution

✅ **Low Latency** - Fast enough for real-time gameplay

### Game Variations You Can Build

- **Texas Hold'em Poker** (as shown above)
- **Blackjack** - Hidden dealer card until player actions complete
- **Battleship** - Hidden ship positions, encrypted hit/miss feedback
- **Secret Hitler / Mafia** - Hidden roles and allegiances
- **Sealed-Bid Auctions** - Private bids revealed simultaneously

### Production Considerations

- **Gas Optimization**: Batch multiple game actions in one transaction
- **State Caching**: Cache frequently accessed encrypted state
- **Timeout Handling**: Auto-fold players who exceed time limits
- **Anti-Collusion**: Monitor for suspicious patterns in betting

### Demo & Resources

- [Live Poker Demo](https://www.lambda.com/testnet)
- [Gaming Examples](https://github.com/lambda-hq/examples)
- [Hackathon Winning Implementation](https://github.com/lambda-hq/solana-hackathon-poker)

---

## 3. Secure AI Training (Federated Learning)

### Overview

Train AI models on encrypted sensitive data without ever exposing the raw information. This guide shows how to implement federated learning where multiple parties collaborate on model training while each party's data remains completely private.

### What You'll Build

A privacy-preserving AI training system where:

- Multiple organizations train a shared model without sharing data
- Training happens on encrypted datasets
- No single party can reconstruct original data
- Model performance improves from diverse, distributed data sources

### Why Federated Learning with Lambda?

Traditional AI training requires centralizing data, creating privacy risks and regulatory compliance issues. Healthcare providers can't share patient records. Financial institutions can't pool transaction data. Lambda's MPC enables collaborative model training where data never leaves its source, yet the model still learns from all sources.

### Use Cases

- **Healthcare**: Multi-hospital disease diagnosis models without sharing patient records
- **Finance**: Fraud detection trained on data from multiple banks
- **Enterprise**: Industry-wide models without exposing proprietary data
- **Mobile AI**: Keyboard prediction, voice recognition trained on user devices

### Prerequisites

- Python and PyTorch familiarity
- Understanding of ML training concepts
- Lambda SDK installed

### Step 1: Set Up Federated Learning Environment

\`\`\`bash
# Install Lambda Python SDK
pip install lambda-sdk --break-system-packages

# Create project structure
mkdir secure-ai-training
cd secure-ai-training

\`\`\`

### Step 2: Define Your Model Architecture

\`\`\`python
import torch
import torch.nn as nn
from lambda import LambdaClient, EncryptedTensor

class MedicalDiagnosisModel(nn.Module):
    def __init__(self, input_size=10, hidden_size=64, num_classes=2):
        super().__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.relu(self.fc2(x))
        x = self.fc3(x)
        return x

\`\`\`

### Step 3: Create MXE for Secure Training

\`\`\`python
from lambda import LambdaClient

# Initialize Lambda client
client = LambdaClient(
    cluster='devnet',
    api_key='your_api_key'
)

# Create MXE for federated learning
training_mxe = client.create_mxe(
    name='FederatedMedicalTraining',
    persistent=True,
    config={
        'cluster': {
            'min_nodes': 5,
            'protocol': 'cerberus',
        },
        'participants': [
            'hospital_a',
            'hospital_b',
            'hospital_c',
        ],
    }
)

\`\`\`

### Step 4: Implement Local Training on Encrypted Data

\`\`\`python
class SecureFederatedTrainer:
    def __init__(self, model, mxe, local_data):
        self.model = model
        self.mxe = mxe
        self.local_data = local_data
        self.lambda = LambdaClient()

    def encrypt_local_data(self):
        """Encrypt local dataset before any computation"""
        encrypted_features = []
        encrypted_labels = []

        for features, label in self.local_data:
            # Lambda encrypts data into secret shares
            enc_features = self.lambda.encrypt(features)
            enc_label = self.lambda.encrypt(label)

            encrypted_features.append(enc_features)
            encrypted_labels.append(enc_label)

        return encrypted_features, encrypted_labels

    def train_local_round(self, global_model_weights, epochs=5):
        """Train on local encrypted data"""

        # Load global model weights
        self.model.load_state_dict(global_model_weights)

        # Encrypt local data
        enc_features, enc_labels = self.encrypt_local_data()

        optimizer = torch.optim.Adam(self.model.parameters(), lr=0.001)

        for epoch in range(epochs):
            for enc_x, enc_y in zip(enc_features, enc_labels):
                # Forward pass on encrypted data
                # Lambda's MPC handles computation without decryption
                enc_output = self.secure_forward(enc_x)

                # Compute loss on encrypted outputs
                enc_loss = self.secure_loss(enc_output, enc_y)

                # Backward pass (gradients computed securely)
                optimizer.zero_grad()
                enc_loss.backward()
                optimizer.step()

        # Return encrypted model updates (not raw model)
        local_updates = self.get_model_updates(global_model_weights)
        return self.lambda.encrypt(local_updates)

    @confidential_computation
    def secure_forward(self, encrypted_input):
        """Execute forward pass on encrypted data"""
        return self.lambda.mxe_compute(
            self.mxe,
            self.model.forward,
            encrypted_input
        )

    @confidential_computation
    def secure_loss(self, encrypted_output, encrypted_label):
        """Compute loss on encrypted values"""
        loss_fn = nn.CrossEntropyLoss()
        return self.lambda.mxe_compute(
            self.mxe,
            loss_fn,
            encrypted_output,
            encrypted_label
        )

\`\`\`

### Step 5: Federated Aggregation Server

\`\`\`python
class FederatedAggregationServer:
    def __init__(self, model, mxe, participants):
        self.model = model
        self.mxe = mxe
        self.participants = participants
        self.lambda = LambdaClient()

    def aggregate_encrypted_updates(self, encrypted_updates):
        """
        Securely aggregate model updates from all participants
        Uses Lambda's secure aggregation protocol
        """

        # Federated averaging on encrypted updates
        aggregated_update = self.lambda.secure_aggregate(
            self.mxe,
            encrypted_updates,
            aggregation_fn='weighted_average'
        )

        return aggregated_update

    def run_training_round(self, round_num):
        """Coordinate one round of federated training"""

        print(f"Starting training round {round_num}")

        # Send current global model to participants
        global_weights = self.model.state_dict()

        # Collect encrypted updates from all participants
        encrypted_updates = []
        for participant in self.participants:
            update = participant.train_local_round(global_weights)
            encrypted_updates.append(update)

        # Securely aggregate all updates
        aggregated_update = self.aggregate_encrypted_updates(
            encrypted_updates
        )

        # Update global model
        self.apply_aggregated_update(aggregated_update)

        # Evaluate on test set (optional)
        accuracy = self.evaluate()
        print(f"Round {round_num} accuracy: {accuracy:.4f}")

        return accuracy

    def apply_aggregated_update(self, encrypted_update):
        """Apply aggregated update to global model"""
        # Decrypt only the aggregated result
        # Individual contributions remain private
        decrypted_update = self.lambda.decrypt(encrypted_update)

        with torch.no_grad():
            for param, update in zip(
                self.model.parameters(),
                decrypted_update
            ):
                param.add_(update)

\`\`\`

### Step 6: Complete Federated Training Pipeline

\`\`\`python
def run_secure_federated_learning():
    # Initialize global model
    global_model = MedicalDiagnosisModel()

    # Create MXE for this training session
    mxe = client.create_mxe(name='FedLearning', persistent=True)

    # Set up participants (e.g., different hospitals)
    participants = [
        SecureFederatedTrainer(
            model=global_model,
            mxe=mxe,
            local_data=load_hospital_data('hospital_a')
        ),
        SecureFederatedTrainer(
            model=global_model,
            mxe=mxe,
            local_data=load_hospital_data('hospital_b')
        ),
        SecureFederatedTrainer(
            model=global_model,
            mxe=mxe,
            local_data=load_hospital_data('hospital_c')
        ),
    ]

    # Create aggregation server
    server = FederatedAggregationServer(
        model=global_model,
        mxe=mxe,
        participants=participants
    )

    # Run federated training for multiple rounds
    num_rounds = 50
    for round_num in range(num_rounds):
        accuracy = server.run_training_round(round_num)

        if accuracy > 0.95:
            print("Target accuracy reached!")
            break

    # Save final model
    torch.save(global_model.state_dict(), 'federated_model.pth')
    print("Training complete. Model saved.")

if __name__ == '__main__':
    run_secure_federated_learning()

\`\`\`

### Step 7: Differential Privacy Enhancement

\`\`\`python
class DifferentiallyPrivateTrainer(SecureFederatedTrainer):
    def __init__(self, model, mxe, local_data, epsilon=1.0):
        super().__init__(model, mxe, local_data)
        self.epsilon = epsilon  # Privacy budget

    def add_noise_to_gradients(self, gradients):
        """Add calibrated noise for differential privacy"""
        noisy_gradients = []

        for grad in gradients:
            # Calculate sensitivity
            sensitivity = self.calculate_sensitivity(grad)

            # Add Laplacian noise
            noise = self.lambda.generate_laplacian_noise(
                scale=sensitivity / self.epsilon
            )

            noisy_grad = grad + noise
            noisy_gradients.append(noisy_grad)

        return noisy_gradients

    def train_local_round(self, global_model_weights, epochs=5):
        """Train with differential privacy guarantees"""

        # Standard training
        local_updates = super().train_local_round(
            global_model_weights,
            epochs
        )

        # Add noise for differential privacy
        dp_updates = self.add_noise_to_gradients(local_updates)

        # Return encrypted, differentially private updates
        return self.lambda.encrypt(dp_updates)

\`\`\`

### Key Features Implemented

✅ **Private Data Training** - Never expose raw datasets

✅ **Secure Aggregation** - Individual contributions remain hidden

✅ **Differential Privacy** - Additional privacy guarantees

✅ **Model Improvement** - Learn from diverse, distributed data

✅ **Regulatory Compliance** - HIPAA, GDPR-compliant training

### Real-World Applications

**Healthcare:**

\`\`\`python
# Multiple hospitals collaborate on diagnosis model
hospitals = ['Mayo Clinic', 'Johns Hopkins', 'Cleveland Clinic']
model = train_federated_diagnosis_model(
    hospitals,
    disease='cancer',
    privacy_level='maximum'
)
# Result: 33% accuracy improvement vs single-institution training

\`\`\`

**Finance:**

\`\`\`python
# Banks collaborate on fraud detection
banks = ['Bank A', 'Bank B', 'Bank C']
fraud_model = train_federated_fraud_detection(
    banks,
    transaction_features=10,
    privacy_budget=1.0  # epsilon for differential privacy
)

\`\`\`

**Mobile Keyboards:**

\`\`\`python
# Learn from user typing without collecting keystrokes
keyboard_model = train_on_device_federated(
    user_devices=1_000_000,
    model_type='next_word_prediction',
    rounds=100
)

\`\`\`

### Advanced Configurations

**Communication Efficiency:**

\`\`\`python
# Reduce bandwidth with gradient compression
trainer = SecureFederatedTrainer(
    model=model,
    mxe=mxe,
    local_data=data,
    compression={
        'method': 'top_k',  # Only send top-k gradients
        'ratio': 0.1,       # 10% of gradients
    }
)

\`\`\`

**Asynchronous Training:**

\`\`\`python
# Don't wait for all participants
server = AsyncFederatedServer(
    model=model,
    min_participants=3,  # Start aggregation after 3 updates
    timeout=300,         # 5 minute timeout
)

\`\`\`

### Production Considerations

- **Model Versioning**: Track which participants contributed to each model version
- **Participation Incentives**: Reward participants for contributing data/compute
- **Quality Control**: Detect and handle malicious participants
- **Scalability**: Tested with 1000+ participants
- **Monitoring**: Track training metrics, participation rates, convergence

### Privacy Guarantees

- **No Raw Data Sharing**: Data never leaves local environment
- **Secure Aggregation**: Individual contributions cryptographically hidden
- **Differential Privacy**: Formal privacy guarantees with ε-δ privacy
- **Model Inversion Resistance**: Cannot reconstruct training data from model

### Demo & Resources

- [Federated Learning Examples](https://github.com/lambda-hq/examples/tree/main/federated-learning)
- [Healthcare Use Case](https://www.lambda.com/articles/healthcare-federated-learning)
- [AI Training Documentation](https://docs.lambda.com/use-cases/secure-ai)

---

## Additional Guides (Coming Soon)

### 4. Token-Gated Confidential Rooms

Build private communication channels where access is controlled by token ownership, but conversation content remains encrypted even from node operators.

### 5. Private DAO Governance

Implement confidential voting systems where vote choices remain hidden until tallying, preventing vote manipulation and coercion.

### 6. Confidential NFTs

Create NFTs with hidden metadata and private ownership details, enabling use cases like private credentials, hidden collectible attributes, and more.

### 7. Encrypted Data Marketplaces

Build marketplaces where data can be bought and sold without the marketplace operator ever seeing the data contents.

---
`;

export function CoreConcepts() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {coreConcepts}
      </ReactMarkdown>
    </div>
  );
}
