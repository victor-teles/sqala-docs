---
title: "Webhook"
slug: "webhook"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Jun 08 2022 18:37:07 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Jul 18 2023 15:32:52 GMT+0000 (Coordinated Universal Time)"
---
We use webhooks to notify your application when an event happens in your account. Webhooks are particularly useful for asynchronous events.

## Step 1. Create a Route

```javascript
const express = require('express')
const app = express()

app.use(express.json())

app.post('/webhooks', (req, res) => {
  console.log(res.body)
  res.sendStatus(200)
})

app.listen(3000)
```

output

```json
{
   "id": "89f4209f-b574-4582-86b6-98584b4f65ef",
   "event": "payment.paid",
   "object": {
      "id": "b6d9473e-5612-4a51-a854-d1d9f62e60e0",
      "type": "BankTransferPayment"
   },
   "data": {
      "id": "96f42ef0-00b1-11ed-bb3a-098b2c4afa72", 
      "code": "ffa16dae-ac66-4830-8984-171f306ca8d7",
      "transactionId": "E00416968202207061808Ymqobao0YFb",
      "amount": 1990,
      "paidAmount": 1990,
      "method": "BANK_TRANSFER",
      "status": "PAID",
      "createdAt": "2022-07-11T00:37:06.009Z",
      "processedAt": "2022-07-11T00:37:06.116Z",
      "paidAt": "2022-07-06T00:00:00.000Z",
      "failedAt": null,
      "split": [],
      "payer": {
         "name": "Bruce Wayne",
         "taxId": "13703591013"
      },
      "source": {
         "bankName": "ITAÚ UNIBANCO S.A.",
         "branchNumber": "1",
         "accountNumber": "99999"
      },
      "destination":{
         "bankName": "NU PAGAMENTOS S.A.",
         "branchNumber": "1",
         "accountNumber": "199060"
      }
   }
}
```

## Step 2. Create an Endpoint to receive the Webhooks

You can create an endpoint directly in the [developer area](https://developer.sqala.tech/pt-BR/apps) and select which events you want to receive.

## List of events

**payment.paid**  
_Indicates that the payment was confirmed._

***

**payment.failed**  
_Indicates that the payment was not processed._

***

**withdrawal.created**  
_Indicates that the withdrawal was paid._

***

**withdrawal.failed**  
_Indicates that the withdrawal failed._
