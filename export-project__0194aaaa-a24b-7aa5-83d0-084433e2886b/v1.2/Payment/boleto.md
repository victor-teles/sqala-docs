---
title: "Boleto"
slug: "boleto"
excerpt: ""
hidden: false
createdAt: "Fri Apr 05 2024 14:03:28 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu May 30 2024 14:36:39 GMT+0000 (Coordinated Universal Time)"
---
Boleto means ‘ticket’ and is a popular Brazilian cash payment method. A ‘boleto’ is a printed or virtual voucher with a barcode, payment details, and customer information.

#### Some important information:

- The amount in the transactions will always be in cents, so 100 cents = 1 BRL.
- There's a maximum amount of 1.99 BRL (199 cents) when testing our API.
- For specific information on the parameters, access the[ ITP object page.](the-itp-object)

## Step 1. Create an Access Token

Get started by creating an Access Token. [Read how to create an Access Token](ref:authentication)

## Step 2. Create a Boleto

[Read how to create a Boleto](ref:create-boleto) 

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/boleto-payments', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        amount: 990, // amount in cents
        description: "My order",
        expiresIn: 3,
        payer: {
            name: 'Bruce Wayne',
            taxId: '06516763208' 
        }
    })
})

const data = await response.json()

console.log(data)
```

ouput

```json
{
  "id": "6a0b14a9-023c-4198-9ada-6e4684213340",
  "code": "40040b70-89be-40ad-ab7f-7a123cb7ab6a",
  "amount": 990,
  "paidAmount": null,
  "description": "My order",
  "expiresIn": 3,
  "barcode": "001 9 337370000000100 05009 401448 16060680935031",
  "pdf": "https://url.com",
  "payer": {
      "name": "Bruce Wayne",
      "taxId": "06516763208" 
  },
  "split": null,
  "status": "PROCESSED",
  "createdAt": "2022-06-06T11:48:21Z",
  "processedAt": "2022-06-06T11:48:26Z",
  "paidAt": null,
  "failedAt": null,
  "metadata": null
}
```

## Step 3. Create an Endpoint to receive the Webhooks

You can create an endpoint directly in the [developer area](https://developer.sqala.tech/pt-BR/apps) and select which events you want to receive.
