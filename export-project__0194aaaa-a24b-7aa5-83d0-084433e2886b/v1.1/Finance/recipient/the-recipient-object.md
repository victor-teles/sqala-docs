---
title: "The Recipient object"
slug: "the-recipient-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 06 2022 14:24:05 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Oct 03 2022 20:13:17 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**id** string(36)  
_Unique identifier for the object._

***

**code** string(36)  
_Unique identifier for the object in your system._

***

**name** string(128)  
_The name of the recipient._

***

**taxId** string(14)  
_The tax ID of the recipient (CPF for individual recipients or CNPJ for businesses recipients)_

***

**type** enum  
_The type of the recipient. Can be `INDIVIDUAL`or `COMPANY`._

| Type         | Description            |
| :----------- | :--------------------- |
| `INDIVIDUAL` | Represents a person.   |
| `COMPANY`    | Represents a business. |

***

**status** enum  
_The status of the recipient. Can be `ACTIVE` or `DELETED`._

| Status    | Description                                    |
| :-------- | :--------------------------------------------- |
| `ACTIVE`  | Indicates that the recipient is active.        |
| `DELETED` | Indicates that the recipient has been deleted. |

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
  "id": "80e579ff-e3a6-4573-84ff-30de777e7861",
  "code": "a1fc515c-ce4a-45e0-8802-2696b2c0337a",
  "name": "Bruce Wayne",
  "taxId": "37515868066",
  "type": "INDIVIDUAL",
  "status": "ACTIVE",
  "createdAt": "2022-06-08T15:02:00Z",
  "updatedAt": null,
  "deletedAt": null,
  "metadata": {
  	"CUSTOM_FIELD_NAME": "CUSTOM_FIELD_VALUE"
  }
}
```
