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

const apiReferenceContent = `# 

Welcome to Lambda's API reference guide. In this guide, we will walk you through the steps required to get started with our APIs and how to use them in your applications.

## Get Started with APIs

To get started with our APIs, you will need to obtain an API key from the Lambda Developer Dashboard. This API key will be used to authenticate and authorize your requests when communicating with our APIs.

> **Get Your API Key**
> 1. Visit Lambda Developer Dashboard
> 2. Connect your wallet to the platform
> 3. Navigate to API Keys section
> 4. Generate a new API key
> 5. Copy and securely store your API key

**Base Endpoint**
\`\`\`
https://api.lambda.com/api/v2
\`\`\`
All API requests should be made to this base URL with your API key included in the headers.

## Authentication

All API requests must include your API key in the request headers:

\`\`\`
x-api-key: YOUR_API_KEY
\`\`\`

**Example:**
\`\`\`javascript
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': 'YOUR_API_KEY'
};
\`\`\`

## ZXE (Zero-Knowledge eXecution Environment) APIs

### Create ZXE

Create a new Zero-Knowledge eXecution Environment for confidential computations.

**Endpoint:** \`POST /zxe/create\`

**Request Body:**
\`\`\`json
{
  "title": "My Confidential Computation",
  "persistent": true,
  "proofSystem": "groth16",
  "metadata": {
    "description": "Dark pool trading computation",
    "tags": ["defi", "trading"]
  },
  "zkConfig": {
    "circuitSize": "medium",
    "recursiveDepth": 2,
    "aggregation": true,
    "publicInputs": ["result_hash"]
  },
  "cluster": {
    "minNodes": 3,
    "maxNodes": 10,
    "region": "us-east"
  }
}
\`\`\`

### Get ZXE Details

Retrieve details about a specific ZXE.

**Endpoint:** \`GET /zxe/details/{zxeId}\`

### Execute Computation

Execute a confidential computation within a ZXE and generate a zero-knowledge proof.

**Endpoint:** \`POST /zxe/execute\`

**Request Body:**
\`\`\`json
{
  "zxeId": "zxe_abc123xyz",
  "functionName": "processOrder",
  "encryptedInputs": {
    "price": "encrypted_data_base64",
    "quantity": "encrypted_data_base64",
    "trader": "0x1234...abcd"
  },
  "generateProof": true,
  "callback": {
    "url": "https://yourapp.com/webhook/proof-ready",
    "headers": {
      "Authorization": "Bearer your_token"
    }
  }
}
\`\`\`

### Verify Proof

Verify a zero-knowledge proof generated by Lambda.

**Endpoint:** \`POST /proof/verify\`

## Proof Aggregation APIs

### Aggregate Proofs

Combine multiple zero-knowledge proofs into a single aggregated proof.

**Endpoint:** \`POST /proof/aggregate\`

## Cluster Management APIs

Manage and monitor Lambda Node clusters for computation.

### Get Available Clusters

List available Lambda Node clusters

**Endpoint:** \`GET /clusters/list\`

### Get Cluster Metrics

Retrieve performance metrics for a cluster

**Endpoint:** \`GET /clusters/{clusterId}/metrics\`

## Analytics APIs

### Get Account Metrics

Retrieve overall account usage metrics.

**Endpoint:** \`GET /analytics/metrics\`

## Token Gating APIs

Create and manage token-gated ZXEs for controlled access.

### Create Token-Gated ZXE

Create a ZXE that requires token ownership

**Endpoint:** \`POST /zxe/token-gated/create\`

### Verify Token Ownership

Verify wallet holds required tokens

**Endpoint:** \`POST /zxe/token-gated/verify\`

## Circuit Management APIs

### Compile Circuit

Compile a ZK circuit for a ZXE

**Endpoint:** \`POST /circuit/compile\`

### Get Circuit Details

Retrieve details about a compiled circuit

**Endpoint:** \`GET /circuit/details/{circuitHash}\`

## Rate Limits

| Endpoint Category | Requests/Min | Requests/Hour |
|-------------------|--------------|---------------|
| ZXE Management | 60 | 3,000 |
| Computation Execution | 100 | 5,000 |
| Proof Verification | 200 | 10,000 |
| Analytics | 30 | 1,000 |

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid or missing API key |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

## SDK Integration

### JavaScript/TypeScript

\`\`\`bash
npm install @lambda/sdk
\`\`\`

\`\`\`javascript
import { LambdaClient } from '@lambda/sdk';

const client = new LambdaClient({
  apiKey: process.env.LAMBDA_API_KEY,
  cluster: 'mainnet'
});

// Create ZXE
const zxe = await client.createZXE({
  title: 'My Computation',
  proofSystem: 'groth16'
});

// Execute computation
const result = await client.execute({
  zxeId: zxe.zxeId,
  functionName: 'processData',
  inputs: encryptedData
});

// Verify proof
const isValid = await client.verifyProof(result.proof);
\`\`\`

### Python

\`\`\`bash
pip install lambda-sdk
\`\`\`

\`\`\`python
from lambda_sdk import LambdaClient

client = LambdaClient(api_key='YOUR_API_KEY')

# Create ZXE
zxe = client.create_zxe(
  title='My Computation',
  proof_system='groth16'
)

# Execute computation
result = client.execute(
  zxe_id=zxe['zxeId'],
  function_name='processData',
  inputs=encrypted_data
)

# Verify proof
is_valid = client.verify_proof(result['proof'])
\`\`\`

## Support & Resources

### Documentation
- Full Documentation
- SDK Reference
- Code Examples

### Community
- Discord
- GitHub
- Twitter

### Getting Help
- API Support: [email protected]
- Discord #api-support
- GitHub Issues
`;

export function LambdaAPIReference() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {apiReferenceContent}
      </ReactMarkdown>
    </div>
  );
}
