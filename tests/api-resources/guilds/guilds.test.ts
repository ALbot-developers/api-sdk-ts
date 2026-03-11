// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import AlbotAPISDK from 'albot-api-sdk';

const client = new AlbotAPISDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource guilds', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.guilds.create(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.guilds.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createConnectionStates: only required params', async () => {
    const responsePromise = client.guilds.createConnectionStates(0, { tc_id: 0, vc_id: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createConnectionStates: required and optional params', async () => {
    const response = await client.guilds.createConnectionStates(0, {
      tc_id: 0,
      vc_id: 0,
      character_limit: 0,
      custom_voice: 'custom_voice',
      lang: 'lang',
      read_guild: true,
      read_name: true,
      speech_speed: 0,
      translate: true,
    });
  });

  // Mock server tests are disabled
  test.skip('createQuickReport: only required params', async () => {
    const responsePromise = client.guilds.createQuickReport(0, {
      category: 'category',
      description: 'description',
      'turnstile-token': 'turnstile-token',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createQuickReport: required and optional params', async () => {
    const response = await client.guilds.createQuickReport(0, {
      category: 'category',
      description: 'description',
      'turnstile-token': 'turnstile-token',
    });
  });

  // Mock server tests are disabled
  test.skip('listSubscriptions', async () => {
    const responsePromise = client.guilds.listSubscriptions(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
