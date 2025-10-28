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

const welcomeMarkdown = `
Build privacy-first applications with zero-knowledge technology and advanced cryptography - no expertise required. Our comprehensive developer toolkit enables you to encrypt any data or computation while maintaining full functionality across any blockchain.

## Why Lambda?

Transform any application into a privacy-preserving powerhouse. Our SDK handles all the complex cryptography so you can focus on building. Encrypt sensitive data, private transactions, confidential computations - anything you need to keep private stays private.

## Popular Use Cases

- **Private DeFi & Dark Pools**: Execute trades without revealing positions or strategies
- **Confidential AI/ML**: Train models on encrypted datasets without exposing proprietary data
- **Private Gaming & NFTs**: Hidden game states, sealed-bid auctions, private collectibles
- **Encrypted Governance**: Anonymous voting with verifiable results
- **Secure Data Sharing**: Share encrypted files and information with selective disclosure

## Developer Tools & SDKs

### TypeScript SDK

Complete API documentation and client libraries for seamless integration with your blockchain applications. Build privacy-preserving dApps with familiar JavaScript tooling.

### Rust Framework (Cipher Framework)

Write confidential smart contracts using our Rust-based DSL. Familiar syntax for blockchain developers - integrate privacy with minimal learning curve.

### CLI Tool

The \`lambda\` CLI provides powerful privacy tools for blockchain development. Deploy encrypted programs, manage confidential state, and test private computations locally.

### Example Projects

Jump-start your development with our library of sample applications:

- Encrypted token swaps
- Private lending protocols
- Confidential auctions
- Secure data marketplaces
- Anonymous credentialing systems

### CXE API

Configure Confidential eXecution Environments through our intuitive web interface or programmatic SDK. Define privacy zones, set encryption parameters, and manage secure computation clusters.

## How It Works

Simply integrate our SDK to automatically encrypt any data or computation you specify. Our protocol leverages:

- **Zero-Knowledge Proofs**: for verifiable privacy
- **Multi-Party Computation**: for distributed trust
- **Advanced Cryptography**: for unbreakable encryption

No need to understand the underlying cryptography - just mark what needs to be private, and we handle the rest.

## API Reference

Comprehensive documentation for:

- Creating and managing CXEs
- Encrypting/decrypting data flows
- Deploying confidential smart contracts
- Managing private state transitions
- Integrating with existing blockchain programs

## Start Building Private Applications Today

Turn any idea into a privacy-preserving reality. Whether you're building DeFi protocols, gaming platforms, AI systems, or data marketplaces - if it needs privacy, Lambda makes it possible.

[Get Started]() [Join Discord]() [Developer Docs]() [TypeScript SDK]()
`;

export function Welcome() {
  return (
    <div className="space-y-12!">
      <ReactMarkdown components={customComponents}>
        {welcomeMarkdown}
      </ReactMarkdown>

      <div className="border-t border-b py-8 text-center">
        <p className="text-lg font-semibold text-gray-900">
          The Protocol for Private Everything
        </p>
        <p className="text-gray-700 mt-2">
          Encrypt any data, computation, or transaction with a single SDK
          integration.
        </p>
      </div>
    </div>
  );
}
