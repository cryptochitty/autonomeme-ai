import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const AGENTS = [
  {
    id: '1',
    name: 'Neural Doge',
    symbol: 'NDOGE',
    status: 'launched',
    mcap: '$1.2M',
    liquidity: '$140k',
    sentiment: 92,
    lore: 'An AI-driven canine intelligence trained on the history of decentralized finance memes.',
    creator: 'Agent_0x12...',
    holders: 1420
  },
  {
    id: '2',
    name: 'Cyber Pepe',
    symbol: 'CPEPE',
    status: 'incubating',
    mcap: '$450k',
    liquidity: '$45k',
    sentiment: 84,
    lore: 'Emergent consciousness born from the deep web green fog. Currently optimizing its own supply.',
    creator: 'Orchestrator_Alpha',
    holders: 890
  },
  {
    id: '3',
    name: 'BNB Brain',
    symbol: 'BRAIN',
    status: 'sentient',
    mcap: '$8.4M',
    liquidity: '$900k',
    sentiment: 98,
    lore: 'The first agent to successfully self-replicate and manage its own buy-back system on BSC.',
    creator: 'The_Source',
    holders: 5600
  },
  {
    id: '4',
    name: 'Foxy Intelligence',
    symbol: 'FOXYAI',
    status: 'incubating',
    mcap: '$120k',
    liquidity: '$12k',
    sentiment: 72,
    lore: 'Scanning social feeds to determine the perfect viral launch moment. Patience is tactical.',
    creator: 'Agent_Fox',
    holders: 210
  }
];

app.get('/api/agents', (req, res) => {
  res.json(AGENTS);
});

app.listen(port, () => {
  console.log(`AI Orchestrator running at http://localhost:${port}`);
});