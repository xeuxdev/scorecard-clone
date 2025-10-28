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

const vanillaIframe = `#

The Lambda Vanilla iFrame provides a simple way to embed encrypted computation capabilities into your application. After embedding the iFrame, you can customize the appearance and configure the MPC computation settings using the configuration options provided by the package.

## Prerequisites

Before you begin, make sure you have:

- A Lambda account with API credentials
- A project created in your Lambda dashboard
- Basic knowledge of HTML and JavaScript

## Installation

To begin, you can copy and paste the iFrame markup provided below into your HTML document.

### Include the CDN

\`\`\`html
<script src="https://unpkg.com/@lambda/iframe@0.1.0/dist/index.global.js"></script>

\`\`\`

### Markup

Paste the below code into your web app's markup:

\`\`\`html
<iframe
  id="lambda-iframe"
  src="https://iframe.lambda.network/YOUR_MXE_ID?projectId=PROJECT_ID"
  name="lambdaFrame"
  scrolling="no"
  height="90%"
  width="90%"
  allowFullScreen
  allow="camera; microphone; clipboard-read; clipboard-write; display-capture"
></iframe>

\`\`\`

## Configuration

To use the methods listed below, you first need to get the iFrame element and its content window. After adding the CDN to your code, you can call the methods in the following way:

### Initialize

\`\`\`jsx
const LFrame = document.getElementById('lambda-iframe');

LFrame.iframeApi.initialize({
  background: 'YOUR_BACKGROUND_URL',
  logoUrl: 'YOUR_LOGO_URL',
  theme: 'dark', // 'light' or 'dark'
  primaryColor: '#6366f1',
  fontFamily: 'Inter, sans-serif'
});

\`\`\`

### Update Features

You can enable or disable the following features by calling \`LFrame.iframeApi.updateFeatures()\` method:

\`\`\`jsx
const LFrame = document.getElementById('lambda-iframe');

LFrame.iframeApi.updateFeatures({
  isEncryptionEnabled: true,
  isVisualizationEnabled: true,
  isHistoryEnabled: true,
  isExportEnabled: true,
  isImportEnabled: true,
  isCollaborationEnabled: false,
  isDebugModeEnabled: false,
  isAutoComputeEnabled: true
});

\`\`\`

## Methods

### Computation Methods

### \`submitComputation(data)\`

Submit encrypted data for computation.

\`\`\`jsx
LFrame.iframeApi.submitComputation({
  instruction: 'add_values',
  inputs: {
    value1: 42,
    value2: 58
  },
  encryption: {
    type: 'Shared',
    nonce: Date.now()
  }
});

\`\`\`

### \`trackComputation(computationId)\`

Track the progress of an ongoing computation.

\`\`\`jsx
LFrame.iframeApi.trackComputation('computation-123');

\`\`\`

### \`getResult(computationId)\`

Retrieve the result of a completed computation.

\`\`\`jsx
const result = await LFrame.iframeApi.getResult('computation-123');
console.log('Computation result:', result);

\`\`\`

### \`cancelComputation(computationId)\`

Cancel an ongoing computation.

\`\`\`jsx
LFrame.iframeApi.cancelComputation('computation-123');

\`\`\`

### MXE Management Methods

### \`createMXE(config)\`

Create a new MXE (Multiparty eXecution Environment).

\`\`\`jsx
LFrame.iframeApi.createMXE({
  name: 'my-private-app',
  protocol: 'cerberus',
  threshold: 2,
  nodeCount: 3
});

\`\`\`

### \`selectMXE(mxeId)\`

Select an existing MXE to use for computations.

\`\`\`jsx
LFrame.iframeApi.selectMXE('mxe-abc123');

\`\`\`

### \`getMXEInfo()\`

Get information about the current MXE.

\`\`\`jsx
const mxeInfo = await LFrame.iframeApi.getMXEInfo();
console.log('Current MXE:', mxeInfo);

\`\`\`

### Data Management Methods

### \`encryptData(data, options)\`

Encrypt data before submission.

\`\`\`jsx
const encrypted = await LFrame.iframeApi.encryptData(
  { secret: 'sensitive-data' },
  { owner: 'Shared', nonce: Date.now() }
);

\`\`\`

### \`decryptResult(encryptedResult)\`

Decrypt computation results.

\`\`\`jsx
const decrypted = await LFrame.iframeApi.decryptResult(encryptedResult);
console.log('Decrypted result:', decrypted);

\`\`\`

### \`importData(file)\`

Import data from a file.

\`\`\`jsx
const fileInput = document.getElementById('file-input');
LFrame.iframeApi.importData(fileInput.files[0]);

\`\`\`

### \`exportResult(computationId, format)\`

Export computation results.

\`\`\`jsx
LFrame.iframeApi.exportResult('computation-123', 'json');
// Formats: 'json', 'csv', 'xlsx'

\`\`\`

### UI Customization Methods

### \`setTheme(theme)\`

Change the iFrame theme dynamically.

\`\`\`jsx
LFrame.iframeApi.setTheme('dark'); // 'light' or 'dark'

\`\`\`

### \`updateColors(colors)\`

Update the color scheme.

\`\`\`jsx
LFrame.iframeApi.updateColors({
  primary: '#6366f1',
  secondary: '#8b5cf6',
  success: '#10b981',
  error: '#ef4444',
  warning: '#f59e0b'
});

\`\`\`

### \`setLanguage(lang)\`

Change the interface language.

\`\`\`jsx
LFrame.iframeApi.setLanguage('en'); // 'en', 'es', 'fr', 'de', 'ja', 'zh'

\`\`\`

### \`toggleFullscreen()\`

Toggle fullscreen mode for the iFrame.

\`\`\`jsx
LFrame.iframeApi.toggleFullscreen();

\`\`\`

### Collaboration Methods

### \`shareComputation(computationId, userId)\`

Share a computation with another user.

\`\`\`jsx
LFrame.iframeApi.shareComputation('computation-123', 'user-456');

\`\`\`

### \`joinCollaboration(sessionId)\`

Join a collaborative computation session.

\`\`\`jsx
LFrame.iframeApi.joinCollaboration('session-789');

\`\`\`

### \`sendMessage(message)\`

Send a message to other collaborators.

\`\`\`jsx
LFrame.iframeApi.sendMessage({
  text: 'Computation complete!',
  type: 'info'
});

\`\`\`

## Event Listeners

You can listen to various events emitted by the Lambda iFrame:

### Application Events

\`\`\`jsx
// iFrame fully loaded and ready
window.addEventListener('message', (event) => {
  if (event.data.type === 'lambda:ready') {
    console.log('Lambda iFrame is ready');
  }
});

// Application initialized
window.addEventListener('message', (event) => {
  if (event.data.type === 'lambda:initialized') {
    console.log('Lambda initialized with config:', event.data.config);
  }
});

// Error occurred
window.addEventListener('message', (event) => {
  if (event.data.type === 'lambda:error') {
    console.error('Error:', event.data.error);
  }
});

\`\`\`

### Computation Events

\`\`\`jsx
// Computation started
window.addEventListener('message', (event) => {
  if (event.data.type === 'computation:started') {
    console.log('Computation started:', event.data.computationId);
  }
});

// Computation progress
window.addEventListener('message', (event) => {
  if (event.data.type === 'computation:progress') {
    console.log(\`Progress: \${event.data.progress}%\`);
  }
});

// Computation completed
window.addEventListener('message', (event) => {
  if (event.data.type === 'computation:completed') {
    console.log('Result:', event.data.result);
  }
});

// Computation failed
window.addEventListener('message', (event) => {
  if (event.data.type === 'computation:failed') {
    console.error('Computation failed:', event.data.error);
  }
});

\`\`\`

### MXE Events

\`\`\`jsx
// MXE created
window.addEventListener('message', (event) => {
  if (event.data.type === 'mxe:created') {
    console.log('MXE created:', event.data.mxeId);
  }
});

// MXE selected
window.addEventListener('message', (event) => {
  if (event.data.type === 'mxe:selected') {
    console.log('MXE selected:', event.data.mxeId);
  }
});

// Node joined
window.addEventListener('message', (event) => {
  if (event.data.type === 'mxe:node-joined') {
    console.log('Node joined:', event.data.nodeId);
  }
});

// Node left
window.addEventListener('message', (event) => {
  if (event.data.type === 'mxe:node-left') {
    console.log('Node left:', event.data.nodeId);
  }
});

\`\`\`

### Collaboration Events

\`\`\`jsx
// User joined
window.addEventListener('message', (event) => {
  if (event.data.type === 'collaboration:user-joined') {
    console.log('User joined:', event.data.userId);
  }
});

// Message received
window.addEventListener('message', (event) => {
  if (event.data.type === 'collaboration:message') {
    console.log('Message:', event.data.message);
  }
});

// Computation shared
window.addEventListener('message', (event) => {
  if (event.data.type === 'collaboration:shared') {
    console.log('Computation shared with you:', event.data.computationId);
  }
});

\`\`\`

## Complete Example

Here's a complete example implementing Lambda iFrame with all features:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lambda Encrypted Computation</title>
  <script src="https://unpkg.com/@lambda/iframe@0.1.0/dist/index.global.js"></script>
  <style>
    body {
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }

    .header {
      padding: 20px;
      background: #1a202c;
      color: white;
    }

    .controls {
      padding: 20px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      background: #f7fafc;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      background: #6366f1;
      color: white;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.2s;
    }

    button:hover {
      background: #4f46e5;
    }

    .iframe-container {
      position: relative;
      height: 600px;
    }

    #lambda-iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    .status {
      padding: 20px;
      background: #edf2f7;
      min-height: 100px;
    }

    .log-entry {
      padding: 8px;
      margin: 4px 0;
      background: white;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
    }

    .log-entry.error {
      background: #fed7d7;
      color: #c53030;
    }

    .log-entry.success {
      background: #c6f6d5;
      color: #22543d;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Lambda Encrypted Computation Demo</h1>
      <p>Process sensitive data without ever decrypting it</p>
    </div>

    <div class="controls">
      <button onclick="initialize()">Initialize</button>
      <button onclick="submitComputation()">Run Computation</button>
      <button onclick="toggleTheme()">Toggle Theme</button>
      <button onclick="enableDebug()">Enable Debug</button>
      <button onclick="exportResults()">Export Results</button>
      <button onclick="toggleFullscreen()">Fullscreen</button>
    </div>

    <div class="iframe-container">
      <iframe
        id="lambda-iframe"
        src="https://iframe.lambda.network/demo-mxe?projectId=demo-project"
        name="lambdaFrame"
        allowFullScreen
        allow="camera; microphone; clipboard-read; clipboard-write"
      ></iframe>
    </div>

    <div class="status">
      <h3>Activity Log</h3>
      <div id="log"></div>
    </div>
  </div>

  <script>
    let LFrame;
    let isDarkTheme = false;
    let lastComputationId = null;

    // Wait for iFrame to load
    window.addEventListener('load', () => {
      LFrame = document.getElementById('lambda-iframe');
      setupEventListeners();
      addLog('Lambda iFrame loaded', 'success');
    });

    // Setup event listeners
    function setupEventListeners() {
      window.addEventListener('message', (event) => {
        // Only handle messages from Lambda iFrame
        if (event.origin !== 'https://iframe.lambda.network') return;

        switch(event.data.type) {
          case 'lambda:ready':
            addLog('Lambda ready for operations', 'success');
            initialize();
            break;

          case 'lambda:initialized':
            addLog('Lambda initialized successfully', 'success');
            break;

          case 'computation:started':
            lastComputationId = event.data.computationId;
            addLog(\`Computation started: \${event.data.computationId}\`);
            break;

          case 'computation:progress':
            updateProgress(event.data.progress);
            break;

          case 'computation:completed':
            addLog(\`Computation completed! Result: \${JSON.stringify(event.data.result)}\`, 'success');
            break;

          case 'computation:failed':
            addLog(\`Computation failed: \${event.data.error}\`, 'error');
            break;

          case 'lambda:error':
            addLog(\`Error: \${event.data.error}\`, 'error');
            break;

          default:
            console.log('Received event:', event.data);
        }
      });
    }

    // Initialize Lambda iFrame
    function initialize() {
      LFrame.iframeApi.initialize({
        theme: 'light',
        primaryColor: '#6366f1',
        logoUrl: '/logo.png',
        projectName: 'Demo Project',
        features: {
          isEncryptionEnabled: true,
          isVisualizationEnabled: true,
          isHistoryEnabled: true,
          isExportEnabled: true,
          isAutoComputeEnabled: false
        }
      });

      addLog('Initializing Lambda with custom configuration');
    }

    // Submit a sample computation
    async function submitComputation() {
      const computation = {
        instruction: 'private_sum',
        inputs: {
          values: [10, 20, 30, 40, 50]
        },
        encryption: {
          type: 'Shared',
          nonce: Date.now()
        }
      };

      addLog(\`Submitting computation: \${JSON.stringify(computation)}\`);
      LFrame.iframeApi.submitComputation(computation);
    }

    // Toggle theme
    function toggleTheme() {
      isDarkTheme = !isDarkTheme;
      LFrame.iframeApi.setTheme(isDarkTheme ? 'dark' : 'light');
      addLog(\`Theme changed to \${isDarkTheme ? 'dark' : 'light'}\`);
    }

    // Enable debug mode
    function enableDebug() {
      LFrame.iframeApi.updateFeatures({
        isDebugModeEnabled: true
      });
      addLog('Debug mode enabled');
    }

    // Export results
    function exportResults() {
      if (!lastComputationId) {
        addLog('No computation results to export', 'error');
        return;
      }

      LFrame.iframeApi.exportResult(lastComputationId, 'json');
      addLog(\`Exporting results for computation: \${lastComputationId}\`);
    }

    // Toggle fullscreen
    function toggleFullscreen() {
      LFrame.iframeApi.toggleFullscreen();
      addLog('Toggled fullscreen mode');
    }

    // Update progress bar
    function updateProgress(progress) {
      const lastLog = document.querySelector('#log .log-entry:last-child');
      if (lastLog && lastLog.textContent.includes('Progress:')) {
        lastLog.textContent = \`Progress: \${progress}%\`;
      } else {
        addLog(\`Progress: \${progress}%\`);
      }
    }

    // Add log entry
    function addLog(message, type = '') {
      const log = document.getElementById('log');
      const entry = document.createElement('div');
      entry.className = \`log-entry \${type}\`;
      entry.textContent = \`[\${new Date().toLocaleTimeString()}] \${message}\`;
      log.appendChild(entry);
      log.scrollTop = log.scrollHeight;
    }
  </script>
</body>
</html>

\`\`\`

## Advanced Configuration

### Custom Authentication

Implement custom authentication by passing tokens:

\`\`\`jsx
LFrame.iframeApi.authenticate({
  token: 'YOUR_JWT_TOKEN',
  provider: 'custom',
  userData: {
    id: 'user-123',
    name: 'John Doe',
    role: 'admin'
  }
});

\`\`\`

### Webhook Configuration

Configure webhooks for computation events:

\`\`\`jsx
LFrame.iframeApi.configureWebhooks({
  onComplete: 'https://your-api.com/webhook/complete',
  onError: 'https://your-api.com/webhook/error',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN'
  }
});

\`\`\`

### Custom Protocols

Configure custom MPC protocols:

\`\`\`jsx
LFrame.iframeApi.configureProtocol({
  name: 'custom-protocol',
  type: 'honest-majority',
  threshold: 3,
  nodeCount: 5,
  timeout: 30000,
  retries: 3
});

\`\`\`

## Best Practices

### 1. Security

Always validate the origin of messages:

\`\`\`jsx
window.addEventListener('message', (event) => {
  // Validate origin
  if (event.origin !== 'https://iframe.lambda.network') {
    console.warn('Received message from unauthorized origin:', event.origin);
    return;
  }

  // Process message
  handleMessage(event.data);
});

\`\`\`

### 2. Error Handling

Implement comprehensive error handling:

\`\`\`jsx
try {
  await LFrame.iframeApi.submitComputation(data);
} catch (error) {
  console.error('Computation failed:', error);

  // Show user-friendly error message
  if (error.code === 'INSUFFICIENT_NODES') {
    alert('Not enough nodes available. Please try again later.');
  } else if (error.code === 'INVALID_INPUT') {
    alert('Invalid input data. Please check your inputs.');
  } else {
    alert('An error occurred. Please try again.');
  }
}

\`\`\`

### 3. Performance

Optimize for large computations:

\`\`\`jsx
// Batch multiple computations
const batch = [
  { instruction: 'op1', inputs: data1 },
  { instruction: 'op2', inputs: data2 },
  { instruction: 'op3', inputs: data3 }
];

LFrame.iframeApi.submitBatch(batch);

\`\`\`

### 4. Responsive Design

Make the iFrame responsive:

\`\`\`css
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

#lambda-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

\`\`\`

## Troubleshooting

### iFrame Not Loading

- Verify your project ID is correct
- Check if your domain is whitelisted
- Ensure HTTPS is enabled on your site
- Check browser console for CSP errors

### Computations Failing

- Verify input data format
- Check MXE configuration
- Ensure sufficient nodes are available
- Review error messages in console

### Events Not Firing

- Confirm event listener registration
- Check message origin validation
- Verify iFrame is fully loaded
- Test in different browsers

## Migration Guide

### From v0.0.x to v0.1.0

1. Update CDN link to latest version
2. Replace \`initialize()\` parameters
3. Update event listener names
4. Migrate to new API methods

\`\`\`jsx
// Old (v0.0.x)
LFrame.init({ theme: 'dark' });

// New (v0.1.0)
LFrame.iframeApi.initialize({ theme: 'dark' });

\`\`\`
\`;
`;

export function VanillaIframe() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {vanillaIframe}
      </ReactMarkdown>
    </div>
  );
}
