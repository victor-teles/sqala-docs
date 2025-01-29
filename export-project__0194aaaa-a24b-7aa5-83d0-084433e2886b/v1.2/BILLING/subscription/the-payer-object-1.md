---
title: "The Payer object"
slug: "the-payer-object-1"
excerpt: ""
hidden: true
createdAt: "Thu Nov 07 2024 13:37:37 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Nov 07 2024 14:51:52 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**email** string  
_Payer's e-mail address._

***

**name** string  
_Payer's name._

***

**taxId** string **required**  
_Payer's document/taxId._

***

**bankCode** string  
_Payer's bank code (only **required** for recurrent pix)._

***

## Example

```json JSON
{
  "email": "menezes@gmail.com",
  "name": "Tiago Menezes",
  "taxId": "88797438057",
  "bankCode": "260"
}
```
