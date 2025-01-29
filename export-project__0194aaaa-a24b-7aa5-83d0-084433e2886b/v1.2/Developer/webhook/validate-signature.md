---
title: "Validate signature"
slug: "validate-signature"
excerpt: ""
hidden: false
createdAt: "Thu Nov 21 2024 19:06:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Nov 21 2024 19:49:03 GMT+0000 (Coordinated Universal Time)"
---
# How to Verify the Signature

Ensuring the authenticity of messages from Sqala involves generating a hash of the data field sent through the callback, utilizing the secret key generated during the URL creation process. This hash serves as a unique fingerprint, verifying the integrity of the received data and prevents attacks like [man in the middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack).

<br />

## Generating the hash

First, create your endpoint and get the secret from [our developer portal](https://developer.sqala.tech/apps/endpoints).

> ℹ️ When generating the hash, include all JSON fields—even those with null values—since the entire data structure affects the calculation.

<br />

```json Webhook paylod
{
  "id": "5784b599-8a61-4da3-bbec-88e3ffb25326",
  "event": "transaction.created",
  "signature": "b08a306a3f809b64914de448ee8e42e503c9d136d8bda69d13f299bac8b9abf2",
  "object": {
    "id": "3590f3d6-8a8e-4674-9b6c-dfffa371e50c",
    "type": "Transaction"
  },
  "data": { "id": "f815535b-734b-4ad9-93f6-a22fdb7cafcc" }
}
```

<br />

To validate the webhook signature, follow these steps:

1. Extract the signature from the webhook payload (found in the "signature" field)
2. Get the data object from the payload and convert it to a JSON string
3. Use HMAC-SHA256 with your secret key to create a hash of the data string
4. Compare your generated hash with the received signature - they should match exactly

Here are examples in some programming languages for verifying the signature:

***

### Code examples

```typescript
import crypto from 'node:crypto'

const secretSqala = 'edd6fc268e6813a03096cf16b504c99a989ebd37432a1a90f460c2b2336a6a6e'
const webhook = {
  id: '5784b599-8a61-4da3-bbec-88e3ffb25326',
  event: 'transaction.created',
  signature: 'b08a306a3f809b64914de448ee8e42e503c9d136d8bda69d13f299bac8b9abf2',
  object: {
    id: '3590f3d6-8a8e-4674-9b6c-dfffa371e50c',
    type: 'Transaction',
  },
  data: {
    id: 'f815535b-734b-4ad9-93f6-a22fdb7cafcc',
  },
}

const hash = crypto.createHmac('sha256', secretSqala).update(JSON.stringify(webhook.data))
const hashMatch = hash.digest('hex') === webhook.signature

console.log(`Its match ? ${hashMatch ? '✅ Yes' : '❌ No'}`)
 
```
```php PHP
<?php
$secretSqala = 'edd6fc268e6813a03096cf16b504c99a989ebd37432a1a90f460c2b2336a6a6e';
$webhook = [
    'id' => '5784b599-8a61-4da3-bbec-88e3ffb25326',
    'event' => 'transaction.created',
    'signature' => 'b08a306a3f809b64914de448ee8e42e503c9d136d8bda69d13f299bac8b9abf2',
    'object' => [
        'id' => '3590f3d6-8a8e-4674-9b6c-dfffa371e50c',
        'type' => 'Transaction',
    ],
    'data' => [
        'id' => 'f815535b-734b-4ad9-93f6-a22fdb7cafcc',
    ],
];

$hash = hash_hmac('sha256', json_encode($webhook['data']), $secretSqala);
$hashMatch = hash_equals($hash, $webhook['signature']);

echo "Its match ? " . ($hashMatch ? "✅ Yes" : "❌ No");
```
```ruby Ruby
require 'json'
require 'openssl'

secret_sqala = 'edd6fc268e6813a03096cf16b504c99a989ebd37432a1a90f460c2b2336a6a6e'
webhook = {
  id: '5784b599-8a61-4da3-bbec-88e3ffb25326',
  event: 'transaction.created',
  signature: 'b08a306a3f809b64914de448ee8e42e503c9d136d8bda69d13f299bac8b9abf2',
  object: {
    id: '3590f3d6-8a8e-4674-9b6c-dfffa371e50c',
    type: 'Transaction'
  },
  data: {
    id: 'f815535b-734b-4ad9-93f6-a22fdb7cafcc'
  }
}

hash = OpenSSL::HMAC.hexdigest('SHA256', secret_sqala, webhook[:data].to_json)
hash_match = hash == webhook[:signature]

puts "Its match ? #{hash_match ? '✅ Yes' : '❌ No'}"

```
```csharp C#
using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;

class Program
{
    static void Main()
    {
        var secretSqala = "edd6fc268e6813a03096cf16b504c99a989ebd37432a1a90f460c2b2336a6a6e";
        var webhook = new
        {
            id = "5784b599-8a61-4da3-bbec-88e3ffb25326",
            event_type = "transaction.created",
            signature = "b08a306a3f809b64914de448ee8e42e503c9d136d8bda69d13f299bac8b9abf2",
            @object = new
            {
                id = "3590f3d6-8a8e-4674-9b6c-dfffa371e50c",
                type = "Transaction"
            },
            data = new
            {
                id = "f815535b-734b-4ad9-93f6-a22fdb7cafcc"
            }
        };

        var dataJson = JsonSerializer.Serialize(webhook.data);
        var secretKeyBytes = Encoding.UTF8.GetBytes(secretSqala);
        var dataBytes = Encoding.UTF8.GetBytes(dataJson);

        using var hmac = new HMACSHA256(secretKeyBytes);
        var hashBytes = hmac.ComputeHash(dataBytes);
        var hash = BitConverter.ToString(hashBytes).Replace("-", "").ToLower();

        var hashMatch = hash == webhook.signature;

        Console.WriteLine($"Its match ? {(hashMatch ? "✅ Yes" : "❌ No")}");
    }
}
```
