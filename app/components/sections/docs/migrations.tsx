import ReactMarkdown from "react-markdown";

const customComponents = {
  h1: ({ children }: any) => (
    <h1 className="text-4xl! font-bold mb-6! mt-8! text-gray-900">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-3xl! font-semibold mb-4! mt-8! text-gray-800 border-b border-gray-200 pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-2xl! font-medium mb-3! mt-6! text-gray-700">
      {children}
    </h3>
  ),
  h4: ({ children }: any) => (
    <h4 className="text-xl! font-medium mb-2! mt-4! text-gray-700">
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
  hr: () => <hr className="border-gray-300 my-8!" />,
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
  table: ({ children }: any) => (
    <div className="overflow-x-auto mb-4!">
      <table className="min-w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: any) => <tbody>{children}</tbody>,
  tr: ({ children }: any) => (
    <tr className="border-b border-gray-200">{children}</tr>
  ),
  th: ({ children }: any) => (
    <th className="px-4 py-2 text-left font-semibold text-gray-900 border border-gray-300">
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="px-4 py-2 text-gray-600 border border-gray-300">
      {children}
    </td>
  ),
};

const migrationsMarkdown = `
Lambda's latest stable version i.e. **2.x.x** is bringing groundbreaking advancements to confidential computing, including **zero-knowledge proof systems**, enhanced scalability, faster proof generation, reduced gas costs, and improved developer experience. To read more about the differences, please go through the following sections.

---

## Concepts

This section provides a brief overview of concepts which have changed between the old MPC-based SDK (v1 0.x.x) and the new ZK-based SDK (v2 2.x.x).

### What Changed?

Lambda v2 represents a fundamental shift from Multi-Party Computation (MPC) to Zero-Knowledge Proofs (ZK) as the core cryptographic primitive. This migration brings:

- **Verifiable Computation**: Every computation now generates cryptographic proofs
- **Reduced Trust Assumptions**: No need to trust majority of nodes
- **Better Performance**: Proof aggregation and recursive proofs enable higher throughput
- **Lower Costs**: Optimized proof systems reduce on-chain verification costs
- **Post-Quantum Security**: Support for zkSTARK protocols

### Key Terminology Changes

| v1 (MPC-based) | v2 (ZK-based) | Description |
| --- | --- | --- |
| MXE (Multi-Party eXecution Environment) | ZXE (Zero-Knowledge eXecution Environment) | Virtual environments for confidential computation |
| Arx Node | Lambda Node | Decentralized compute nodes |
| MPC Protocol | Proof System | Cryptographic protocol (zkSNARK/zkSTARK) |
| Secret Sharing | Homomorphic Encryption + ZK | Data encryption method |
| arxOS | LambdaOS | Distributed operating system |
| Arcis | ZKScript | Developer framework and DSL |
| Cerberus/Manticore | Groth16/PLONK/Halo2/STARKs | Protocol implementations |

### Architecture Evolution

**v1 Architecture (MPC-based):**

\`\`\`
Client → Encrypt Data → MXE → Arx Nodes (MPC) → Collaborative Computation → Result

\`\`\`

**v2 Architecture (ZK-based):**

\`\`\`
Client → Encrypt Data → ZXE → Lambda Nodes → Generate ZK Proofs → Verify Proofs → Result

\`\`\`

### New Concepts in v2

### Zero-Knowledge Proofs (ZKP)

Cryptographic proofs that allow verification of computation correctness without revealing the underlying data.

### Proof Systems

Multiple ZK proof systems supported:

- **Groth16**: Ultra-compact proofs, fastest verification
- **PLONK**: Universal setup, flexible circuits
- **Halo2**: No trusted setup, recursive proofs
- **FRI-STARKs**: Transparent, post-quantum secure

### Recursive Proofs

Proofs that verify other proofs, enabling proof compression and aggregation.

### zkEVM Compatibility

Execute Ethereum bytecode inside zero-knowledge proofs for privacy-preserving smart contracts.

### VRF (Verifiable Random Function)

Cryptographically secure randomness generation with zero-knowledge proofs.

---

## Walkthrough

This section provides a step-by-step guide on transitioning your current JavaScript, React, Python, and Rust SDK from v1 version **0.x.x** to the updated v2 **2.x.x** version.

### JavaScript/TypeScript Migration

### Installation

**v1 (Old):**

\`\`\`bash
npm install @arcium/sdk@0.x.x

\`\`\`

**v2 (New):**

\`\`\`bash
npm install @lambda/sdk@2.x.x

\`\`\`

### Client Initialization

**v1 (MPC-based):**

\`\`\`tsx
import { ArciumClient } from '@arcium/sdk';

const client = new ArciumClient({
  cluster: 'devnet',
  wallet: yourWallet,
});

\`\`\`

**v2 (ZK-based):**

\`\`\`tsx
import { LambdaClient } from '@lambda/sdk';

const client = new LambdaClient({
  cluster: 'devnet',
  wallet: yourWallet,
  proofSystem: 'groth16', // New: specify proof system
});

\`\`\`

### Creating Execution Environments

**v1 (MXE):**

\`\`\`tsx
const mxe = await client.createMXE({
  name: 'MyComputation',
  persistent: true,
  cluster: {
    minNodes: 5,
    protocol: 'cerberus', // MPC protocol
  },
});

\`\`\`

**v2 (ZXE with ZK Proofs):**

\`\`\`tsx
const zxe = await client.createZXE({
  name: 'MyComputation',
  persistent: true,
  cluster: {
    minNodes: 3, // Fewer nodes needed with ZK
    proofSystem: 'groth16', // ZK proof system
  },
  zkConfig: {
    circuitSize: 'medium',
    recursiveDepth: 2,
    aggregation: true, // Enable proof aggregation
  },
});

\`\`\`

### Confidential Functions

**v1 (MPC):**

\`\`\`rust
// Rust code
#[confidential]
pub fn process_data(ctx: Context<ProcessData>, data: u64) -> Result<()> {
    // MPC nodes collaboratively compute
    let result = ctx.accounts.mxe.compute(data)?;
    Ok(())
}

\`\`\`

**v2 (ZK Proofs):**

\`\`\`rust
// Rust code
#[confidential]
#[zkproof(snark = "groth16")] // New: specify proof system
pub fn process_data(ctx: Context<ProcessData>, data: u64) -> Result<()> {
    // Lambda nodes generate ZK proof of correct execution
    let result = ctx.accounts.zxe.compute(data)?;

    // Automatically generates and submits proof
    Ok(())
}

\`\`\`

### Encryption Methods

**v1 (Secret Sharing):**

\`\`\`tsx
const encrypted = await client.encrypt(data);
// Data split into secret shares across nodes

\`\`\`

**v2 (Homomorphic Encryption + ZK):**

\`\`\`tsx
const encrypted = await client.homomorphicEncrypt(data);
// Data encrypted with homomorphic scheme
// Computation generates ZK proofs of correctness

\`\`\`

### Proof Verification (New in v2)

\`\`\`tsx
// Verify a ZK proof
const isValid = await client.verifyProof({
  proof: computationProof,
  publicInputs: {
    resultHash: '0x...',
    timestamp: Date.now(),
  },
  proofSystem: 'groth16',
});

console.log('Proof valid:', isValid);

\`\`\`

### React Migration

### Hooks Changes

**v1 (MPC):**

\`\`\`tsx
import { useArcium, useMXE } from '@arcium/react';

function MyComponent() {
  const { client } = useArcium();
  const { mxe, compute } = useMXE(mxeId);

  const handleCompute = async () => {
    await compute(data);
  };

  return <button onClick={handleCompute}>Compute</button>;
}

\`\`\`

**v2 (ZK with Proof Verification):**

\`\`\`tsx
import { useLambda, useZXE, useProofVerifier } from '@lambda/react';

function MyComponent() {
  const { client } = useLambda();
  const { zxe, compute, proof } = useZXE(zxeId);
  const { verifyProof, isVerified } = useProofVerifier();

  const handleCompute = async () => {
    const result = await compute(data);
    await verifyProof(result.proof); // New: verify proof
  };

  return (
    <div>
      <button onClick={handleCompute}>Compute</button>
      {isVerified && <span>✓ Proof Verified</span>}
    </div>
  );
}

\`\`\`

### New Hooks in v2

**useProofVerifier**

\`\`\`tsx
const {
  verifyProof,
  isVerified,
  verificationTime
} = useProofVerifier();

\`\`\`

**useZKCircuit**

\`\`\`tsx
const {
  circuit,
  compileCircuit,
  circuitSize
} = useZKCircuit(zxeId);

\`\`\`

**useProofAggregator**

\`\`\`tsx
const {
  aggregateProofs,
  aggregatedProof
} = useProofAggregator();

\`\`\`

### Python Migration

### Installation

**v1:**

\`\`\`bash
pip install arcium-sdk==0.x.x

\`\`\`

**v2:**

\`\`\`bash
pip install lambda-sdk==2.x.x

\`\`\`

### Client Setup

**v1 (MPC):**

\`\`\`python
from arcium import ArciumClient

client = ArciumClient(
    cluster='devnet',
    api_key='your_key'
)

mxe = client.create_mxe(
    name='MyComputation',
    protocol='cerberus'
)

\`\`\`

**v2 (ZK):**

\`\`\`python
from lambda_sdk import LambdaClient, ProofSystem

client = LambdaClient(
    cluster='devnet',
    api_key='your_key',
    default_proof_system=ProofSystem.GROTH16
)

zxe = client.create_zxe(
    name='MyComputation',
    proof_system=ProofSystem.GROTH16,
    zk_config={
        'aggregation': True,
        'recursive': True,
    }
)

\`\`\`

### Computation with Proof Generation

**v1:**

\`\`\`python
result = mxe.compute(encrypted_data)

\`\`\`

**v2:**

\`\`\`python
# Compute and generate proof
result, proof = zxe.compute_with_proof(encrypted_data)

# Verify proof
is_valid = client.verify_proof(proof)
print(f"Proof valid: {is_valid}")

\`\`\`

### Rust Migration

### Dependencies Update

**v1 (Cargo.toml):**

\`\`\`toml
[dependencies]
arcium-sdk = "0.x.x"
arcis = "0.x.x"

\`\`\`

**v2 (Cargo.toml):**

\`\`\`toml
[dependencies]
lambda-sdk = "2.x.x"
zkscript = "2.x.x"  # Replaces arcis

\`\`\`

### Framework Changes

**v1:**

\`\`\`rust
use arcis::prelude::*;

#[mxe]
pub struct MyMXE {
    data: Vec<u64>,
}

#[confidential]
pub fn process(ctx: Context<Process>) -> Result<()> {
    // MPC computation
    Ok(())
}

\`\`\`

**v2:**

\`\`\`rust
use zkscript::prelude::*;

#[zxe]
pub struct MyZXE {
    data: Vec<u64>,
}

#[confidential]
#[zkproof(snark = "groth16", public_inputs = ["result"])]
pub fn process(ctx: Context<Process>) -> Result<()> {
    // ZK proof generation
    // Automatically creates circuit and generates proof
    Ok(())
}

\`\`\`

---

## Protocol Comparison

### Performance Benchmarks

| Operation | v1 (MPC) | v2 (ZK - Groth16) | v2 (ZK - PLONK) | v2 (ZK - STARK) |
| --- | --- | --- | --- | --- |
| Computation Time | 500ms | 200ms | 500ms | 2000ms |
| Proof Generation | N/A | 200ms | 500ms | 2000ms |
| Proof Size | N/A | 192 bytes | 400 bytes | 45 KB |
| Verification Time | N/A | 5ms | 10ms | 15ms |
| On-Chain Cost | Medium | Very Low | Low | Medium |
| Trust Assumptions | Honest Majority | Trusted Setup | Universal Setup | Transparent |

### When to Use Which Proof System?

**Groth16:**

- ✅ Fastest verification
- ✅ Smallest proofs
- ✅ Lowest gas costs
- ❌ Requires trusted setup per circuit
- **Use for**: High-frequency trading, gaming, real-time applications

**PLONK:**

- ✅ Universal trusted setup (one-time)
- ✅ Flexible circuits
- ✅ Good performance
- **Use for**: General-purpose applications, DeFi protocols

**Halo2:**

- ✅ No trusted setup
- ✅ Recursive proofs
- ✅ IPA-based
- **Use for**: Privacy-preserving rollups, complex circuits

**FRI-STARKs:**

- ✅ Transparent (no trusted setup)
- ✅ Post-quantum secure
- ✅ Best security guarantees
- ❌ Larger proofs
- **Use for**: Long-term security, compliance-heavy applications

---

## Migration Checklist

### Before Migration

- [ ]  Review your current MPC implementation
- [ ]  Identify which proof system best fits your use case
- [ ]  Understand trust assumptions of your chosen proof system
- [ ]  Test proof generation times with your circuit complexity
- [ ]  Estimate gas costs for on-chain proof verification

### During Migration

- [ ]  Update SDK dependencies to v2
- [ ]  Rename MXE → ZXE throughout codebase
- [ ]  Replace MPC protocols with ZK proof systems
- [ ]  Add \`#[zkproof]\` attributes to confidential functions
- [ ]  Update client initialization with proof system configuration
- [ ]  Implement proof verification logic
- [ ]  Test proof generation and verification flows

### After Migration

- [ ]  Verify all proofs are being generated correctly
- [ ]  Monitor proof generation performance
- [ ]  Check on-chain gas costs for proof verification
- [ ]  Update documentation to reflect ZK terminology
- [ ]  Train team on new ZK concepts
- [ ]  Set up monitoring for proof verification failures

---

## Breaking Changes

### Removed Features

**1. MPC Protocols (Cerberus, Manticore)**

- **Reason**: Replaced by ZK proof systems
- **Migration**: Use Groth16, PLONK, Halo2, or STARKs

**2. Secret Sharing API**

- **Reason**: Replaced by homomorphic encryption + ZK
- **Migration**: Use \`client.homomorphicEncrypt()\`

**3. Threshold Encryption without Proofs**

- **Reason**: All operations now generate proofs
- **Migration**: No action needed, proofs generated automatically

### Deprecated APIs

**1. \`createMXE()\` → \`createZXE()\`**

\`\`\`tsx
// Old (deprecated)
const mxe = await client.createMXE({...});

// New
const zxe = await client.createZXE({...});

\`\`\`

**2. \`@confidential\` without proof spec**

\`\`\`rust
// Old (deprecated)
#[confidential]
pub fn process() -> Result<()> { }

// New (specify proof system)
#[confidential]
#[zkproof(snark = "groth16")]
pub fn process() -> Result<()> { }

\`\`\`

**3. Node Trust Configuration**

\`\`\`tsx
// Old (MPC trust model)
cluster: {
  trustModel: 'dishonest-majority',
  protocol: 'cerberus'
}

// New (ZK proof system)
cluster: {
  proofSystem: 'groth16',
  verificationMode: 'on-chain'
}

\`\`\`

---

## New Features in v2

### 1. Proof Aggregation

Combine multiple proofs into a single compact proof:

\`\`\`tsx
const aggregatedProof = await client.aggregateProofs({
  proofs: [proof1, proof2, proof3, ...proof100],
  aggregationType: 'recursive',
  finalProofSystem: 'groth16',
});

// Verify single aggregated proof instead of 100 individual proofs
const isValid = await client.verifyProof(aggregatedProof);

\`\`\`

### 2. Recursive Proofs

Generate proofs that verify other proofs:

\`\`\`tsx
const zxe = await client.createZXE({
  zkConfig: {
    recursive: true,
    recursionDepth: 3,
  },
});

\`\`\`

### 3. zkEVM Support

Run Ethereum smart contracts with privacy:

\`\`\`tsx
const zkEVM = await client.createZkEVM({
  bytecode: evmBytecode,
  proofSystem: 'plonk',
});

const result = await zkEVM.execute(calldata);
// Result includes ZK proof of correct execution

\`\`\`

### 4. VRF (Verifiable Random Function)

Generate provably random values:

\`\`\`rust
#[confidential]
#[zkproof(vrf = true)]
pub fn generate_random() -> Result<[u8; 32]> {
    let randomness = zkscript::crypto::vrf_random()?;
    Ok(randomness)
}

\`\`\`

### 5. Proof Verification API

Public endpoint to verify proofs:

\`\`\`tsx
// Anyone can verify proofs
const response = await fetch('https://api.lambda.com/verify-proof', {
  method: 'POST',
  body: JSON.stringify({
    proof: myProof,
    publicInputs: {...},
  }),
});

const { isValid, verificationTime } = await response.json();

\`\`\`

### 6. Circuit Compilation Cache

Reuse compiled circuits across executions:

\`\`\`tsx
const zxe = await client.createZXE({
  circuitCache: true, // Cache compiled circuits
  circuitCacheTTL: 3600, // 1 hour
});

\`\`\`

---
`;

export function Migrations() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {migrationsMarkdown}
      </ReactMarkdown>
    </div>
  );
}
