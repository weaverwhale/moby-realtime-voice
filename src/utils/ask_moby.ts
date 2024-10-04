const SHOP_ID = process.env.REACT_APP_SHOP_ID || 'madisonbraids.myshopify.com';

export const askMoby = async (question: string, shopId?: string): Promise<boolean> => {
  const response = await fetch('/.netlify/functions/ask', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ question, shopId: shopId || SHOP_ID }),
  });
  const data = await response.json();
  return data
}