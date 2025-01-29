---
title: "The Bank Transfer object"
slug: "the-bank-transfer-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Aug 04 2022 19:16:40 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Aug 04 2022 19:46:22 GMT+0000 (Coordinated Universal Time)"
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

**source**  
_..._

***

**destination**  
_..._

***

**payer** [Payer](ref:the-payer-object)  
_This object represents a payer of the payment._

***

**split** [Split](ref:the-split-object)  
\*\*

***

**status** enum  
_The status of the payment. Can be `CREATED`, `PROCESSED`, `PAID`, `REFUNDED`, `ERROR` or `FAILED`. _

| Status      | Description                                                                                    |
| :---------- | :--------------------------------------------------------------------------------------------- |
| `CREATED`   | Indicates that the payment was received.                                                       |
| `PROCESSED` | Indicates that the payment was processed by provider but needs confirmation.                   |
| `PAID`      | Indicates that the payment was confirmed.                                                      |
| `REFUNDED`  | Indicates that the payment was refunded.                                                       |
| `ERROR`     | Indicates that one or more errors occurred during payment processing but is not a final state. |
| `FAILED`    | Indicates that the payment was not processed.                                                  |

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
