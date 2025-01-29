---
title: "The Bank Account object"
slug: "the-bank-account-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 06 2022 14:25:55 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Sep 18 2023 21:00:45 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**type** string(16)  
_The type of bank account. Can be `CHECKING` or `SAVINGS`._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**holderName** string(128)  
_The name of the person or business that owns the bank account._

***

**holderTaxId** string(14)  
_The tax ID of the account holder (CPF for individual account holders or CNPJ for businesses account holders)._

***

**holderType** enum  
_The type of entity that holds the account. Can be `INDIVIDUAL` or `COMPANY`._

***

**branchNumber** string(16)  
\*\*

***

**accountNumber** string(32)  
\*\*

***

**bankId** string(36)  
_The [ISPB](https://www.tcm.go.gov.br/site/wp-content/uploads/2017/07/numero_banco.pdf) code of the bank associated with the account._

***

**status** enum  
_The status of the bank account. Can be `ACTIVE` or `DELETED`._

| Status    | Description                                 |
| :-------- | :------------------------------------------ |
| `ACTIVE`  | Indicates that the bank account is active.  |
| `DELETED` | Indicates that the bank account is deleted. |

***

**createdAt** datetime  
_Time at which the object was created._

***

**updatedAt** datetime  
_Time at which the object was updated._

***

**deletedAt** datetime  
_Time at which the object was deleted._

***

**metadata** [Metadata](ref:metadata)  
_Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format._

## Example

```json
{
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
  "metadata": {
  	"CUSTOM_FIELD_NAME": "CUSTOM_FIELD_VALUE"
  }
}
```
