---
title: "The Webhook object"
slug: "the-webhook-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 06 2022 14:14:24 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Sep 15 2022 21:30:38 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**event** enum  
_The type of event. See the [list of events](ref:webhook)._

***

**object** object  
_The object that generated the event._

***

**signature** string  
_The signature allows you to verify that the events were sent by us, not by a third party._

***

**data** object  
_The content of the webhook._

***

**status** enum  
_The status of the webhook. Can be `PENDING`, `DELIVERED` or `FAILED`._

| Status      | Description                                                                                         |
| :---------- | :-------------------------------------------------------------------------------------------------- |
| `PENDING`   | Indicates that the webhook was not sent or didn't receive the confirmation but has pending retries. |
| `DELIVERED` | Indicates that the webhook was sent and received confirmation.                                      |
| `FAILED`    | Indicates that the webhook was sent but didn't receive the confirmation after all retries.          |

***

**createdAt** datetime  
_Time at which the object was created._

***

**deliveredAt** datetime  
_Time at which the object was delivered._

***

**failedAt** datetime  
_Time at which the object was failed._

## Example

```json
{
   "id": "89f4209f-b574-4582-86b6-98584b4f65ef",
   "event": "payment.paid",
   "object": {
      "id": "b6d9473e-5612-4a51-a854-d1d9f62e60e0",
      "type": "BankTransferPayment"
   },
   "signature": "e91aa3f03c7699db37e070ad4224a15c7b39dd383d2b0aef6f270f0a10d42772",
   "responses": [
     {
       "code": 200,
       "time": 289,
       "at": "2022-06-06T11:49:03Z"
     }
   ],
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
      "payer":{
         "name": "Bruce Wayne",
         "taxId": "13703591013"
      },
      "source": {
         "bankName": "ITAÚ UNIBANCO S.A.",
         "branchNumber": "1",
         "accountNumber": "99999"
      },
      "destination": {
         "bankName": "NU PAGAMENTOS S.A.",
         "branchNumber": "1",
         "accountNumber": "199060"
      }
   },
  "status": "DELIVERED",
  "createdAt": "2022-06-06T11:48:21Z",
  "queuedAt": "2022-06-06T11:48:22Z",
  "deliveredAt": "2022-06-06T11:49:03Z",
  "failedAt": null,
  "lastAttemptAt": "2022-06-06T11:49:01Z",
  "nextAttemptAt": null,
  "endpointId": "33d8034f-6e13-4d15-b1b4-d88fcced590d",
  "organizationId": "bd0b3148-8772-4854-8a97-be409ed1ffa8"
}
```
