---
title: "Errors"
slug: "errors"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 06 2022 14:03:07 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Aug 10 2022 17:43:51 GMT+0000 (Coordinated Universal Time)"
---
We use conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the 5xx range indicate an error with our servers.

Some 4xx errors that could be handled programmatically include an error code that briefly explains the error reported.

## Attributes

**code** string  
_A short string indicating the error code reported._

***

**message** string  
_A human-readable message providing more details about the error._

***

**errors** string\[]  
_A list of reasons that caused the error._

## Codes

**CODE_ALREADY_EXISTS**  
_A object with a code already exists. Use a different, unique value for `code` and try again._

***

**OBJECT_NOT_FOUND**  
_The requested object doesn't exist._

***

**INVALID_BODY**  
_The request was unacceptable, often due to missing a required parameter._

***

**INTERNAL_ERROR**  
_Something went wrong on our end._

## Example

```json
{
  "code": "CODE_ALREADY_EXISTS",
  "message": "The recipient (5a3d6dbb-4ee1-4633-9088-9de8901eef5e) already exists.",
  "errors": []
}
```
