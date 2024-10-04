import 'dotenv/config';
import { askMoby } from './src/utils/ask_moby';

askMoby('What is my roas this week?', 'madisonbraids.myshopify.com').then(console.log);