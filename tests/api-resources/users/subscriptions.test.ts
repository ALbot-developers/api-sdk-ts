// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlbotAPISDK from 'albot-api-sdk';

const client = new AlbotAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.users.subscriptions.list(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('activate: only required params', async () => {
    const responsePromise = client.users.subscriptions.activate('sub_id', { user_id: 0, guild_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('activate: required and optional params', async () => {
    const response = await client.users.subscriptions.activate('sub_id', { user_id: 0, guild_id: 0 });
  });

  // Prism tests are disabled
  test.skip('cancel: only required params', async () => {
    const responsePromise = client.users.subscriptions.cancel('sub_id', { user_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('cancel: required and optional params', async () => {
    const response = await client.users.subscriptions.cancel('sub_id', { user_id: 0 });
  });

  // Prism tests are disabled
  test.skip('renew: only required params', async () => {
    const responsePromise = client.users.subscriptions.renew('sub_id', { user_id: 0, new_plan: 'new_plan' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('renew: required and optional params', async () => {
    const response = await client.users.subscriptions.renew('sub_id', { user_id: 0, new_plan: 'new_plan' });
  });
});
