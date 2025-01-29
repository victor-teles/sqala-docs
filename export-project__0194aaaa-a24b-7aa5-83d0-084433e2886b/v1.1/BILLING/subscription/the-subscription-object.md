---
title: "The Subscription object"
slug: "the-subscription-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Nov 13 2023 16:06:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Tue Nov 14 2023 17:24:58 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**periodicity** enum  
The periodicity of the subscription. Can be `MONTHLY`, `QUARTERLY`, `SEMI_ANNUAL`  or `ANNUALLY`.

| Status        | Description                                               |
| :------------ | :-------------------------------------------------------- |
| `MONTHLY`     | When the subscription is renewed once a month.            |
| `QUARTERLY`   | When the subscription is renewed once every three months. |
| `SEMI_ANNUAL` | When the subscription is renewed every six months.        |
| `ANNUALLY`    | When the subscription is renewed once a year.             |

***

**billingCycles** integer(>0)  
_Number of cycles this subscription should run for. If billingCycles=12, the subscription would expire after 12 cycles. If billing_cycles=-1, the subscription would run until it is cancelled. If periodicity=MONTHLY and billingCycles=12, the customer would be billed every month and this would go on for 12 times._

***

**items** [Subscription Item](ref:the-subscription-item-object)  
_This object represents a payer of the payment._

***

**discounts** [Discount](ref:the-discount-object)  
_This object represents a source bank account of the payment._

***

**paymentMethods** [Payment Methods](ref:the-payment-methods-object)  
_The raw data string used to generate QR code, it should be used together with QR code library._

***

**status** enum  
_The status of the payment. Can be `ACTIVE` or `DELETED`. _

| Status      | Description                                                                  |
| :---------- | :--------------------------------------------------------------------------- |
| `ACTIVE`    | Indicates that the payment was received.                                     |
| `DELETED`   | Indicates that the payment was processed by provider but needs confirmation. |
| `CANCELLED` |                                                                              |

***

**createdAt** datetime  
_Time at which the object was created._

***

**deletedAt** datetime  
_Time at which the object was processed._

***

**metadata** [Metadata](ref:metadata)  
_Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format._

## Example

```json
{
  "code": "YOUR CODE",
  "periodicity": "MONTHLY",
  "billingCycles": 12,
  "items": [
    {
      "code": "YOUR CODE",
      "description": "Musculação",
      "pricing": {
        "value": 10
      }
    }
  ],
  "discounts": [
    {
      "code": "YOUR CODE",
      "billingCycles": 6,
      "value": 10,
      "type": "PERCENTAGE"
    }
  ],
  "paymentMethods": {
    "default": "CREDIT_CARD",
    "available": ["CREDIT_CARD", "PIX_QRCODE"],
    "creditCard": {
      "installments": 3,
      "cardId": "",
      "card": {
        "code": "YOUR CODE",
        "holderName": "Bruce Wayne",
        "number": "11111111111",
        "expMonth": 1,
        "expYear": 30,
        "billingAddress": {
          "code": "YOUR CODE",
          "street": "...",
          "postalCode": "...",
          "city": "Rio de Janeiro",
          "state": "RJ",
          "country": "BR"
        }
      }
    }
  },
  "status": "ACTIVE",
  "createdAt": "2023-11-14T00:00:00Z",
  "cancelledAt": null,
  "deletedAt": null,
  "metadata": [
    {
      "name": "CUSTOM_FIELD_NAME", 
      "value": "CUSTOM_FIELD_VALUE"
    }
  ]
}
```
