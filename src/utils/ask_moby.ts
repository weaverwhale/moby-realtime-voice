const SHOP_ID = process.env.SHOP_ID || 'madisonbraids.myshopify.com';

export const askMoby = async (question: string, shopId?: string): Promise<boolean> => {
  const questionBody = {
    stream: false,
    source: 'chat',
    userId: 'ceVJVYVQaRQj2un0fCJFXUnFwIE3',
    shopId: shopId || SHOP_ID,
    messageId: crypto.randomUUID(),
    conversationId: crypto.randomUUID(),
    question: question,
    query: question,
    generateInsights: false,
  };
  
  const data = await fetch('https://api.triplewhale.com/api/v2/willy/answer-nlq-question',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.API_KEY,
      } as any,
      body: JSON.stringify(questionBody),
    }
  ).then(res => res.json());
  
  return data;
}