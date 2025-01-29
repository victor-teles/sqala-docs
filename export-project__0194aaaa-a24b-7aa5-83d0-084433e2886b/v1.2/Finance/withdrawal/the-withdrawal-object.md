---
title: "The Withdrawal object"
slug: "the-withdrawal-object"
excerpt: ""
hidden: false
createdAt: "Thu Aug 04 2022 15:04:46 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Jan 27 2025 21:16:33 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**amount** integer(>0)  
_Amount in cents to be transferred._

***

**method** enum  
_The method of the withdrawal. Can be `STANDARD` or `PIX`._

| Method     | Description                                        |
| :--------- | :------------------------------------------------- |
| `STANDARD` | The payment will be processed with a Bank Account. |
| `PIX`      | The payment will be processed with a PIX key.      |

***

**status** enum  
_The status of the withdrawal. Can be `PENDING_APPROVAL`, `APPROVED`, `REJECTED`, `PAID` , `PROCESSED` , `CREATED`, `REJECTED`, `REFUNDED` or `FAILED`._

| Status             | Description                                | Final Status |
| :----------------- | :----------------------------------------- | :----------- |
| `PENDING_APPROVAL` | Indicates that the payment needs approval. | No           |
| `APPROVED`         | Indicates that the payment was approved.   | No           |
| `PROCESSED`        | Indicates that the payment was processed.  | No           |
| `CREATED`          | Indicates that the payment was created.    | No           |
| `REJECTED`         | Indicates that the payment was rejected.   | Yes          |
| `REFUNDED`         | Indicates that the payment was refunded.   | Yes          |
| `FAILED`           | Indicates that the payment failed.         | Yes          |
| `PAID`             | Indicates that the payment was paid.       | Yes          |

***

**createdAt** datetime  
_Time at which the object was created._

***

**approvedAt** datetime  
_Time at which the object was approved._

***

**rejectedAt** datetime  
_Time at which the object was rejected._

***

**paidAt** datetime  
_Time at which the object was paid._

***

**failedAt** datetime  
_Time at which the object failed._

***

**failedReason** string(256)  
_The reason for failure._

***

**pixKey** string(36)  
_The PIX key of the destination bank account._

***

**expectedHolderTaxId** string(14)

_The expected TaxId for the bank account holder. If the TaxId of a pix key is different from this field, the withdrawal status will be failed._

***

**recipientId** string(36)  
_The ID of the recipient that received the transfer._

***

**metadata** [Metadata](ref:metadata)  
_Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format._

```json
{
  "id": "86cfd98a-dcc5-4b67-b8d7-841e4a9f37fd",
  "code": "45447b68-09fc-4af9-be82-d7b4df00fc3b",
  "amount": 990,
  "method": "PIX",
  "status": "PAID",
  "createdAt": "2022-06-06T11:48:21Z",
  "approvedAt": "2022-06-06T11:48:21Z",
  "rejectedAt": null,
  "paidAt": "2022-06-06T11:48:21Z",
  "failedAt": null,
  "failedReason": null,
  "pixKey": null,
  "bankAccount": {
    "id": "a8a9c988-c2ba-44b9-af2d-ee6fcc00e269",
    "code": "ade39877-cb26-42bc-b151-8e6eef84284d",
    "type": "CHECKING",
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
  "metadata": {
  	"CUSTOM_FIELD_NAME": "CUSTOM_FIELD_VALUE"
  }
}
```
