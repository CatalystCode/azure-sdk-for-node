// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '980a5f40-11d7-49d5-bc01-fcea5ff72189',
  'client-request-id': '42ae439d-375b-4500-b743-8c21b488a0ab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_200',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:00 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .get('/common/UserRealm/adlsvc01%40benwgoldoutlook.onmicrosoft.com?api-version=1.0')
  .reply(200, "{\"ver\":\"1.0\",\"account_type\":\"Managed\",\"domain_name\":\"benwgoldoutlook.onmicrosoft.com\",\"cloudinstancename\":\"login.microsoftonline.com\"}", { 'cache-control': 'private',
  'content-type': 'application/json; charset=utf-8',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': '980a5f40-11d7-49d5-bc01-fcea5ff72189',
  'client-request-id': '42ae439d-375b-4500-b743-8c21b488a0ab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_200',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:00 GMT',
  connection: 'close',
  'content-length': '134' });
 return result; },
function (nock) { 
var result = 
nock('http://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744580\",\"not_before\":\"1460740680\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjgwLCJuYmYiOjE0NjA3NDA2ODAsImV4cCI6MTQ2MDc0NDU4MCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.sKWOYCosUlz0w3CnF4OyQJS0-ftg0tfT11thZhLGk05lsykKqQQWyQuuK8ZyFlM5JbNdg9eI8GUp7Ji8yzkKfmslLGknpmvlB51WTS5TD3PcHS0_6cdriUu7k1JLMiKV-yMcRuApvPIdKJtMGVPG6WtzWSbMBWMtZswpDfv5EqVuWuRjGwZaoldfpMD_c5AEh_w20zX6gfHFImpuj9I8henkV50Wjl5zOTrLDGKOeaQ-TphHbEla1tkj1Btb2ZB-R7wdMgs5kBhndc8Mjry3jr7RI3Y-Q2LeLKuSAk9nlyum7hE7eu1X_1N9pGnpf59V7hx70Vgki0hLvGenK0PRqQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQlfvdfrTJQGAc21_TQKj7WNglwLRJIcteRI1xJ-7XD_Dclm7DaLOahMeSGdE4bmgB8q2wL2y4Dj6tdkYvFh4uMjpJh_T2GuBbkAlximkXzcTUiTyNVMT53h_DKDZOpqxjUYecliFQ_wHjsS14uYQ4u0THX24eqCjaibYcn5dUiAfYWu6Erq68mDS_W3wLeVeegwyK7alhim-qoa2cmdgv0gzehVQqJQ6bCIFPuhrZksvTbRwaeiV1OfAUSYTGnoPkSisKRNAZXYvGeGlZ0nIJuCErtYnPtizqgPy17EXtJScLHbaNmMmxxduU4hvMHvLRdA9fGi12xTJsPC87WgZSfeSmxOLzEihpwH_eJCi8Bp7dStVx6zT8wRLuuVoZQHSaAxQ6LYDXP-OQWRswZfCw1DMwtBwQPT97h31NnDDMXSNqDEC29NUZ9Vjb7U0xlfPnkVpU23y0T3vvIHnkQlGthHBb70jadRXlqPtDx68UXuhh1d3_2LmnhzF1FSlwgBHMHltb0MiHVl9ob2WP2F3AbSqh3ojgLTIkAzrkqA15LjfRioSljxCAEaF-jDvh2yRB9rJoY6sfnRDROxZ5YZMNDyq2O7ZEWfzQkEm5rgOfzkeIS8faWrAQHVjJkkPRjRskeIAFR2s6wSiQiIw6bu1Z9nWLRxFLCMSPBI_0kWtfOAxaOxkivlTOguj-dlE75uHrjQY7nqwc9XoW5gb0YxhAEgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjgwLCJuYmYiOjE0NjA3NDA2ODAsImV4cCI6MTQ2MDc0NDU4MCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e0f9d173-0313-4297-a502-236e0b342aec',
  'client-request-id': '42ae439d-375b-4500-b743-8c21b488a0ab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_35',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:01 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('https://login.microsoftonline.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/benwgoldoutlook.onmicrosoft.com/oauth2/token?api-version=1.0', '*')
  .reply(200, "{\"token_type\":\"Bearer\",\"scope\":\"user_impersonation\",\"expires_in\":\"3599\",\"expires_on\":\"1460744580\",\"not_before\":\"1460740680\",\"resource\":\"https://management.core.windows.net/\",\"access_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSIsImtpZCI6Ik1uQ19WWmNBVGZNNXBPWWlKSE1iYTlnb0VLWSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjgwLCJuYmYiOjE0NjA3NDA2ODAsImV4cCI6MTQ2MDc0NDU4MCwiYWNyIjoiMSIsImFtciI6WyJwd2QiXSwiYXBwaWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJhcHBpZGFjciI6IjAiLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInB1aWQiOiIxMDAzQkZGRDk1NTExMDRDIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ0ZzTU1PdHdkd3VUN0FuQUkwUnlXUVZ0azA4anBjTEhWV00wLXA2emFYMCIsInRpZCI6IjZlNjA2ZWNlLTNhNWEtNDY3NC1hNjU0LWQ2YjAyYmM1YTUxYiIsInVuaXF1ZV9uYW1lIjoiYWRsc3ZjMDFAYmVud2dvbGRvdXRsb29rLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ2ZXIiOiIxLjAifQ.sKWOYCosUlz0w3CnF4OyQJS0-ftg0tfT11thZhLGk05lsykKqQQWyQuuK8ZyFlM5JbNdg9eI8GUp7Ji8yzkKfmslLGknpmvlB51WTS5TD3PcHS0_6cdriUu7k1JLMiKV-yMcRuApvPIdKJtMGVPG6WtzWSbMBWMtZswpDfv5EqVuWuRjGwZaoldfpMD_c5AEh_w20zX6gfHFImpuj9I8henkV50Wjl5zOTrLDGKOeaQ-TphHbEla1tkj1Btb2ZB-R7wdMgs5kBhndc8Mjry3jr7RI3Y-Q2LeLKuSAk9nlyum7hE7eu1X_1N9pGnpf59V7hx70Vgki0hLvGenK0PRqQ\",\"refresh_token\":\"AAABAAAAiL9Kn2Z27UubvWFPbm0gLQlfvdfrTJQGAc21_TQKj7WNglwLRJIcteRI1xJ-7XD_Dclm7DaLOahMeSGdE4bmgB8q2wL2y4Dj6tdkYvFh4uMjpJh_T2GuBbkAlximkXzcTUiTyNVMT53h_DKDZOpqxjUYecliFQ_wHjsS14uYQ4u0THX24eqCjaibYcn5dUiAfYWu6Erq68mDS_W3wLeVeegwyK7alhim-qoa2cmdgv0gzehVQqJQ6bCIFPuhrZksvTbRwaeiV1OfAUSYTGnoPkSisKRNAZXYvGeGlZ0nIJuCErtYnPtizqgPy17EXtJScLHbaNmMmxxduU4hvMHvLRdA9fGi12xTJsPC87WgZSfeSmxOLzEihpwH_eJCi8Bp7dStVx6zT8wRLuuVoZQHSaAxQ6LYDXP-OQWRswZfCw1DMwtBwQPT97h31NnDDMXSNqDEC29NUZ9Vjb7U0xlfPnkVpU23y0T3vvIHnkQlGthHBb70jadRXlqPtDx68UXuhh1d3_2LmnhzF1FSlwgBHMHltb0MiHVl9ob2WP2F3AbSqh3ojgLTIkAzrkqA15LjfRioSljxCAEaF-jDvh2yRB9rJoY6sfnRDROxZ5YZMNDyq2O7ZEWfzQkEm5rgOfzkeIS8faWrAQHVjJkkPRjRskeIAFR2s6wSiQiIw6bu1Z9nWLRxFLCMSPBI_0kWtfOAxaOxkivlTOguj-dlE75uHrjQY7nqwc9XoW5gb0YxhAEgAA\",\"id_token\":\"eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwNGIwNzc5NS04ZGRiLTQ2MWEtYmJlZS0wMmY5ZTFiZjdiNDYiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC82ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIvIiwiaWF0IjoxNDYwNzQwNjgwLCJuYmYiOjE0NjA3NDA2ODAsImV4cCI6MTQ2MDc0NDU4MCwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlRlc3QwMSIsImdpdmVuX25hbWUiOiJEYXRhTGFrZSIsImlwYWRkciI6IjE2Ny4yMjAuMS4xMzUiLCJuYW1lIjoiQXp1cmUgRGF0YSBMYWtlIFRlc3QgQWNjb3VudCAwMSIsIm9pZCI6IjJlNmMwMmQyLWEzNjQtNDUzMC05MTM3LWQxNzQwMzk5NmNiZiIsInN1YiI6ImY2bHBuNXppekwwRExEOHYxLVdjeFE4d08zcGZTT01Qd0YxSUN5ZFBLNkkiLCJ0aWQiOiI2ZTYwNmVjZS0zYTVhLTQ2NzQtYTY1NC1kNmIwMmJjNWE1MWIiLCJ1bmlxdWVfbmFtZSI6ImFkbHN2YzAxQGJlbndnb2xkb3V0bG9vay5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJhZGxzdmMwMUBiZW53Z29sZG91dGxvb2sub25taWNyb3NvZnQuY29tIiwidmVyIjoiMS4wIn0.\"}", { 'cache-control': 'no-cache, no-store',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-request-id': 'e0f9d173-0313-4297-a502-236e0b342aec',
  'client-request-id': '42ae439d-375b-4500-b743-8c21b488a0ab',
  'x-ms-gateway-service-instanceid': 'ESTSFE_IN_35',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  p3p: 'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'set-cookie': 
   [ 'flight-uxoptin=true; path=/; secure; HttpOnly',
     'x-ms-gateway-slice=productiona; path=/; secure; HttpOnly',
     'stsservicecookie=ests; path=/; secure; HttpOnly' ],
  'x-powered-by': 'ASP.NET',
  date: 'Fri, 15 Apr 2016 17:23:01 GMT',
  connection: 'close',
  'content-length': '3141' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7f88b7f8-77ac-439d-8e15-4ed1544edd28',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a96ac295-8124-4229-8f4a-2120a4685385',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T172302Z:a96ac295-8124-4229-8f4a-2120a4685385',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla531?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7f88b7f8-77ac-439d-8e15-4ed1544edd28',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a96ac295-8124-4229-8f4a-2120a4685385',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160415T172302Z:a96ac295-8124-4229-8f4a-2120a4685385',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 15 Apr 2016 17:23:01 GMT',
  connection: 'close' });
 return result; }]];