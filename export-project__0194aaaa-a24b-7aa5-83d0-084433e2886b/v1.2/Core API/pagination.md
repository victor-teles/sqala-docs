---
title: "Pagination"
slug: "pagination"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Mon Jun 06 2022 13:40:01 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Jun 09 2022 18:19:55 GMT+0000 (Coordinated Universal Time)"
---
These list API methods share a common structure, taking at least these three parameters: `limit`, `before` and `after`.

## Parameters

**limit** integer  
_A limit on the number of objects to be returned, between 1 and 50._

***

**before** string  
_A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with `obj_bar`, your subsequent call can include `before=obj_bar` in order to fetch the previous page of the list._

***

**after** string  
_A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with `obj_foo`, your subsequent call can include `after=obj_foo` in order to fetch the next page of the list._

***

## Example

```json
{
  "data": [
    {
      "field": "value"
    }
  ],
  "paging": {
    "before": null,
    "after": "aWQ6YzYyZjViNTAtZTNiOS0xMWVjLTk0OWEtNjFkMjljNjZlMmNm"
  }
}
```
