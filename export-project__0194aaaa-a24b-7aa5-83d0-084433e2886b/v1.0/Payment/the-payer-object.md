---
title: "The Payer object"
slug: "the-payer-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Tue Jun 07 2022 17:48:43 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Oct 03 2022 20:14:07 GMT+0000 (Coordinated Universal Time)"
---
This object represents a payer of the payment.

## Attributes

**name** string(128)  
_The customer’s full name or business name._

***

**taxId** string(14)  
_The tax ID of the payer (CPF for individual payers or CNPJ for businesses payers)_

## Example

```json
{
  "name": "Bruce Wayne",
  "taxId": "37515868066"
}
```
