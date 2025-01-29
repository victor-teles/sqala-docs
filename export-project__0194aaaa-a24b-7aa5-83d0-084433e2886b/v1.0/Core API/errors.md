---
title: "API errors"
slug: "errors"
excerpt: ""
hidden: false
createdAt: "Mon Jun 06 2022 14:03:07 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Nov 06 2024 20:03:12 GMT+0000 (Coordinated Universal Time)"
---
We use conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the 5xx range indicate an error with our servers.

Some 4xx errors that could be handled programmatically include an error code that briefly explains the error reported.

***

<br />

## Response attributes

**code** string  
_A short string indicating the error code reported._

***

**message** string  
_A human-readable message providing more details about the error._

***

**errors** string\[]  
_A list of reasons that caused the error._

<br />

## Error codes 🚨

| code                                | description                                                                                    |
| :---------------------------------- | :--------------------------------------------------------------------------------------------- |
| CODE_ALREADY_EXISTS                 | A object with a code already exists. Use a different, unique value for `code` and try again    |
| OBJECT_NOT_FOUND                    | The requested object doesn't exist                                                             |
| INVALID_BODY                        | The request was unacceptable, often due to missing a required parameter.                       |
| INTERNAL_ERROR                      | Something went wrong on our end                                                                |
| SERVICE_NOT_AVAILABLE               | Service not available right now, Please try again later.                                       |
| BANK_COMMUNICATION_FAILED           | Failed to communicate with bank, Please try again later.                                       |
| BACEN_COMMUNICATION_FAILED          | Failed to communicate with Brazilian central bank, Please try again later.                     |
| PIX_KEY_NOT_FOUND                   | Pix key not found                                                                              |
| RECIPIENT_ACCOUNT_BLOCKED           | Recipient's account blocked                                                                    |
| RECIPIENT_USER_ACCOUNT_CLOSED       | Recipient user account is closed                                                               |
| INSUFFICIENT_BALANCE                | Insufficient balance to execute the payment                                                    |
| LIMIT_EXCEED_FOR_THE_TRANSACTION    | Payment/withdrawal exceeds the limit allowed.                                                  |
| TRANSACTION_TYPE_NOT_SUPPORTED      | The transaction type is not supported/authorized in the recipient user's account               |
| BANK_REQUEST_TIMEOUT                | The communication with bank resulted in a timeout                                              |
| TRANSACTION_INTERRUPTED             | Transaction interrupted due to error in recipient's bank account                               |
| INVALID_RECIPIENT_BANK_ACCOUNT_TYPE | Invalid type for recipient's bank account                                                      |
| DUPLICATE_TRASACTION_DETECTED       | An identical transaction is pending. Please wait to retry this operation to avoid duplication. |
| RECIPIENT_BANK_RESTRICTED           | Recipient's bank is currently restricted                                                       |

## Response example

```json
{
  "code": "CODE_ALREADY_EXISTS",
  "message": "The recipient (5a3d6dbb-4ee1-4633-9088-9de8901eef5e) already exists.",
  "errors": []
}
```
