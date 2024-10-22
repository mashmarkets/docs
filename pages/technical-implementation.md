# Technical Implementation

Mash Markets is built on **Solana**, a high-performance blockchain known for its low latency and high throughput. Here’s an overview of the key components of Mash Markets’ technical stack:

### **Smart Contracts**:
- Mash Markets’ core functionality relies on **Solana smart contracts** to manage liquidity pools, execute trades, and handle margin and liquidation processes.
- The contracts are designed to be **trustless**, meaning users maintain full control over their assets at all times.

### **Price Oracles**:
- Mash Markets uses **Pyth** and **Switchboard** oracles to provide real-time pricing for assets. This ensures that all trades are executed based on accurate market data.
- Users can create custom price feeds (oracles) for new assets, which are integrated into the platform’s pricing mechanism.

### **Leverage and Liquidation Mechanism**:
- Mash Markets enables traders to use up to **100x leverage**. This is made possible through efficient collateral management and a robust liquidation mechanism.
- If a trader’s collateral falls below the required margin level, the position is liquidated to protect liquidity providers from losses.

### **Transaction Speed and Scalability**:
- Solana’s architecture allows Mash Markets to process thousands of transactions per second, ensuring that trades are executed instantly, with low fees.
- The platform is highly scalable and can accommodate an increasing number of users without compromising performance.