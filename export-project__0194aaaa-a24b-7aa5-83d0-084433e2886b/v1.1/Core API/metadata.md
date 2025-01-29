---
title: "Metadata"
slug: "metadata"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Wed Jun 08 2022 17:14:31 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jun 10 2022 17:36:25 GMT+0000 (Coordinated Universal Time)"
---
The some objects have a metadata parameter. You can use this parameter to attach key-value data to these objects.

You can specify up to 50 keys, with key names up to 40 characters long and values up to 500 characters long.

Metadata is useful for storing additional, structured information on an object. As an example, you could store your user's full name and corresponding unique identifier from your system.

Do not store any sensitive information (bank account numbers, card details, etc.) as metadata.

## Attributes

**name** string(40)  
_The name of the custom field._

***

**value** string(500)  
_The value of the custom field._

## Example

```json
{
  "metadata": [
    {
      "name": "CUSTOM_FIELD_NAME",
      "value": "CUSTOM_FIELD_VALUE"
    }
  ]
}
```
