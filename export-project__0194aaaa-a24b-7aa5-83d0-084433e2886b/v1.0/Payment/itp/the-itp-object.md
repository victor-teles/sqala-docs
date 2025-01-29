---
title: "The ITP object"
slug: "the-itp-object"
excerpt: ""
hidden: false
createdAt: "Tue Feb 20 2024 18:24:38 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon May 27 2024 15:02:27 GMT+0000 (Coordinated Universal Time)"
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

**url** string(256)  
_._

***

**source** BankAccount  
_This object represents a source bank account of the payment._

***

**payer** [Payer](ref:the-payer-object)  
_This object represents a payer of the payment._

***

**split** [Split](ref:the-split-object)  
_This object represents a list of recipients who will receive part of the payment._

***

**status** enum  
_The status of the payment. Can be `CREATED`, `PROCESSED`, `EXPIRED`, `PAID` or `FAILED`. _

| Status      | Description                                                                  | Final Status |
| :---------- | :--------------------------------------------------------------------------- | :----------- |
| `CREATED`   | Indicates that the payment was received.                                     | No           |
| `PROCESSED` | Indicates that the payment was processed by provider but needs confirmation. | No           |
| `ERROR`     | Indicates that an error has occurred.                                        | Yes          |
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
  	"id": "6a0b14a9-023c-4198-9ada-6e4684213340",
  	"code": "804a46a7-7012-4159-8782-1090e85e4afa",
    "type": "STATIC",
    "amount": 4990,
    "paidAmount": null,
    "url": "https://url.com",
    "payer": {
      "name": "Bruce Wayne",
      "taxId": "37515868066"
    },
    "split": [
      {
        "value": 990,
        "recipientId": "009cb956-3b58-4731-927f-20225600b35b"
      }
    ],
  	"status": "PROCESSED",
    "createdAt": "2022-06-06T11:48:21Z",
    "processedAt": "2022-06-06T11:48:26Z",
    "expiresAt": "2022-06-07T11:48:26Z",
    "paidAt": null,
    "failedAt": null,
    "metadata": [
      {
        "name": "CUSTOM_FIELD_NAME", 
        "value": "CUSTOM_FIELD_VALUE"
      }
    ]
}
```
