export default {
  async fetch(request, env, ctx) {
    // In Wrangler v4, assets are automatically served
    // This worker just acts as a fallback for handling 404s

    const url = new URL(request.url);

    // Try to fetch the asset
    try {
      // Wrangler v4 automatically handles asset serving
      const response = await env.ASSETS.fetch(request);

      // If successful, return the response
      if (response.status !== 404) {
        return response;
      }

      // For 404s, try to serve index.html for client-side routing
      const indexRequest = new Request(new URL('/index.html', request.url));
      return env.ASSETS.fetch(indexRequest);
    } catch (e) {
      // If there's an error, return a 500
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
