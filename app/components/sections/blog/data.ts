export const blogPosts = [
  {
    id: 1,
    url: "deep-dive-exploring-openais-agent",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68792d8f5bac1c236f39216f_GwExQGtbEAAF7zL.jpeg",
    title: "Deep Dive: Exploring ChatGPT's Agent Mode",
    date: "July 17, 2025",
    readTime: 0,
    category: "AI Tools",
    content: `Today, OpenAI launched **Agent Mode**, dramatically enhancing ChatGPT by combining powerful browser automation, deep research capabilities, and seamless integration with connected data sources. We tested Agent Mode and are offering a firsthand analysis of its groundbreaking features and the transformational impact it brings.

### What Exactly is Agent Mode?

Agent Mode integrates the conversational prowess of ChatGPT with advanced operational capabilities—browsing the web, interacting with interfaces, and performing complex, multistep tasks autonomously. Driven by the advanced Computer-Using Agent (CUA) model, it seamlessly merges previously distinct tools like Deep Research and Operator, making it vastly more powerful and versatile. You can also see the full [system prompt](https://gist.github.com/Rutledge/4b0ef2d51ba2f1918a249bce35bdde9c) here.

### How Does Agent Mode Work?

Agent Mode enables ChatGPT to connect directly with multiple sources like Box, Dropbox, GitHub, and Gmail, significantly extending its utility. It visually perceives graphical user interfaces (GUIs), effortlessly clicking, typing, and scrolling, while also conducting rigorous, multistep research tasks.

### Real-world Applications: A Hands-On Perspective

Our hands-on tests showcased Agent Mode's robust capabilities:

**1. In-depth Research and Reporting**

Agent Mode effortlessly synthesized complex reports by searching credible sources, analyzing data, and generating well-cited insights—greatly surpassing the depth achievable by standalone Deep Research.

![In-depth Research and Reporting](https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68792c2e794d2abcd24700a5_Screenshot%202025-07-17%20at%2009.59.59.png)

**2. Operational Tasks and Automation**

From booking dog-friendly accommodations on Hipcamp to scheduling airport rides with Uber, Agent Mode effectively managed end-to-end task automation with minimal oversight, showcasing capabilities far beyond previous browser automation tools.

![Operational Tasks and Automation](https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68792c60f8a0a569c59070b1_Screenshot%202025-07-17%20at%2009.55.19.png)

**3. Integrated Source Connectivity**

Agent Mode's integration with popular platforms like Box, Canva, Dropbox, GitHub, and Gmail dramatically streamlines workflows, enabling the agent to directly pull, analyze, and synthesize data from multiple services.

![Integrated Source Connectivity](https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/68792c77b66290648b3f05c0_Screenshot%202025-07-17%20at%2009.54.42.png)

### Strengths and Areas for Further Improvement

Agent Mode significantly disrupts traditional AI interaction paradigms, offering unprecedented levels of autonomy and productivity enhancement. However, our tests indicated occasional difficulties in handling extremely nuanced or dynamic UI scenarios, signaling room for future refinement and optimization.

### Transformative Implications for AI Evaluation

The comprehensive capabilities of Agent Mode substantially increase the complexity of evaluating AI performance and reliability. Factors such as state management, reproducibility, robust guardrails, and data privacy become even more critical. This complexity underscores the essential role platforms like Scorecard play in reliably evaluating and benchmarking sophisticated agents like Agent Mode.

### What's Next for Agent Mode?

OpenAI plans phased expansions to wider user groups, including Plus, Team, and Enterprise accounts, alongside developer-focused API integrations. These developments promise further customization and deployment possibilities across numerous industries.

### Conclusion: A Revolutionary Step Forward

Agent Mode represents a significant leap toward true digital autonomy, dramatically elevating productivity and innovation potential. At Scorecard, we eagerly anticipate the continued evolution of Agent Mode, actively exploring its profound impacts.

Stay tuned for more insights on how Agent Mode reshapes digital productivity!`,
  },
  {
    id: 2,
    url: "scorecard-mcp-2-0-1000-lines---70",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/685d7ad8a5e14b9a8fdbeabb_Screenshot%202025-06-26%20at%2009.52.33.png",
    title: "Scorecard MCP 2.0: 1,000 Lines -> 70",
    date: "June 30, 2025",
    readTime: 3,
    category: "News",
    content: `Following our launch of the [first remote MCP server for evaluation](https://scorecard.ai/blog/mcp-launch), we're excited to introduce an even better 2.0 version. The [new MCP specification](https://modelcontextprotocol.io/) dropped June 18th with game-changing updates: fixed authentication, elicitation for richer AI interactions, and structured tool outputs.

We partnered with Clerk to ship one of the first production implementations. **The result? 1000 lines of auth code reduced to just 70.**

## Why the New MCP Spec Is a Big Deal

[![Everything in the new MCP spec](https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/685d737b2f73ae4cb45cbfad_AD_4nXcLSr3aoNPszYqLe3qGNwwz-3df4HqKFDpVN4CycasL_sAtzwtCyG4aK81qWmeg736BjxvCKBfl-Fgsa4-Kn9UHYOboSUv4Kz8xXQR4VgPHyn67_4NnPrpcJHFGm9gDpEJ-RqSDlg.png)](https://x.com/chu_onthis/status/1935433647206830428?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1935433647206830428%7Ctwgr%5E57e8d1bace7131e22d81148466f5db10931a02a7%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2Fchu_onthis%2Fstatus%2F1935433647206830428)

The MCP community has been vocal about what changed. "Auth being fixed is HUGE" was a common refrain - finally, there's a standardized way to handle OAuth. The spec also introduces elicitation (servers can ask users for clarification) and structured outputs for better AI reasoning. For context on the auth challenges that were solved, see [this analysis](https://blog.christianposta.com/the-updated-mcp-oauth-spec-is-a-mess/) and the [GitHub discussion](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/205).

## The Dramatic Simplification

Our original implementation required custom OAuth flows, manual token management, and complex state handling. The new MCP spec with standardized authentication reduced our implementation significantly.

With Clerk's MCP integration and Vercel's adapter, the [complete MCP route handler](https://github.com/scorecard-ai/scorecard-mcp) is now 70 lines (down from 1000+) and our current auth implementation is now:

\`\`\`javascript
// Authentication wrapper - Clerk handles OAuth complexity
const authHandler = withMcpAuth(
  handler,
  async (_, token) => {
    const clerkAuth = await auth({ acceptsToken: "oauth_token" });
    return verifyClerkToken(clerkAuth, token);
  },
  { required: true },
);

// Tool handlers get authenticated client automatically
async (params, context) => {
  const accessToken = params.authInfo.token;
  const client = new Scorecard({
    baseURL: process.env.NEXT_PUBLIC_API_URL + "/api/v2",
    fetch: async (url, init) => {
      const headers = new Headers(init?.headers);
      headers.set("Authorization", \`Bearer \${accessToken}\`);
      return fetch(url, { ...init, headers });
    },
  });
  return endpoint.handler(client, params);
}
\`\`\`

## How We Built It

The implementation builds on three key technologies:

**Clerk handled the authentication complexity.** Their new MCP tools provide enterprise-grade OAuth with PKCE, automatic token refresh, and dynamic client registration. What previously required hundreds of lines of custom code now works out of the box.

**Vercel's MCP adapter** unified the transport layer. It handles both legacy SSE connections (for older clients) and the new HTTP transport, with built-in Redis support for stateful connections when needed.

**Stainless continues to power** our API-to-MCP transformation, automatically generating type-safe bindings from our OpenAPI spec. One line still exposes our entire evaluation API through MCP.

## Getting Started

For Scorecard users, connecting is now simpler than ever. Replace the placeholder \`MCP_SERVER_URL\` in your \`MCP.json\` file with the actual [URL value provided on GitHub](https://github.com/scorecard-ai/scorecard-mcp) e.g.:

\`\`\`javascript
{
  "mcpServers": {
    "scorecard": {
      "url": "MCP_SERVER_URL"
    }
  }
}
\`\`\`

**Note:** Claude web/desktop and Cline are not currently supported. We're working with Anthropic and the Clerk team to add support soon.

## What's Next for Scorecard MCP

We're incredibly excited by how the new spec has lowered the friction of building and deploying MCP servers. Scorecard's evaluation tools are now accessible from any MCP client with minimal configuration and rock-solid authentication.

For developers interested in the implementation details, check out our [open source code](https://github.com/scorecard-ai/scorecard-mcp), [Clerk's MCP demo](https://github.com/clerk/mcp-demo/tree/main), and [Vercel's adapter](https://github.com/vercel/mcp-adapter). The future of AI development is getting simpler, and we're here for it.`,
  },
  {
    id: 3,
    url: "introducing-scorecards-mcp-server",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/6838a44e918cafc58c5093c3_Screenshot%202025-05-29%20at%2011.15.37.png",
    title: "Introducing Scorecard's MCP Server",
    date: "May 30, 2025",
    readTime: 3,
    category: "News",
    content: `We're excited to announce the launch of the first remote Model Context Protocol (MCP) server for evaluation. Scorecard's AI evaluation and experimentation tools are now available directly within your favorite AI assistants. Today we're open-sourcing this implementation at [https://github.com/scorecard-ai/scorecard-mcp](https://github.com/scorecard-ai/scorecard-mcp), developed in close collaboration with our partners at Clerk, Stainless, and Cloudflare.

In the spirit of our earlier eval [partnership with Anthropic](https://www.scorecard.io/blog/scorecard-anthropic), we're introducing this MCP server implementation as another step forward to empower organizations to evaluate and improve your AI agent's performance.

## Seamless AI Assistant Integration

As AI assistants and specialized tools converge, our MCP implementation enables access to Scorecard's evaluation capabilities through natural language, directly in your workflow. This integration lets you:

- Run experiments and evaluations directly from your AI assistant
- Generate synthetic data without context switching
- Configure and iterate on metrics seamlessly
- Analyze your agent's performance while staying in your workflow

Available in claude.ai, Cursor, Windsurf and all MCP-compatible clients, this integration keeps AI builders focused on their work rather than switching between tools.

## Open Source Implementation

Our implementation uses the current MCP specification (2025-03-26) with plans to incorporate the next draft of MCP authentication standards in the future via Clerk. This work was made possible by three key partners:

### Clerk: Authentication Made Simple

We partnered with Clerk for authentication because their platform tools for AI applications provide a seamless security layer:

\`\`\`javascript
// Token exchange with Clerk
export async function tokenExchangeCallback(options: TokenExchangeCallbackOptions) {
  if (options.grantType === "authorization_code") {
    // For initial auth, maintain the token TTL from Clerk
    return {
      newProps: { ...options.props },
      accessTokenTTL: options.props.tokenSet.accessTokenTTL,
    };
  }
  if (options.grantType === "refresh_token") {
    // For token refresh, we use OIDC discovery to connect with Clerk
    const { as, client, clientAuth } = await getOidcConfig({
      issuer: \`https://\${env.CLERK_DOMAIN}/\`,
      client_id: env.CLERK_CLIENT_ID,
      client_secret: env.CLERK_CLIENT_SECRET,
    });
    const response = await oauth.refreshTokenGrantRequest(
      as, client, clientAuth, options.props.refreshToken
    );
    // Return the refreshed tokens with updated TTL
    return { /* token refresh response */ };
  }
}

// OIDC configuration for Clerk integration
async function getOidcConfig({ issuer, client_id, client_secret }) {
  // Discover OIDC endpoints from Clerk
  const as = await oauth.discoveryRequest(new URL(issuer))
    .then(response => oauth.processDiscoveryResponse(new URL(issuer), response));
  // Set up client credentials for OAuth exchanges
  const client = { client_id };
  const clientAuth = oauth.ClientSecretPost(client_secret);
  return { as, client, clientAuth };
}
\`\`\`

This implementation delivers enterprise-grade security through OAuth and PKCE, supports persistent sessions, and presents a custom consent screen experience for users. The full source for the clerk implementation can be [seen here.](https://github.com/scorecard-ai/scorecard-mcp/blob/main/src/clerk.ts)

### Stainless: From API to MCP in Minutes

Stainless automatically converted our OpenAPI specification directly into MCP-compatible code:

\`\`\`javascript
// Seamlessly connecting to Scorecard's API through Stainless-generated MCP
import { init, server } from "scorecard-ai-mcp/server"; // Stainless-generated package
import Scorecard from "scorecard-ai";

// Initialize with authenticated user's token
const client = new Scorecard({
  bearerToken: userToken
});

// One line to connect the Scorecard client to the MCP server
init({ server, client });
\`\`\`

This dramatically reduced development time and ensured a high-quality experience for our team and our MCP users. Check out our generated [Package](https://github.com/scorecard-ai/scorecard-node/tree/main/packages/mcp-server) and their [Guide](https://app.stainless.com/docs/guides/generate-an-mcp-server) to learn more.

### Cloudflare: Deploy Anywhere

Our MCP server is deployed on Cloudflare Workers, providing global availability with low latency:

\`\`\`javascript
// Deploying globally with Cloudflare Workers
{
  "name": "scorecard-mcp",
  "main": "src/index.ts",
  "compatibility_date": "2025-04-01",
  "compatibility_flags": ["nodejs_compat"],
  "durable_objects": {
    "bindings": [
      {
        "class_name": "ScorecardAuthenticatedMCP",
        "name": "MCP_OBJECT"
      }
    ]
  },
  "kv_namespaces": [
    {
      "binding": "OAUTH_KV", // For storing OAuth state
      "id": "8df5d44c1acc4feb844b23f6b3e06a1b"
    }
  ],
  "observability": {
    "enabled": true // Real-time monitoring
  }
}
\`\`\`

We've been impressed how Cloudflare has doubled down on the vision for MCP at their recent Demo Day, demonstrating how MCP is "emerging as a new AI interface" for discovering and interacting with services. Cloudflare workers give us a convenient KV namespace as well as immediate scaling and seamless observability. Special thanks to [Dustin Moore](https://www.linkedin.com/in/dustin-moore-a1392792/) for his engineering leadership in connecting these technologies into a cohesive, powerful tool.

## What's Next

We're implementing the [MCP draft spec](https://modelcontextprotocol.io/specification/draft/basic/authorization) with Clerk and will soon publish our authentication approach. Explore our code at [github.com/scorecard-ai/scorecard-mcp](https://github.com/scorecard-ai/scorecard-mcp) and share your feedback to help shape the future of remote MCP.`,
  },
  {
    id: 4,
    url: "introducing-agenteval-org-an-open-source-benchmarking-initiative-for-llm-evaluation",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd6078b4ba393c82c8846_cj94UnNDakwz513rpkS0BFd3Y4.png",
    title: "Introducing AgentEval.org",
    date: "February 25, 2025",
    readTime: 3,
    category: "LLM Evaluation",
    content: `

### Introducing AgentEval.org: An Open-Source Benchmarking Initiative for AI Agent Evaluation

As large language models (LLMs) become the backbone of applications across industries, it's becoming increasingly difficult for companies and users to understand what good AI performance looks like. That's why we're excited to announce **AgentEval.org**, the first open-source repository for AI benchmarks — an open, public resource providing datasets, best practices, and assessment methodologies.

![AgentEval Powered by Scorecard](https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd6068b4ba393c82c8811_4lczAclL2iKcrbuhjYFhiJvLK0.png)

## Where We're Starting: Open Benchmarking for the Legal Industry

Today, Agent Eval is an open, community-driven initiative designed to bring together a consortium of researchers, industry leaders, and other stakeholders across the legal domain. While we're starting by serving researchers, practitioners, and organizations shaping the future of legal AI, our long-term vision is a trusted source for AI benchmarking across multiple industries, including legal, finance, healthcare, and beyond.

Most LLM benchmarks today are outdated and narrowly focused, evaluating general model performance rather than how domain-specific applications built on top of LLMs function in real-world settings. There's a growing need for benchmarks that assess AI agents in applied contexts, ensuring they meet industry-specific requirements and practical use cases. In the legal industry that means things like case analysis, contract review, and regulatory compliance.

Because some benchmarking efforts often rely on proprietary datasets, closed methodologies, and restricted access, it can be difficult for researchers and developers to reproduce results, compare models fairly, and refine systems. At the same time, we've seen successful open evaluation frameworks — from NIST and ISO standards to initiatives like MLCommons, LLMSYS Chatbot Arena and LegalBench — showing that collaborative, open-source approaches lead to better benchmarking practices.

## Enter AgentEval.org

[Agent Eval](http://agenteval.org/) is an open and trusted source with the latest benchmarking studies and best practices across specialized domains starting with AI-powered apps used by the legal industry.

Agent Eval brings together the most relevant benchmarking studies from leading institutions like Stanford, Open Compass, and legal AI vendors such as Thomson Reuters and Harvey. Among them:

- Stanford LegalBench, a comprehensive benchmark assessing LLMs across 162 legal reasoning tasks crafted by legal experts;
- Overruling Dataset (Thomson Reuters), a classification benchmark designed to evaluate LLMs' ability to detect when legal precedent has been overruled;
- BigLaw Bench, a benchmark evaluating LLMs on real-world legal tasks that mirror billable work in law firms.

Together, these studies provide a useful foundation for evaluating AI performance in legal settings.

## Who This Helps

Agent Eval benefits a broad set of stakeholders across the AI and legal ecosystems:

- **Law firms** — Gain a clear, standardized way to compare legal AI solutions and select the best tools for their needs.
- **Legal AI vendors** — Understand their performance relative to competitors and improve their models based on objective, industry-standard benchmarks.
- **Academics & Policymakers** — Access insights into how AI systems perform in real-world legal applications, ensuring responsible deployment and regulation.
- **The broader AI industry** — By making benchmarks and best practices freely available, Agent Eval gives smaller startups, research institutions, and independent developers access to the same high-quality evaluation resources as well-funded private companies.

## Bringing Transparency and Trust to AI Benchmarking

Scorecard is a platform for teams building and evaluating AI products, from initial prototyping and experimentation to preparing AI products and agents for release. We also help with understanding performance in production, identifying issues, and feeding those insights back into experimentation. Clients like Thomson Reuters rely on us to evaluate and refine AI performance across products like Westlaw, CoCounsel Core, and Practical Law. These products remain proprietary and separate from the open source benchmarking initiative.

We're huge fans of open source standards and approaches and believe it's essential to drive trust in AI. That's why [we were among the first to adopt OpenTelemetry](https://opentelemetry.io/blog/2024/otel-generative-ai/) as part of our AI platform — helping establish standardized observability for generative AI. Our SDKs are already open source, and we're committed to expanding our contributions over time. By bringing these same principles to AI benchmarking, Agent Eval aims to be a trusted, neutral platform where the industry can align on transparent and standardized evaluation practices.

## Join the First Open-Source Repository for AI benchmarks

The standards we set for AI evaluation now will influence its adoption and impact for years to come. AgentEval.org is an open call for collaboration to anyone committed to building better, more transparent AI benchmarks. To get involved:

- Join the AgentEval.org working group subscribe to receive details about our inaugural meeting on legal agent benchmarks at Stanford this spring
- Share this AgentEval resource on LinkedIn with potential contributors`,
  },
  {
    id: 5,
    url: "scorecard-anthropic",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd6069edf86fdae5ba4ef_uKCvET5n9Ykp5cGF6untINP7Etk.png",
    title: "Scorecard ❤️ Anthropic",
    date: "November 25, 2024",
    readTime: 3,
    category: "News",
  },
  {
    id: 6,
    url: "simulate-test-repeat-robust-ai-system-development",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd60654a116f937d64f3b_VC530HCrWGLXUc5RcxcozW7ANm0.png",
    title: "Simulate, Test, Repeat: The Key to Robust AI System Development",
    date: "November 7, 2024",
    readTime: 4,
    category: "LLM Evaluation",
  },
  {
    id: 7,
    url: "must-have-features-for-llm-evaluation-frameworks",
    image:
      "https://cdn.prod.website-files.com/682dd348fd1fba47863dde07/682dd608b224caaa432738bf_6Mp1ZxOeD7kLWBUFMLGQk7mQ4c.png",
    title: "5 Must-Have Features for LLM Evaluation Frameworks",
    date: "September 29, 2024",
    readTime: 6,
    category: "LLM Evaluation",
  },
];
