---
title: "The Access Token object"
slug: "the-access-token-object"
excerpt: ""
hidden: false
metadata: 
  image: []
  robots: "index"
createdAt: "Thu Jun 09 2022 23:36:42 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Fri Jul 21 2023 18:00:34 GMT+0000 (Coordinated Universal Time)"
---
## Attributes

**token** string(2048)  
_The Access Token is used to for authentication and authorization to get access to the resources._

***

**expiresIn** integer(>=3600)  
_Time (in seconds) at which the token expires._

***

**type** enum  
_The type of the token. Can be `Bearer`._

| Type   | Description                                                                                                                                                                                                                                                                                                        |
| :----- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bearer | Bearer authentication (also called token authentication) is an [HTTP authentication scheme](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) that involves security tokens called bearer tokens. The name “Bearer authentication” can be understood as “give access to the bearer of this token.” |

## Example

```json
{
  "token": "eyJraWQiOiJwb1NPeDI0VHRmbDZCYjdaZ3RcL296WGpqUzMrTVlkYTNScXdON1dVSXJkbz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZjE5MDk0Mi1jMjY5LTQxMjQtOTNkNy01YTdmYTkwMTQ0YzkiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuc2EtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3NhLWVhc3QtMV82eWdMcFJLMGUiLCJjbGllbnRfaWQiOiIyNXQwOGxwaHYwN2IzZnZqZ2FqcTNsczFrcCIsIm9yaWdpbl9qdGkiOiIzZWZjODY1Yi01MzU2LTQwNWMtOTQxYy1iNmExM2I3ODFhNWYiLCJldmVudF9pZCI6ImMyMTM1NjgzLWY3YTUtNGMxYy04MzUzLWM3MTUyNmQ2NDU5YyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NTQ4MTY3OTgsImV4cCI6MTY1NDgyMDUyNCwiaWF0IjoxNjU0ODE2OTI0LCJqdGkiOiI2ZmVhODZiNC1kNDVmLTRhOGQtYjEwYi1iOWRhNzkzODQyZmQiLCJ1c2VybmFtZSI6ImNhcmxvc3BlY2FuaGEyQG91dGxvb2suY29tIn0.PfKd8rpnq9xPO3IwSRkDuBDx0VjN41ABKvm0xIybNCxWh5N1b7HZsTPxjh6GiDoHWYnr8_HCzXqk0MQXYHt7ybHKIFPKqOaA4VpBrb-WaazwSAGdTJFt3grZb4KP-ab2gKaYMji9x1l_SDAaEU-frEHErOnJwyMPi1dn2pZAKJMp4p7IIctwYTFITokP4Lqn7amy_PHlsXoNlUPV0BoNBrFFq-sp22NXSdDtIsdSkyRlGqlOHNTd2zMNqqKCFx3lBt1dPfm6gPvx_mwlOiT0icAXwUOsXxi22P5HgEoh3HJw2NneP9xC8Mw1BQvhBdmfnmANQzIHWkFfBMCQo3xF5w",
  "expiresIn": 3600,
  "type": "Bearer"
}
```
