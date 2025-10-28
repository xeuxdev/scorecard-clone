import { useState, useMemo } from "react";

// Parse glossary content from markdown format
const parseGlossaryContent = () => {
  const content = `ABE (Attribute-Based Encryption)|A form of public-key encryption where ciphertext and private keys are based on attributes. Used in Lambda for conditional access policies to encrypted data.|Cryptography
AES-256-GCM (Advanced Encryption Standard - Galois/Counter Mode)|Symmetric encryption standard with 256-bit keys providing confidentiality and authentication. Lambda achieves 1GB/s throughput with this encryption method.|Cryptography
AMD SEV (Secure Encrypted Virtualization)|AMD's technology for full virtual machine memory encryption, used in Lambda's Trusted Execution Environment infrastructure.|Infrastructure
Arithmetization|The process of converting logic gates into arithmetic circuits over finite fields (BN254/BLS12-381), essential for zero-knowledge proof generation.|Zero-Knowledge Proofs
Beaver Triples|Pre-computed values used in Multi-Party Computation protocols for efficient multiplication operations without revealing secret values.|MPC
BFT (Byzantine Fault Tolerance)|Ability to tolerate f < n/3 malicious nodes in a distributed system. Lambda uses PBFT/Tendermint consensus with 3-second block times.|Consensus
BGW (Ben-Or, Goldwasser, and Wigderson)|An information-theoretic secure MPC protocol used in Lambda's compute engine.|MPC
BLS12-381|An elliptic curve used for pairing-based cryptography, threshold signatures, and zero-knowledge proofs. Provides efficient aggregate attestations.|Cryptography
BN254|An elliptic curve optimized for pairing operations, commonly used in zkSNARK verification on Ethereum.|Cryptography
Bulletproofs|A zero-knowledge proof protocol for range proofs with O(log n) size. Lambda uses 672-byte proofs for 64-bit ranges with 10ms proving time.|Zero-Knowledge Proofs
Cairo|A domain-specific language for writing circuits that can be compiled into zero-knowledge proofs.|Languages
Circom|A circuit compiler language for creating arithmetic circuits used in zkSNARK generation.|Languages
Cipher Framework|Lambda's Rust-based domain-specific language (DSL) for writing confidential smart contracts with familiar syntax.|Framework
CXE (Confidential Execution Environment)|Isolated computation environments where encrypted data is processed securely using TEEs and MPC protocols. Lambda's core privacy infrastructure.|Infrastructure
dApps (Decentralized Applications)|Blockchain-based applications that Lambda enables to be privacy-preserving through SDK integration.|Applications
Dark Pools|Private trading venues where transactions are executed without revealing positions or strategies, a key use case for Lambda.|Use Cases
DCAP (Data Center Attestation Primitives)|Intel's protocol for remote attestation used to verify code integrity in SGX enclaves.|Attestation
DeFi (Decentralized Finance)|Financial applications on blockchain that Lambda enables with privacy features like confidential trading and lending.|Applications
ECDSA (Elliptic Curve Digital Signature Algorithm)|Digital signature scheme using secp256k1 curve for signing key material. Lambda uses threshold ECDSA for MPC key sharing.|Cryptography
EdDSA (Edwards-curve Digital Signature Algorithm)|Modern elliptic curve signature scheme used for signing encryption key material in Lambda.|Cryptography
EIP-1559|Ethereum Improvement Proposal for transaction fee mechanism used in Lambda's blockchain submissions.|Ethereum
EIP-4844|Ethereum's blob transactions used in Lambda's Layer 2 rollup batched updates for cost efficiency ($0.01 per update).|Ethereum
FHE (Fully Homomorphic Encryption)|Encryption allowing computations on ciphertext without decryption. Lambda uses TFHE-rs with 128-bit security for arithmetic operations.|Encryption
Fiat-Shamir Transform|Cryptographic technique converting interactive protocols to non-interactive ones, used in Lambda's ZK proof generation.|Zero-Knowledge Proofs
FIPS 140-2|Federal security standard for cryptographic modules. Lambda uses FIPS-certified hardware RNG for entropy generation.|Standards
Garbled Circuits|A cryptographic protocol for secure two-party computation used in Lambda's MPC coordinator.|MPC
Groth16|Fast zkSNARK protocol producing ~200-300 byte constant-size proofs. Lambda achieves 0.5-2s proving time with 240K-350K gas verification cost.|Zero-Knowledge Proofs
HKDF (HMAC-based Key Derivation Function)|Cryptographic key derivation: master key → application keys → data-specific keys. Used throughout Lambda's encryption pipeline.|Cryptography
HSM (Hardware Security Module)|Secure cryptographic hardware for key storage. Lambda supports HSM or WebCrypto API for key management.|Infrastructure
Intel SGX (Software Guard Extensions)|Intel's Trusted Execution Environment technology providing 128MB-256GB encrypted memory enclaves for secure computation.|Infrastructure
IPFS (InterPlanetary File System)|Decentralized storage system used by Lambda for storing encrypted state tree leaves.|Storage
IVC (Incrementally Verifiable Computation)|Technique for proving long computations incrementally, supported by Lambda's recursive proof systems.|Zero-Knowledge Proofs
KZG (Kate-Zaverucha-Goldberg) Commitments|Polynomial commitment scheme used in Lambda's zero-knowledge proof creation.|Cryptography
Lambda SDK|The core developer toolkit providing high-level APIs that abstract cryptographic operations for building privacy-preserving applications.|Framework
Lagrange Interpolation|Mathematical method for reconstructing secrets from threshold shares in MPC computations.|MPC
MEE (Memory Encryption Engine)|Hardware component providing AES-128-GCM memory encryption in Intel SGX environments.|Infrastructure
Merkle Root|The top hash of a Merkle tree, stored on-chain (32 bytes) while encrypted leaves remain off-chain.|Data Structures
MessagePack|Binary serialization format used alongside Protobuf for efficient data encoding in Lambda.|Serialization
NFTs (Non-Fungible Tokens)|Unique digital assets that Lambda enables with privacy features like sealed-bid auctions and hidden ownership.|Use Cases
NIZK (Non-Interactive Zero-Knowledge)|Zero-knowledge proofs that don't require back-and-forth communication. Lambda generates NIZK proofs of encryption well-formedness.|Zero-Knowledge Proofs
Noir|A domain-specific language for writing zero-knowledge circuits, supported by Lambda's proof generation system.|Languages
Nova|A recursive zkSNARK system providing O(1) proof sizes for incrementally verifiable computation.|Zero-Knowledge Proofs
ORAM (Oblivious RAM)|Memory access pattern hiding technique used in Lambda's CXE for side-channel resistance.|Security
PBFT (Practical Byzantine Fault Tolerance)|Consensus protocol used in Lambda's CXE clusters for Byzantine fault tolerance.|Consensus
PLONK|Universal setup zkSNARK with custom gates, requiring ~350K gas for verification. More flexible than Groth16.|Zero-Knowledge Proofs
Poseidon Hash|ZK-friendly hash function that's 8x faster than SHA-256 in SNARKs, used for internal nodes in Lambda's state trees.|Cryptography
Powers of Tau Ceremony|Trusted setup process for generating proving/verifying keys in zkSNARK systems.|Zero-Knowledge Proofs
Protobuf (Protocol Buffers)|Binary serialization format used for efficient data encoding in Lambda's SDK.|Serialization
R1CS (Rank-1 Constraint System)|Mathematical representation of computations as quadratic equations: A·w ⊙ B·w = C·w. Used in zkSNARK circuit compilation.|Zero-Knowledge Proofs
Recursive Proofs|Proof-of-proof technique enabling scalability through nested verification, supported via Nova in Lambda.|Zero-Knowledge Proofs
Remote Attestation|Cryptographic process to verify code integrity in TEEs using SGX quotes or AMD SEV, ensuring trusted execution.|Attestation
Ring-LWE (Ring Learning With Errors)|Lattice-based cryptographic assumption providing security for TFHE homomorphic encryption.|Cryptography
Sealed-Bid Auction|Auction type where bids remain private until reveal, a key privacy use case enabled by Lambda.|Use Cases
Secret Sharing|Cryptographic technique splitting data into shares where threshold t out of n shares can reconstruct the original. Lambda uses additive shares over finite fields.|Cryptography
secp256k1|Elliptic curve used in ECDSA signatures, particularly common in blockchain applications.|Cryptography
Semantic Security|Cryptographic property ensuring identical plaintexts produce different ciphertexts, achieved through unique nonces/IVs.|Cryptography
SGX (Software Guard Extensions)|See Intel SGX.|Infrastructure
SHA-256 (Secure Hash Algorithm 256-bit)|Cryptographic hash function used for key commitment hashes and Merkle roots in Lambda.|Cryptography
Shamir's Secret Sharing|(t, n)-threshold cryptographic scheme where t = ⌈2n/3⌉ shares can reconstruct a secret. Used in Lambda's CXE security.|Cryptography
Soundness|Zero-knowledge proof property ensuring false statements cannot be proven. Lambda achieves 2⁻¹²⁸ forgery probability.|Zero-Knowledge Proofs
Sparse Merkle Tree|Binary tree structure with 256 levels supporting 2²⁵⁶ possible keys, used for Lambda's private state management.|Data Structures
SPDZ|Malicious-secure Multi-Party Computation protocol used in Lambda's compute engine.|MPC
STARKs (Scalable Transparent Arguments of Knowledge)|Zero-knowledge proofs without trusted setup, post-quantum secure, producing 50-200KB proofs. Supported by Lambda.|Zero-Knowledge Proofs
TEE (Trusted Execution Environment)|Secure hardware enclave providing isolated computation. Lambda uses Intel SGX and AMD SEV for confidential execution.|Infrastructure
Tendermint|Byzantine fault tolerant consensus protocol used in Lambda's CXE clusters.|Consensus
TFHE (Torus Fully Homomorphic Encryption)|FHE scheme supporting unlimited computation depth through bootstrapping. Lambda uses TFHE-rs with 128-bit security.|Encryption
Threshold Cryptography|Cryptographic systems requiring cooperation of t out of n parties. Lambda uses threshold encryption with t = ⌈n/2⌉+1.|Cryptography
TLS 1.3 (Transport Layer Security)|Modern encrypted communication protocol ensuring secure channels between CXE nodes with 1-10 MB/s bandwidth.|Security
Trusted Setup|Ceremony generating proving/verifying keys for certain zkSNARK systems like Groth16. PLONK has universal setup; STARKs require none.|Zero-Knowledge Proofs
TypeScript SDK|Lambda's primary SDK providing complete API documentation and client libraries for seamless blockchain integration.|Framework
WASM (WebAssembly)|Bytecode format used to package confidential computations for CXE deployment.|Serialization
WebCrypto API|Browser-based cryptographic API supported by Lambda for key storage as an alternative to HSM.|Infrastructure
Witness|Private inputs assigned to constraint variables in zero-knowledge proofs, satisfying the R1CS equations.|Zero-Knowledge Proofs
Zero-Knowledge Proofs (ZK Proofs)|Cryptographic protocols proving statements about private data without revealing the data itself. Core to Lambda's privacy architecture.|Zero-Knowledge Proofs
zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge)|Compact zero-knowledge proofs with constant size (~200-300 bytes) and fast verification. Lambda supports Groth16 and PLONK variants.|Zero-Knowledge Proofs
zk-STARKs (Zero-Knowledge Scalable Transparent Arguments of Knowledge)|Zero-knowledge proofs without trusted setup, larger than SNARKs but transparent and post-quantum secure.|Zero-Knowledge Proofs`;

  return content
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const [title, contentText, category] = line.split("|");
      return {
        id: title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, ""),
        title: title.trim(),
        content: contentText.trim(),
        category: category.trim(),
      };
    });
};

