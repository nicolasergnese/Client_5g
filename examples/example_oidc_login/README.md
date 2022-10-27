# OpenID Connect Login Example

## Setup

Download required library

```
cd ui/examples/example_oidc_login/
npm install oidc-client --save
```

## Run debug server

Run a debug server on port 8001, it is needed to circumvent the CORS issue (only localhost:8001 is allowed for debug purposes)

```
python3 -m http.server 8001
```

## Login 

Login using a user's credentials and then test if retuned token is correct by pressing the "Call API" butto