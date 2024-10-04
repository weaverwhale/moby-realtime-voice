import crypto from 'crypto'

export default async function ask(req: Request, res: Response) {
  try {
    const body = await req.json()
    const { question, shopId } = body;

    const questionBody = {
      stream: false,
      source: 'chat',
      userId: 'ceVJVYVQaRQj2un0fCJFXUnFwIE3',
      shopId: shopId || process.env.SHOP_ID || 'madisonbraids.myshopify.com',
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
          'x-api-key': process.env.REACT_APP_API_KEY,
        } as any,
        body: JSON.stringify(questionBody),
      }
    ).then(res => res.json());
    
    return Response.json(data);

  } catch (e) {
    console.log(e)
    return Response.json({
      code: 500,
      headers: { 'content-type': 'application/json' },
      error: 'Failed to ask Moby'
    });
  }
}