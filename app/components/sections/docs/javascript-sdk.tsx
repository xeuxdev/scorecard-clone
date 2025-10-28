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

const javascriptSdkMarkdown = `# 
The Lambda JavaScript SDK offers a comprehensive suite of methods and event listeners that allow for seamless encrypted computation and privacy-preserving applications with minimal coding required.

## Quickstart

This section provides a brief overview of how to quickly get started with using the Lambda JavaScript SDK.

## Walkthrough

This section provides a step-by-step guide to building a simple Lambda-based privacy-preserving application in a vanilla JavaScript project.

## Start from an Example

This section provides instructions on how to clone and run a sample Lambda app in a vanilla JavaScript project.

## Methods

This section provides an overview of the available methods in the vanilla JavaScript SDK that can be used to create custom encrypted functionality.

## Pre Requisites

Before using the Lambda JavaScript SDK, you must have Node.js installed on your machine. You can install Node.js using one of the following methods:

- Install Node.js with NVM by following the instructions on this [GitHub page](https://github.com/nvm-sh/nvm)
- Install Node.js with FNM by following the instructions on this [GitHub page](https://github.com/Schniz/fnm)
- Download Node.js from the official [website](https://nodejs.org/)

**Pro Tip:** Use NVM or FNM to install Node.js as they help in version management and easy updation

After installing Node.js, verify it's installed by running the following command in your terminal:

\`\`\`bash
node --version

\`\`\`

### Additional Dependencies

You'll also need the following tools installed:

- **Rust:** Install from [here](https://www.rust-lang.org/tools/install)
- **Solana CLI:** Install from [here](https://docs.solana.com/cli/install-solana-cli-tools), then run \`solana-keygen new\`
- **Yarn:** Install from [here](https://yarnpkg.com/getting-started/install)
- **Anchor:** Install from [here](https://www.anchor-lang.com/docs/installation)

## Installation

### Quick Install (Recommended)

On Mac and Linux, run this single command to install Lambda:

\`\`\`bash
curl --proto '=https' --tlsv1.2 -sSfL https://install.lambda.com/ | bash

\`\`\`

This script will:

- Check for all required dependencies
- Install Linux build dependencies automatically (if needed)
- Download and install \`arcup\` for your platform
- Install the latest Lambda CLI
- Install the Lambda Node

### Manual Installation

If you prefer manual installation:

1. Install \`arcup\` by replacing \`<YOUR_TARGET>\` with your platform:

\`\`\`bash
TARGET=aarch64_linux && curl "https://bin.lambda.com/download/arcup_\${TARGET}_0.3.0" -o ~/.cargo/bin/arcup && chmod +x ~/.cargo/bin/arcup

\`\`\`

Supported targets:

- \`aarch64_linux\`
- \`x86_64_linux\`
- \`aarch64_macos\`
- \`x86_64_macos\`
1. Install the latest version of the CLI:

\`\`\`bash
arcup install

\`\`\`

1. Verify the installation:

\`\`\`bash
lambda --version

\`\`\`

## Getting Started

### Initialize Your Project

Create a new Lambda project using the CLI:

\`\`\`bash
lambda init my-encrypted-app
cd my-encrypted-app

\`\`\`

This creates:

- \`Lambda.toml\` - Configuration file for the Lambda tooling suite
- \`encrypted-ixs/\` - Directory for encrypted instructions using Lambdas framework
- \`programs/\` - Solana program directory
- \`app/\` - Frontend application directory

### Understanding the Project Structure

The project follows a standard structure optimized for encrypted computing:

\`\`\`
my-encrypted-app/
├── Lambda.toml           # Configuration
├── encrypted-ixs/        # Encrypted instructions (Lambdas)
│   └── add_together.rs   # Example encrypted function
├── programs/             # Solana programs
│   └── hello_world/
│       └── src/
│           └── lib.rs    # Main program file
├── app/                  # Frontend application
│   ├── index.html
│   └── src/
│       └── index.js      # JavaScript client
└── tests/                # Test files

\`\`\`

## Core Concepts

### MXE (Multiparty eXecution Environment)

MXEs are virtual, encrypted environments where your computations run. Think of them as secure containers for your encrypted logic.

### Encrypted Instructions

Functions that operate on encrypted data without ever decrypting it. These are written using the Lambdas framework and marked with the \`#[encrypted]\` attribute.

### Computation Lifecycle

Your encrypted computation follows three steps:

1. **Client encrypts data** and sends it to your MXE program
2. **Program submits** the computation to Lambda's network
3. **Nodes process** the encrypted data and return results

## JavaScript Client SDK

### Installation

Install the Lambda JavaScript client library:

\`\`\`bash
npm install @lambda/client

\`\`\`

or with yarn:

\`\`\`bash
yarn add @lambda/client

\`\`\`

### Basic Usage

\`\`\`jsx
import { LambdaClient, encrypt, EncryptionType } from '@lambda/client';

// Initialize the client
const client = new LambdaClient({
  rpcUrl: 'https://api.devnet.solana.com',
  programId: 'YOUR_PROGRAM_ID'
});

// Connect wallet
await client.connect();

\`\`\`

## Methods

### Initialization Methods

### \`new LambdaClient(config)\`

Creates a new Lambda client instance.

**Parameters:**

- \`config.rpcUrl\` (string): Solana RPC endpoint URL
- \`config.programId\` (string): Your program's public key
- \`config.callbackUrl\` (string, optional): URL for handling callbacks

**Returns:** \`LambdaClient\` instance

**Example:**

\`\`\`jsx
const client = new LambdaClient({
  rpcUrl: 'https://api.devnet.solana.com',
  programId: 'Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS'
});

\`\`\`

### \`connect(wallet)\`

Connects a wallet to the client.

**Parameters:**

- \`wallet\` (optional): Wallet adapter instance

**Returns:** \`Promise<void>\`

**Example:**

\`\`\`jsx
await client.connect(phantomWallet);

\`\`\`

### Encryption Methods

### \`encrypt(data, owner, nonce)\`

Encrypts data for secure computation.

**Parameters:**

- \`data\` (object): Data to encrypt
- \`owner\` (string): Owner type ('Shared' or 'Mxe')
- \`nonce\` (number): Encryption nonce

**Returns:** \`EncryptedData\`

**Example:**

\`\`\`jsx
const encrypted = await encrypt(
  { value1: 42, value2: 58 },
  'Shared',
  Date.now()
);

\`\`\`

### \`generateSharedSecret(publicKey, privateKey)\`

Generates a shared secret for encryption between two parties.

**Parameters:**

- \`publicKey\` (Uint8Array): Public key of the other party
- \`privateKey\` (Uint8Array): Your private key

**Returns:** \`Uint8Array\` - Shared secret

**Example:**

\`\`\`jsx
const sharedSecret = generateSharedSecret(
  mxePublicKey,
  userPrivateKey
);

\`\`\`

### Computation Methods

### \`submitComputation(instruction, inputs)\`

Submits an encrypted computation to the network.

**Parameters:**

- \`instruction\` (string): Name of the encrypted instruction
- \`inputs\` (EncryptedData): Encrypted input data

**Returns:** \`Promise<ComputationResult>\`

**Example:**

\`\`\`jsx
const result = await client.submitComputation(
  'add_together',
  encryptedInputs
);

\`\`\`

### \`trackComputation(computationId)\`

Tracks the status of a running computation.

**Parameters:**

- \`computationId\` (string): ID of the computation to track

**Returns:** \`Promise<ComputationStatus>\`

**Example:**

\`\`\`jsx
const status = await client.trackComputation(computationId);
console.log(\`Status: \${status.state}\`);

\`\`\`

### \`getComputationResult(computationId)\`

Retrieves the result of a completed computation.

**Parameters:**

- \`computationId\` (string): ID of the computation

**Returns:** \`Promise<EncryptedResult>\`

**Example:**

\`\`\`jsx
const result = await client.getComputationResult(computationId);
const decrypted = await decrypt(result, sharedSecret);

\`\`\`

### Callback Methods

### \`registerCallback(computationId, handler)\`

Registers a callback handler for computation results.

**Parameters:**

- \`computationId\` (string): ID of the computation
- \`handler\` (function): Callback function to handle results

**Returns:** \`void\`

**Example:**

\`\`\`jsx
client.registerCallback(computationId, (result) => {
  console.log('Computation complete:', result);
});

\`\`\`

### \`setupCallbackServer(port)\`

Sets up a local callback server for handling results.

**Parameters:**

- \`port\` (number): Port to listen on

**Returns:** \`CallbackServer\`

**Example:**

\`\`\`jsx
const callbackServer = client.setupCallbackServer(3000);
callbackServer.on('result', handleResult);

\`\`\`

### MXE Management Methods

### \`createMXE(config)\`

Creates a new MXE (Multiparty eXecution Environment).

**Parameters:**

- \`config.name\` (string): Name of the MXE
- \`config.protocol\` (string): MPC protocol to use
- \`config.threshold\` (number): Threshold for computation

**Returns:** \`Promise<MXE>\`

**Example:**

\`\`\`jsx
const mxe = await client.createMXE({
  name: 'my-private-app',
  protocol: 'cerberus',
  threshold: 2
});

\`\`\`

### \`getMXE(address)\`

Retrieves MXE information.

**Parameters:**

- \`address\` (string): MXE address

**Returns:** \`Promise<MXE>\`

**Example:**

\`\`\`jsx
const mxe = await client.getMXE(mxeAddress);
console.log(\`MXE: \${mxe.name}\`);

\`\`\`

## Event Listeners

The Lambda JavaScript SDK provides event emitters for real-time updates:

### Computation Events

\`\`\`jsx
client.on('computation:started', (event) => {
  console.log('Computation started:', event.id);
});

client.on('computation:progress', (event) => {
  console.log(\`Progress: \${event.progress}%\`);
});

client.on('computation:completed', (event) => {
  console.log('Result:', event.result);
});

client.on('computation:failed', (event) => {
  console.error('Computation failed:', event.error);
});

\`\`\`

### Connection Events

\`\`\`jsx
client.on('connected', () => {
  console.log('Connected to Lambda network');
});

client.on('disconnected', () => {
  console.log('Disconnected from network');
});

client.on('error', (error) => {
  console.error('Client error:', error);
});

\`\`\`

## Complete Example

Here's a complete example of using the Lambda JavaScript SDK to perform encrypted addition:

\`\`\`jsx
import { LambdaClient, encrypt } from '@lambda/client';
import { Connection, Keypair } from '@solana/web3.js';

async function main() {
  // Initialize client
  const client = new LambdaClient({
    rpcUrl: 'https://api.devnet.solana.com',
    programId: 'YOUR_PROGRAM_ID'
  });

  // Connect wallet
  await client.connect();

  // Prepare data
  const data = {
    v1: 42,
    v2: 58
  };

  // Encrypt the data
  const encryptedData = await encrypt(
    data,
    'Shared',
    Date.now()
  );

  // Submit computation
  const computation = await client.submitComputation(
    'add_together',
    encryptedData
  );

  console.log('Computation submitted:', computation.id);

  // Track computation
  client.on('computation:completed', async (event) => {
    if (event.id === computation.id) {
      // Decrypt result
      const result = await client.decrypt(event.result);
      console.log('Sum:', result); // Output: 100
    }
  });

  // Wait for completion
  await computation.wait();
}

main().catch(console.error);

\`\`\`

## Error Handling

The SDK provides comprehensive error handling:

\`\`\`jsx
try {
  const result = await client.submitComputation(
    'add_together',
    encryptedData
  );
} catch (error) {
  if (error.code === 'INSUFFICIENT_NODES') {
    console.error('Not enough nodes available');
  } else if (error.code === 'ENCRYPTION_FAILED') {
    console.error('Failed to encrypt data');
  } else if (error.code === 'COMPUTATION_TIMEOUT') {
    console.error('Computation timed out');
  } else {
    console.error('Unknown error:', error);
  }
}

\`\`\`

## Best Practices

### 1. Batch Operations

Minimize encryption/decryption calls by batching data:

\`\`\`jsx
// Good - Single encryption call
const data = {
  values: [1, 2, 3, 4, 5],
  metadata: { timestamp: Date.now() }
};
const encrypted = await encrypt(data, 'Shared', nonce);

// Avoid - Multiple encryption calls
const enc1 = await encrypt(value1, 'Shared', nonce1);
const enc2 = await encrypt(value2, 'Shared', nonce2);

\`\`\`

### 2. Nonce Management

Always use unique nonces for each encryption:

\`\`\`jsx
class NonceManager {
  constructor() {
    this.counter = Date.now();
  }

  next() {
    return ++this.counter;
  }
}

const nonceManager = new NonceManager();
const encrypted = await encrypt(data, 'Shared', nonceManager.next());

\`\`\`

### 3. Connection Management

Implement reconnection logic for production apps:

\`\`\`jsx
client.on('disconnected', async () => {
  console.log('Connection lost, attempting reconnect...');

  let attempts = 0;
  while (attempts < 5) {
    try {
      await client.connect();
      console.log('Reconnected successfully');
      break;
    } catch (error) {
      attempts++;
      await new Promise(r => setTimeout(r, 2000 * attempts));
    }
  }
});

\`\`\`

### 4. Resource Cleanup

Always clean up resources when done:

\`\`\`jsx
// Clean up event listeners
client.removeAllListeners();

// Disconnect client
await client.disconnect();

// Stop callback server if running
if (callbackServer) {
  await callbackServer.stop();
}

\`\`\`

## Testing

Test your encrypted functions locally:

\`\`\`jsx
import { LocalTestnet } from '@lambda/client/testing';

describe('Encrypted Addition', () => {
  let testnet;
  let client;

  beforeAll(async () => {
    testnet = new LocalTestnet();
    await testnet.start();

    client = new LambdaClient({
      rpcUrl: testnet.rpcUrl,
      programId: testnet.programId
    });
  });

  afterAll(async () => {
    await testnet.stop();
  });

  test('should add two encrypted numbers', async () => {
    const data = { v1: 42, v2: 58 };
    const encrypted = await encrypt(data, 'Shared', 1);

    const result = await client.submitComputation(
      'add_together',
      encrypted
    );

    const decrypted = await client.decrypt(result);
    expect(decrypted).toBe(100);
  });
});

\`\`\`

## Deployment

### Building for Production

1. Build your Lambda program:

\`\`\`bash
lambda build

\`\`\`

1. Deploy to Solana:

\`\`\`bash
lambda deploy --network mainnet

\`\`\`

1. Initialize your MXE:

\`\`\`bash
lambda mxe init --name "my-app" --cluster-size 3

\`\`\`

### Environment Configuration

Set up environment variables for production:

\`\`\`jsx
const client = new LambdaClient({
  rpcUrl: process.env.SOLANA_RPC_URL,
  programId: process.env.LAMBDA_PROGRAM_ID,
  callbackUrl: process.env.CALLBACK_URL
});

\`\`\`

## Troubleshooting

### Common Issues

### "Insufficient SOL for transaction"

Ensure your wallet has enough SOL for transaction fees:

\`\`\`jsx
const balance = await client.getBalance();
if (balance < 0.01) {
  console.error('Insufficient SOL balance');
}

\`\`\`

### "Computation timeout"

Increase timeout for long-running computations:

\`\`\`jsx
const result = await client.submitComputation(
  'complex_operation',
  encryptedData,
  { timeout: 60000 } // 60 seconds
);

\`\`\`

### "Failed to connect to network"

Check your RPC endpoint and network status:

\`\`\`jsx
const health = await client.checkHealth();
console.log('Network status:', health.status);

\`\`\`

## Resources

- [Lambda Documentation](https://docs.lambda.com/)
- [TypeScript SDK Reference](https://ts.lambda.com/api)
- [GitHub Examples](https://github.com/lambda/examples)
- [Discord Community](https://discord.com/invite/lambda)

## Support

For support and questions:

- Join our [Discord](https://discord.com/invite/lambda)
- Check the [FAQ](https://docs.lambda.com/faq)
- Submit issues on [GitHub](https://github.com/lambda/sdk/issues)
`;

export function JavaScriptSDK() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {javascriptSdkMarkdown}
      </ReactMarkdown>
    </div>
  );
}
