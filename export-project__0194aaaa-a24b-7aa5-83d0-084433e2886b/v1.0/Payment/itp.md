---
title: "ITP"
slug: "itp"
excerpt: ""
hidden: false
createdAt: "Tue Feb 20 2024 00:17:37 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon May 27 2024 15:01:54 GMT+0000 (Coordinated Universal Time)"
---
Pix is an instant payment platform created and managed by the monetary authority of Brazil, the Central Bank of Brazil, which enables the quick execution of payments and transfers.

#### Some important information:

- The amount in the transactions will always be in cents, so 100 cents = 1 BRL.
- There's a maximum amount of 1.99 BRL (199 cents) when testing our API.
- For specific information on the parameters, access the[ ITP object page.](the-itp-object)

## Step 1. Create an Access Token

Get started by creating an Access Token. [Read how to create an Access Token](ref:authentication)

## Step 2. Create an ITP

[Read how to create an ITP](ref:create-itp) 

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/itp-payments', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        amount: 990, // amount in cents
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
  "url": "https://url.com",
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
