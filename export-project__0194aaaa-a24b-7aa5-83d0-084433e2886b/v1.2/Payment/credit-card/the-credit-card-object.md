---
title: "The Credit Card object"
slug: "the-credit-card-object"
excerpt: ""
hidden: false
createdAt: "Fri Nov 08 2024 17:42:43 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sat Nov 23 2024 19:40:02 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**amount** integer(>0)  
_Amount in cents to be paid._

***

**paidAmount** integer(>0)  
_Amount in cents that was paid._

***

**installments** integer(>0)  
_The installments field specifies the number of payment installments for a transaction. It is commonly used in payment systems to divide the total amount into multiple payments over a specified period._

***

**softDescriptor** string(36)  
_The softDescriptor field is used to specify a custom text string that appears on the customer’s bank statement to help them identify the transaction._

***

**authCode** string(36)  
_Unique identifier for the object in your system._

***

**transactionId** string(36)  
_The transactionId field returned by the payment acquirer is a unique identifier assigned to the transaction during processing._

***

**card** [Card](ref:the-card-object)  
_The card field contains detailed information about the credit card used in a transaction._

***

**payer** [Payer](ref:the-payer-object)  
_This object represents a payer of the payment._

***

**split** [Split](ref:the-split-object)  
_This object represents a list of recipients who will receive part of the payment._

***

**status** enum  
_The status of the payment. Can be `CREATED`, `PROCESSED`, `PAID` or `FAILED`. _

| Status      | Description                                                                  | Final Status |
| :---------- | :--------------------------------------------------------------------------- | :----------- |
| `CREATED`   | Indicates that the payment was received.                                     | No           |
| `PROCESSED` | Indicates that the payment was processed by provider but needs confirmation. | No           |
| `PAID`      | Indicates that the payment was confirmed.                                    | Yes          |
| `FAILED`    | Indicates that the payment was not processed.                                | Yes          |

***

**createdAt** datetime  
_Time at which the object was created._

***

**processedAt** datetime  
_Time at which the object was processed._

***

**paidAt** datetime  
_Time at which the object was paid._

***

**failedAt** datetime  
_Time at which the object failed._

***

**metadata** [Metadata](ref:metadata)  
_Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format._

## Example

```json
{
   "id":"1dd3b87f-cfe5-4a5e-a5c2-3d2b0fc03407",
   "code":"d16cf0cd-ccaf-443c-a67b-6d8678130ef5",
   "method":"CREDIT_CARD",
   "amount":4990,
   "paidAmount":4990,
   "installments":1,
   "softDescriptor":null,
   "authCode":"395617",
   "transactionId":"020048142011141855330001375914270000000000",
   "payer":{
      "id":"8900d7a4-9e32-4aff-b44b-3538cff6d49c",
      "name":"Bruce Wayne",
      "taxId":"22585694003",
      "email":"bruce.wayne@wayneenterprises.com",
      "mobile":"5521975378941",
      "address":{
         "id":"8900d7a4-9e32-4aff-b44b-3538cff6d49c",
         "street":"Mountain Drive",
         "number":"107",
         "complement":null,
         "neighborhood":"Gotham Financial District",
         "city":"Gotham",
         "state":"New Jersey",
         "country":"US",
         "postalCode":"10007"
      }
   },
   "card":{
      "id":"de9672dc-4e97-40cc-aea5-11ed43bb80a1",
      "firstSixDigits":"488662",
      "lastFourDigits":"6261",
      "holderName":"BRUCE WAYNE",
      "brand":"VISA",
      "expMonth":8,
      "expYear":29
   },
   "split":[
      {
         "value":990,
         "recipientId":"009cb956-3b58-4731-927f-20225600b35b"
      }
   ],
   "status":"PAID",
   "createdAt":"2024-11-17T23:02:24.951Z",
   "processedAt":"2024-11-17T23:02:24.951Z",
   "paidAt":"2024-11-17T23:02:24.951Z",
   "refundReason":null,
   "refundedAt":null,
   "failedAt":null,
   "metadata":[
      {
         "name":"CUSTOM_FIELD_NAME",
         "value":"CUSTOM_FIELD_VALUE"
      }
   ]
}
```
