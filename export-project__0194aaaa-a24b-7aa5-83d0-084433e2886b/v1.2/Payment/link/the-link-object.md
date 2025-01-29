---
title: "The Link object"
slug: "the-link-object"
excerpt: ""
hidden: true
createdAt: "Sun Dec 01 2024 21:29:41 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Sun Dec 01 2024 21:30:07 GMT+0000 (Coordinated Universal Time)"
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

**barcode** string(64)  
_._

***

**pdf** string(256)  
_._

***

**description** string(128)  
_._

***

**expiresIn** integer(>0)  
_._

***

<br>

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
  "code": "40040b70-89be-40ad-ab7f-7a123cb7ab6a",
  "amount": 990,
  "paidAmount": null,
  "description": "My order",
  "expiresIn": 3,
  "barcode": "001 9 337370000000100 05009 401448 16060680935031",
  "pdf": "https://url.com",
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
