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

const reactSdk = `#

The Lambda React SDK offers a comprehensive suite of hooks, methods and event listeners that allow for seamless encrypted computation and privacy-preserving applications with minimal coding required.

## Quickstart

This section provides a brief overview of how to quickly get started with using the Lambda SDK in a React project.

## Walkthrough

This section provides a step-by-step guide to building a simple Lambda-based privacy-preserving app in a React project.

## Start from an Example

This section provides instructions on how to clone and run a sample Lambda app in a React project.

## Hooks

This section provides an overview of the available React hooks in the Lambda SDK that can be used to create custom encrypted functionality.

## Pre Requisites

Before using the Lambda React SDK, you must have Node.js installed on your machine. You can install Node.js using one of the following methods:

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

### Install React SDK

Install the Lambda React SDK in your project:

\`\`\`bash
npm install @lambda/react

\`\`\`

or with yarn:

\`\`\`bash
yarn add @lambda/react

\`\`\`

## Getting Started

### Create a React App with Lambda

Create a new React app with Lambda support:

\`\`\`bash
npx create-react-app my-encrypted-app
cd my-encrypted-app
npm install @lambda/react @solana/wallet-adapter-react @solana/wallet-adapter-react-ui

\`\`\`

### Basic Setup

Wrap your app with the Lambda Provider:

\`\`\`jsx
import React from 'react';
import { LambdaProvider } from '@lambda/react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const wallets = [new PhantomWalletAdapter()];

function App() {
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <LambdaProvider
          config={{
            rpcUrl: 'https://api.devnet.solana.com',
            programId: 'YOUR_PROGRAM_ID'
          }}
        >
          <YourApp />
        </LambdaProvider>
      </WalletModalProvider>
    </WalletProvider>
  );
}

\`\`\`

## React Hooks

### Connection Hooks

### \`useLambda()\`

Access the Lambda client instance and connection state.

**Returns:**

- \`client\`: LambdaClient instance
- \`connected\`: Boolean connection status
- \`connecting\`: Boolean connecting status
- \`error\`: Connection error if any

**Example:**

\`\`\`jsx
import { useLambda } from '@lambda/react';

function MyComponent() {
  const { client, connected, connecting, error } = useLambda();

  if (connecting) return <div>Connecting to Lambda...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!connected) return <div>Not connected</div>;

  return <div>Connected to Lambda Network</div>;
}

\`\`\`

### \`useConnection()\`

Manage connection to the Lambda network.

**Returns:**

- \`connect()\`: Function to connect
- \`disconnect()\`: Function to disconnect
- \`isConnected\`: Boolean connection status

**Example:**

\`\`\`jsx
import { useConnection } from '@lambda/react';

function ConnectButton() {
  const { connect, disconnect, isConnected } = useConnection();

  return (
    <button onClick={isConnected ? disconnect : connect}>
      {isConnected ? 'Disconnect' : 'Connect'}
    </button>
  );
}

\`\`\`

### Encryption Hooks

### \`useEncryption()\`

Hook for encrypting and decrypting data.

**Returns:**

- \`encrypt(data, owner, nonce)\`: Encrypt data
- \`decrypt(encryptedData, secret)\`: Decrypt data
- \`generateNonce()\`: Generate a unique nonce

**Example:**

\`\`\`jsx
import { useEncryption } from '@lambda/react';

function EncryptForm() {
  const { encrypt, generateNonce } = useEncryption();
  const [data, setData] = useState({ value: 0 });

  const handleEncrypt = async () => {
    const encrypted = await encrypt(
      data,
      'Shared',
      generateNonce()
    );
    console.log('Encrypted:', encrypted);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setData({ value: e.target.value })}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
    </div>
  );
}

\`\`\`

### \`useSharedSecret(publicKey)\`

Generate and manage shared secrets for encryption.

**Parameters:**

- \`publicKey\`: Public key to generate shared secret with

**Returns:**

- \`sharedSecret\`: Generated shared secret
- \`regenerate()\`: Function to regenerate secret
- \`loading\`: Loading state

**Example:**

\`\`\`jsx
import { useSharedSecret } from '@lambda/react';

function SecretManager({ mxePublicKey }) {
  const { sharedSecret, regenerate, loading } = useSharedSecret(mxePublicKey);

  if (loading) return <div>Generating secret...</div>;

  return (
    <div>
      <p>Secret generated</p>
      <button onClick={regenerate}>Regenerate</button>
    </div>
  );
}

\`\`\`

### Computation Hooks

### \`useComputation()\`

Submit and track encrypted computations.

**Returns:**

- \`submit(instruction, inputs)\`: Submit computation
- \`track(computationId)\`: Track computation
- \`result\`: Computation result
- \`status\`: Current status
- \`loading\`: Loading state
- \`error\`: Error if any

**Example:**

\`\`\`jsx
import { useComputation } from '@lambda/react';

function ComputationForm() {
  const { submit, status, result, loading, error } = useComputation();
  const { encrypt, generateNonce } = useEncryption();

  const handleSubmit = async () => {
    const encrypted = await encrypt(
      { v1: 42, v2: 58 },
      'Shared',
      generateNonce()
    );

    await submit('add_together', encrypted);
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Computing...' : 'Run Computation'}
      </button>
      {status && <p>Status: {status}</p>}
      {result && <p>Result: {result}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

\`\`\`

### \`useComputationStatus(computationId)\`

Track the status of a specific computation.

**Parameters:**

- \`computationId\`: ID of computation to track

**Returns:**

- \`status\`: Current computation status
- \`progress\`: Progress percentage
- \`result\`: Result when complete
- \`error\`: Error if failed

**Example:**

\`\`\`jsx
import { useComputationStatus } from '@lambda/react';

function ComputationTracker({ computationId }) {
  const { status, progress, result, error } = useComputationStatus(computationId);

  if (error) return <div>Failed: {error.message}</div>;
  if (result) return <div>Complete! Result: {result}</div>;

  return (
    <div>
      <p>Status: {status}</p>
      <progress value={progress} max="100" />
    </div>
  );
}

\`\`\`

### MXE Hooks

### \`useMXE(address)\`

Access and manage MXE (Multiparty eXecution Environment).

**Parameters:**

- \`address\`: MXE address (optional)

**Returns:**

- \`mxe\`: MXE instance
- \`create(config)\`: Create new MXE
- \`update(config)\`: Update MXE
- \`loading\`: Loading state

**Example:**

\`\`\`jsx
import { useMXE } from '@lambda/react';

function MXEManager() {
  const { mxe, create, loading } = useMXE();

  const handleCreate = async () => {
    await create({
      name: 'my-private-app',
      protocol: 'cerberus',
      threshold: 2
    });
  };

  if (loading) return <div>Loading MXE...</div>;
  if (!mxe) {
    return <button onClick={handleCreate}>Create MXE</button>;
  }

  return (
    <div>
      <h3>MXE: {mxe.name}</h3>
      <p>Protocol: {mxe.protocol}</p>
      <p>Address: {mxe.address}</p>
    </div>
  );
}

\`\`\`

### \`useMXEList()\`

List and manage multiple MXEs.

**Returns:**

- \`mxes\`: Array of MXEs
- \`loading\`: Loading state
- \`refresh()\`: Refresh list
- \`filter(predicate)\`: Filter MXEs

**Example:**

\`\`\`jsx
import { useMXEList } from '@lambda/react';

function MXEList() {
  const { mxes, loading, refresh } = useMXEList();

  if (loading) return <div>Loading MXEs...</div>;

  return (
    <div>
      <button onClick={refresh}>Refresh</button>
      <ul>
        {mxes.map(mxe => (
          <li key={mxe.address}>
            {mxe.name} - {mxe.protocol}
          </li>
        ))}
      </ul>
    </div>
  );
}

\`\`\`

### Callback Hooks

### \`useCallback()\`

Register and handle computation callbacks.

**Returns:**

- \`register(computationId, handler)\`: Register callback
- \`unregister(computationId)\`: Unregister callback
- \`callbacks\`: Active callbacks map

**Example:**

\`\`\`jsx
import { useCallback } from '@lambda/react';

function CallbackHandler({ computationId }) {
  const { register, unregister } = useCallback();

  useEffect(() => {
    const handler = (result) => {
      console.log('Computation complete:', result);
    };

    register(computationId, handler);
    return () => unregister(computationId);
  }, [computationId]);

  return <div>Waiting for callback...</div>;
}

\`\`\`

### \`useCallbackServer(port)\`

Set up a callback server for handling results.

**Parameters:**

- \`port\`: Port number for server

**Returns:**

- \`server\`: Callback server instance
- \`start()\`: Start server
- \`stop()\`: Stop server
- \`running\`: Server running state

**Example:**

\`\`\`jsx
import { useCallbackServer } from '@lambda/react';

function CallbackServerManager() {
  const { start, stop, running } = useCallbackServer(3000);

  return (
    <button onClick={running ? stop : start}>
      {running ? 'Stop Server' : 'Start Server'}
    </button>
  );
}

\`\`\`

### Event Hooks

### \`useLambdaEvents()\`

Subscribe to Lambda network events.

**Returns:**

- \`on(event, handler)\`: Subscribe to event
- \`off(event, handler)\`: Unsubscribe from event
- \`events\`: Recent events array

**Example:**

\`\`\`jsx
import { useLambdaEvents } from '@lambda/react';

function EventMonitor() {
  const { on, off, events } = useLambdaEvents();

  useEffect(() => {
    const handlers = {
      'computation:started': (e) => console.log('Started:', e),
      'computation:completed': (e) => console.log('Completed:', e),
      'error': (e) => console.error('Error:', e)
    };

    Object.entries(handlers).forEach(([event, handler]) => {
      on(event, handler);
    });

    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        off(event, handler);
      });
    };
  }, []);

  return (
    <div>
      <h3>Recent Events:</h3>
      {events.map((event, i) => (
        <div key={i}>{event.type}: {event.message}</div>
      ))}
    </div>
  );
}

\`\`\`

## Components

### Pre-built Components

The Lambda React SDK provides ready-to-use components:

### \`<EncryptionForm />\`

A form component for encrypting data.

\`\`\`jsx
import { EncryptionForm } from '@lambda/react/components';

function App() {
  return (
    <EncryptionForm
      onEncrypt={(encrypted) => console.log(encrypted)}
      fields={[
        { name: 'value1', type: 'number', label: 'First Value' },
        { name: 'value2', type: 'number', label: 'Second Value' }
      ]}
    />
  );
}

\`\`\`

### \`<ComputationRunner />\`

Component for running computations with UI.

\`\`\`jsx
import { ComputationRunner } from '@lambda/react/components';

function App() {
  return (
    <ComputationRunner
      instruction="add_together"
      onComplete={(result) => console.log('Result:', result)}
      showProgress
    />
  );
}

\`\`\`

### \`<MXEDashboard />\`

Dashboard for managing MXEs.

\`\`\`jsx
import { MXEDashboard } from '@lambda/react/components';

function App() {
  return (
    <MXEDashboard
      allowCreate
      allowEdit
      onSelect={(mxe) => console.log('Selected:', mxe)}
    />
  );
}

\`\`\`

## Complete Example App

Here's a complete React app using the Lambda SDK:

\`\`\`jsx
import React, { useState } from 'react';
import {
  LambdaProvider,
  useLambda,
  useEncryption,
  useComputation
} from '@lambda/react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

// Import styles
import '@solana/wallet-adapter-react-ui/styles.css';

const wallets = [new PhantomWalletAdapter()];

function PrivateCalculator() {
  const { connected } = useLambda();
  const { encrypt, decrypt, generateNonce } = useEncryption();
  const { submit, status, result, loading } = useComputation();

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [decryptedResult, setDecryptedResult] = useState(null);

  const handleCompute = async () => {
    if (!connected) {
      alert('Please connect your wallet first');
      return;
    }

    // Encrypt the input values
    const encrypted = await encrypt(
      {
        v1: parseInt(value1),
        v2: parseInt(value2)
      },
      'Shared',
      generateNonce()
    );

    // Submit computation
    const computation = await submit('add_together', encrypted);

    // Result will be available via the hook
  };

  // Decrypt result when available
  React.useEffect(() => {
    if (result) {
      decrypt(result).then(setDecryptedResult);
    }
  }, [result]);

  return (
    <div className="calculator">
      <h2>Private Calculator</h2>

      <div className="inputs">
        <input
          type="number"
          placeholder="First number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />

        <span>+</span>

        <input
          type="number"
          placeholder="Second number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>

      <button
        onClick={handleCompute}
        disabled={loading || !value1 || !value2}
      >
        {loading ? 'Computing...' : 'Compute Privately'}
      </button>

      {status && (
        <div className="status">
          Status: {status}
        </div>
      )}

      {decryptedResult && (
        <div className="result">
          Result: {value1} + {value2} = {decryptedResult}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <LambdaProvider
          config={{
            rpcUrl: 'https://api.devnet.solana.com',
            programId: 'YOUR_PROGRAM_ID'
          }}
        >
          <div className="app">
            <header>
              <h1>Lambda Private Computing Demo</h1>
              <WalletMultiButton />
            </header>

            <main>
              <PrivateCalculator />
            </main>
          </div>
        </LambdaProvider>
      </WalletModalProvider>
    </WalletProvider>
  );
}

export default App;

\`\`\`

### Styling

Add these styles to your \`App.css\`:

\`\`\`css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.calculator {
  background: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
}

.inputs {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
  align-items: center;
}

.inputs input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 0.75rem;
  background: #512da8;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status {
  margin-top: 1rem;
  padding: 0.5rem;
  background: #e3f2fd;
  border-radius: 4px;
}

.result {
  margin-top: 1rem;
  padding: 1rem;
  background: #c8e6c9;
  border-radius: 4px;
  font-size: 1.2rem;
  text-align: center;
}

\`\`\`

## Advanced Patterns

### Custom Hook Composition

Create custom hooks by composing existing Lambda hooks:

\`\`\`jsx
import { useEncryption, useComputation } from '@lambda/react';

function usePrivateAddition() {
  const { encrypt, decrypt, generateNonce } = useEncryption();
  const { submit, status, result } = useComputation();

  const add = async (a, b) => {
    const encrypted = await encrypt(
      { v1: a, v2: b },
      'Shared',
      generateNonce()
    );

    const computation = await submit('add_together', encrypted);
    return computation;
  };

  const getSum = async () => {
    if (!result) return null;
    return await decrypt(result);
  };

  return { add, getSum, status };
}

\`\`\`

### Error Boundaries

Implement error boundaries for robust error handling:

\`\`\`jsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LambdaProvider>
        <YourApp />
      </LambdaProvider>
    </ErrorBoundary>
  );
}

\`\`\`

### Optimistic Updates

Implement optimistic UI updates for better UX:

\`\`\`jsx
function OptimisticComputation() {
  const { submit } = useComputation();
  const [optimisticResult, setOptimisticResult] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleCompute = async (a, b) => {
    // Show optimistic result immediately
    setOptimisticResult(a + b);

    // Submit actual computation
    const result = await submit('add_together', { v1: a, v2: b });

    // Confirm when complete
    result.then(() => setConfirmed(true));
  };

  return (
    <div>
      {optimisticResult && (
        <div className={confirmed ? 'confirmed' : 'pending'}>
          Result: {optimisticResult}
          {!confirmed && <span> (confirming...)</span>}
        </div>
      )}
    </div>
  );
}

\`\`\`

### State Management Integration

Integrate with Redux or other state management:

\`\`\`jsx
import { useDispatch } from 'react-redux';
import { useComputation } from '@lambda/react';

function ComputationWithRedux() {
  const dispatch = useDispatch();
  const { submit } = useComputation();

  const handleCompute = async (data) => {
    dispatch({ type: 'COMPUTATION_START' });

    try {
      const result = await submit('operation', data);
      dispatch({
        type: 'COMPUTATION_SUCCESS',
        payload: result
      });
    } catch (error) {
      dispatch({
        type: 'COMPUTATION_ERROR',
        payload: error
      });
    }
  };

  return <button onClick={handleCompute}>Compute</button>;
}

\`\`\`

## Testing

### Unit Testing Hooks

Test your components and hooks:

\`\`\`jsx
import { renderHook, act } from '@testing-library/react-hooks';
import { LambdaProvider } from '@lambda/react';
import { useEncryption } from '@lambda/react';

describe('useEncryption', () => {
  const wrapper = ({ children }) => (
    <LambdaProvider config={{ rpcUrl: 'test' }}>
      {children}
    </LambdaProvider>
  );

  test('should encrypt data', async () => {
    const { result } = renderHook(() => useEncryption(), { wrapper });

    await act(async () => {
      const encrypted = await result.current.encrypt(
        { value: 42 },
        'Shared',
        1
      );
      expect(encrypted).toBeDefined();
    });
  });
});

\`\`\`

### Integration Testing

Test complete user flows:

\`\`\`jsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('performs encrypted computation', async () => {
  render(<App />);

  // Enter values
  const input1 = screen.getByPlaceholderText('First number');
  const input2 = screen.getByPlaceholderText('Second number');

  await userEvent.type(input1, '42');
  await userEvent.type(input2, '58');

  // Submit computation
  const button = screen.getByText('Compute Privately');
  await userEvent.click(button);

  // Wait for result
  await waitFor(() => {
    expect(screen.getByText(/Result: 100/)).toBeInTheDocument();
  });
});

\`\`\`

## Performance Optimization

### Memoization

Use React.memo and useMemo for performance:

\`\`\`jsx
import React, { useMemo, memo } from 'react';
import { useComputation } from '@lambda/react';

const ExpensiveComputation = memo(({ data }) => {
  const { submit } = useComputation();

  const processedData = useMemo(() => {
    // Expensive preprocessing
    return data.map(item => transform(item));
  }, [data]);

  return <div>Ready to compute</div>;
});

\`\`\`

### Lazy Loading

Lazy load components for better initial load:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const MXEDashboard = lazy(() =>
  import('@lambda/react/components').then(m => ({
    default: m.MXEDashboard
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading dashboard...</div>}>
      <MXEDashboard />
    </Suspense>
  );
}

\`\`\`

### Batch Updates

Batch multiple state updates:

\`\`\`jsx
import { unstable_batchedUpdates } from 'react-dom';

function BatchedComponent() {
  const [state1, setState1] = useState(null);
  const [state2, setState2] = useState(null);

  const handleUpdate = () => {
    unstable_batchedUpdates(() => {
      setState1('value1');
      setState2('value2');
    });
  };

  return <button onClick={handleUpdate}>Update</button>;
}

\`\`\`

## Deployment

### Build for Production

\`\`\`bash
npm run build

\`\`\`

### Environment Variables

Configure for different environments:

\`\`\`jsx
// .env.production
REACT_APP_LAMBDA_RPC=https://api.mainnet-beta.solana.com
REACT_APP_LAMBDA_PROGRAM_ID=YOUR_MAINNET_PROGRAM_ID

// .env.development
REACT_APP_LAMBDA_RPC=https://api.devnet.solana.com
REACT_APP_LAMBDA_PROGRAM_ID=YOUR_DEVNET_PROGRAM_ID

\`\`\`

Use in your app:

\`\`\`jsx
<LambdaProvider
  config={{
    rpcUrl: process.env.REACT_APP_LAMBDA_RPC,
    programId: process.env.REACT_APP_LAMBDA_PROGRAM_ID
  }}
>

\`\`\`

### Docker Deployment

\`\`\`docker
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

\`\`\`

## Resources

- [Lambda Documentation](https://docs.lambda.com/)
- [TypeScript SDK Reference](https://ts.lambda.com/api)
- [React Examples](https://github.com/lambda/react-examples)
- [Discord Community](https://discord.com/invite/lambda)

## Support

For support and questions:

- Join our [Discord](https://discord.com/invite/lambda)
- Check the [FAQ](https://docs.lambda.com/faq)
- Submit issues on [GitHub](https://github.com/lambda/react-sdk/issues)
\`;
`;

export function ReactSDK() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>{reactSdk}</ReactMarkdown>
    </div>
  );
}