const glossaryTerms = parseGlossaryContent();

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(glossaryTerms.map((term) => term.category))),
  ].sort();

  // Filter terms based on search and category
  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get category color - matching the website's design system
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Testing: "bg-blue-500/10 text-blue-600 border-blue-300",
      Evaluation: "bg-indigo-500/10 text-indigo-600 border-indigo-300",
      Data: "bg-purple-500/10 text-purple-600 border-purple-300",
      "Quality Assurance":
        "bg-emerald-500/10 text-emerald-600 border-emerald-300",
      Metrics: "bg-orange-500/10 text-orange-600 border-orange-300",
      Monitoring: "bg-rose-500/10 text-rose-600 border-rose-300",
      Performance: "bg-cyan-500/10 text-cyan-600 border-cyan-300",
      Techniques: "bg-amber-500/10 text-amber-600 border-amber-300",
      "Core Concepts": "bg-slate-500/10 text-slate-600 border-slate-300",
      Business: "bg-green-500/10 text-green-600 border-green-300",
    };
    return colors[category] || "bg-gray-500/10 text-gray-600 border-gray-300";
  };

  return (
    <main className="main-wrapper">
      <section className="py-20 md:py-32">
        <div className="padding-global">
          <div className="container-xlarge">
            {/* Header */}
            <div fade-in="" className="mb-20 text-center">
              <div className="section-heading-main">
                <div className="section-heading-main_content text-wrap-balance">
                  <h1 className="section-heading-main_text heading-style-h2">
                    AI Testing Glossary
                  </h1>
                </div>
                <div className="section-heading-main_content max-40ch">
                  <p className="section-heading-main_text text-size-xsmall text-left">
                    Essential terms and concepts for understanding AI
                    evaluation, testing, and quality assurance in modern product
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex flex-col gap-8 mb-16">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto w-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 pointer-events-none">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  placeholder="Search terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-white placeholder:text-gray-400 transition-all focus:outline-none focus:border-gray-900 focus:ring-3 focus:ring-gray-900/10"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white! border-gray-900"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-12 text-gray-600 text-sm">
              <p>
                Showing {filteredTerms.length} of {glossaryTerms.length} terms
              </p>
            </div>

            {/* Terms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {filteredTerms.map((term) => (
                <div
                  key={term.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 flex flex-col hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 space-y-5"
                >
                  {/* Category Badge */}
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold border uppercase tracking-wider ${getCategoryColor(
                        term.category
                      )}`}
                    >
                      {term.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 leading-relaxed group-hover:text-gray-950 transition-colors">
                    {term.title}
                  </h4>

                  {/* Content Preview */}
                  <div className="mt-5">
                    <p className="text-sm leading-relaxed text-gray-600 grow mb-4">
                      {term.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredTerms.length === 0 && (
              <div className="text-center py-20 px-5">
                <div className="mb-6 text-gray-300">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No terms found
                </h3>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or category filter
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
