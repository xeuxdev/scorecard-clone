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

const developerGuidesMarkdown = `

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
        decrypted_update = self.lambda.decrypt(aggregated_update)

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

export function DeveloperGuides() {
  return (
    <div className="mx-4! my-8!">
      <ReactMarkdown components={customComponents}>
        {developerGuidesMarkdown}
      </ReactMarkdown>
    </div>
  );
}
