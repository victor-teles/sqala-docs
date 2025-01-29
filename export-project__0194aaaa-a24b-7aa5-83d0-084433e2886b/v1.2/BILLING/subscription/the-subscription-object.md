---
title: "The Subscription object"
slug: "the-subscription-object"
excerpt: ""
hidden: true
createdAt: "Wed Nov 06 2024 12:34:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Nov 18 2024 20:44:36 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**description** string  
_Subscription's description._

***

**method** enum  
_Payment method used to charge the customer._

| Type            | Description                                        |
| :-------------- | :------------------------------------------------- |
| `RECURRENT_PIX` | Represents a recurrent pix payment (open finance). |
| `BOLETO`        | Represents a boleto payment.                       |
| `QRCODE_PIX`    | Represents a pix qrcode payment                    |
| `ITP`           | Represents a open finance payment                  |

***

**payer** [Payer](ref:the-payer-object-1)  
_This object represents a payer of the subscription._

***

**period** [Period](ref:the-period-object)  
_This object represents the period of the subscription._

***

**items** [Item](ref:the-item-object)  
_This object represents the items of the subscription._

***

## Example

```json
{
  "description": "Spider items",
  "method": "RECURRENT_PIX",
  "bank": "260",
  "payer": {
    "email": "spider@avengers.com",
    "name": "Peter Parker",
    "taxId": "88797438057"
  },
  "period": {
    "interval": "MONTH",
    "intervalCount": 1,
    "duration": 6
  },
  "items": [
    {
      "description": "Web capsules",
      "amount": 10000
    }
  ]
}
```
