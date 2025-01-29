---
title: "Pix QR Code"
slug: "pix"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Jun 01 2022 02:40:06 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Aug 04 2023 17:05:58 GMT+0000 (Coordinated Universal Time)"
---
Pix is an instant payment platform created and managed by the monetary authority of Brazil, the Central Bank of Brazil, which enables the quick execution of payments and transfers.

#### Some important information:

- The amount in the transactions will always be in cents, so 100 cents = 1 BRL.
- There's a maximum amount of 1.99 BRL (199 cents) when testing our API.
- For specific information on the parameters, access the[ Pix object page.](the-pix-object)

## Step 1. Create an Access Token

Get started by creating an Access Token. [Read how to create an Access Token](ref:authentication)

## Step 2. Create a PIX QR Code

[Read how to create a Pix QR Code](ref:create-pix) 

```javascript
import fetch from 'node-fetch'

const response = await fetch('https://api.sqala.tech/core/v1/pix-qrcode-payments', {
    headers: { 
      'Authorization': 'Bearer ' + 'YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json' 
    },
    method: 'POST',
    body: JSON.stringify({
        amount: 990 // amount in cents
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
  "payload": "00020101021226790014BR.GOV.BCB.PIX2557pix.letsbank.b.br/v2/cob/21158650172744578f95d5830c5c8bb8520400005303986540510.005802BR5924SQALAPAY PAGAMENTOS LTDA6008Curitiba62070503***630451FF",
  "payer": null,
  "split": null,
  "status": "PROCESSED",
  "createdAt": "2022-06-06T11:48:21Z",
  "processedAt": "2022-06-06T11:48:26Z",
  "paidAt": null,
  "failedAt": null,
  "metadata": null
}
```

## Step 3. Render QR Code In Javascript

It's possible to render the QR Code using some javascript libraries. The payload on the output of the previous step is the one that should be used to do so. [Read this article](https://dev.to/bibekkakati/generate-qr-code-in-javascript-2o67).

```html
<div id="qrcode"></div>
<script>
  var QR_CODE = new QRCode("qrcode", {
    width: 220,
    height: 220,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  QR_CODE.makeCode("00020101021226790014BR.GOV.BCB.PIX2557pix.letsbank.b.br/v2/cob/21158650172744578f95d5830c5c8bb8520400005303986540510.005802BR5924SQALAPAY PAGAMENTOS LTDA6008Curitiba62070503***630451FF")
</script>
```

## Step 4. Create an Endpoint to receive the Webhooks

You can create an endpoint directly in the [developer area](https://developer.sqala.tech/pt-BR/apps) and select which events you want to receive.
