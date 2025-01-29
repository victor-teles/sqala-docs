---
title: "Withdrawal"
slug: "withdrawal"
excerpt: ""
hidden: false
createdAt: "Thu Aug 04 2022 15:04:18 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jan 24 2025 21:19:02 GMT+0000 (Coordinated Universal Time)"
---
## Step 1. Create an Access Token

Get started by creating an Access Token. [Read how to create an Access Token](ref:authentication)

## Step 2. Create a Withdrawal

Your organization's recipient is represented by the `DEFAULT` code. If you need to create a withdrawal for another recipient, change the `DEFAULT` to the new recipient code.

## PIX

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/recipients/DEFAULT/withdrawal', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        method: 'PIX',
        amount: 990, // amount in cents
      	pixKey: "27286148494"
    })
})

const data = await response.json()

console.log(data)
```

## STANDARD

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/recipients/DEFAULT/withdrawal', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        method: 'STANDARD',
        amount: 990, // amount in cents
      	bankAccount: {
            holderName: 'Bruce Wayne',
            holderTaxId: "37515868066", 
            holderType: "INDIVIDUAL",
            branchNumber: "0001",
            accountNumber: "11111-1",
            bankId: "60701190"
      	}
    })
})

const data = await response.json()

console.log(data)
```

## PIX QRCode

```javascript
import fetch from 'node-fetch'

const qrcodeDataResponse = await fetch('https://api.sqala.tech/core/v1/dict/barcode?qrcode=[qrcode_here]', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'GET'
})

const qrcodeData = await qrcodeDataResponse.json()

const response = await fetch('https://api.sqala.tech/core/v1/recipients/DEFAULT/withdrawal', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        method: 'PIX_QRCODE',
        amount: qrcodeData.amount,
      	pixQrcode: "27286148494",
        hash: qrcodeData.hash
    })
})

const data = await response.json()

console.log(data)
```

<br />

output:

```json
{
  "id": "86cfd98a-dcc5-4b67-b8d7-841e4a9f37fd",
  "code": "45447b68-09fc-4af9-be82-d7b4df00fc3b",
  "amount": 990,
  "method": "PIX",
  "status": "PROCESSED",
  "createdAt": "2022-06-06T11:48:21Z",
  "approvedAt": "2022-06-06T11:48:21Z",
  "rejectedAt": null,
  "processedAt": "2022-06-06T11:48:21Z",
  "paidAt": null,
  "failedAt": null,
  "pixKey": "27286148494",
  "bankAccount": {
    "id": "a8a9c988-c2ba-44b9-af2d-ee6fcc00e269",
    "code": "ade39877-cb26-42bc-b151-8e6eef84284d",
    "holderName": "Bruce Wayne",
    "holderTaxId": "37515868066",
    "holderType": "INDIVIDUAL",
    "branchNumber": "0001",
    "accountNumber": "11111-1",
    "bankId": "60701190",
    "status": "ACTIVE",
    "createdAt": "2022-06-06T11:48:21Z",
    "updatedAt": null,
    "deletedAt": null,
    "metadata": null
  },
  "recipient": {
    "id": "80e579ff-e3a6-4573-84ff-30de777e7861",
    "code": "a1fc515c-ce4a-45e0-8802-2696b2c0337a",
    "name": "Bruce Wayne",
    "taxId": "37515868066",
    "type": "INDIVIDUAL",
    "status": "ACTIVE",
    "createdAt": "2022-06-08T15:02:00Z",
    "updatedAt": null,
    "deletedAt": null,
    "metadata": null
  },
}
```

<br />

## 

## Step 3. Create an Endpoint to receive the Webhooks

You can create an endpoint directly in the [developer area](https://developer.sqala.tech/pt-BR/apps) and select which events you want to receive.
