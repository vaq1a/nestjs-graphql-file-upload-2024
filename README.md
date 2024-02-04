# 🛠 Nestjs graphql file upload

# Running the app
## development
```bash
  yarn run start
```

## watch mode
```bash
  yarn run start:dev
```

## production mode
```bash
  yarn run start:prod
```


## Information

The graphql-upload package has a known CSRF vulnerability and is turned on by default in version of Apollo Server 2.25.4 and below. If you are using Apollo Server 2 and do not use uploads, you can disable them by passing uploads: false to the ApolloServer constructor. If you do use uploads, you must update to Apollo Server 3.7 or later and ensure CSRF prevention is enabled to use this feature safely.

The third-party graphql-upload package has a known CSRF vulnerability.

The graphql-upload package adds a special middleware that parses POST requests with a Content-Type of multipart/form-data. This is one of the three special Content-Types that can be set on simple requests, enabling your server to process mutations sent in simple requests.

Apollo Server 4's default CSRF prevention feature blocks those attempting to use the graphql-upload package. If you use graphql-upload you should keep the CSRF prevention feature enabled, and configure your upload clients to send a non-empty Apollo-Require-Preflight header.

For example, if you use the apollo-upload-client package with Apollo Client Web, pass
```bash
  {headers: {'Apollo-Require-Preflight': 'true'}}
```
to createUploadLink.

Added header:

![App Screenshot](https://i.postimg.cc/RFsrXTjY/image.png)


Graphql mutation and result:

![App Screenshot](https://i.postimg.cc/wvLzTNP4/image.png)

Uploaded file:

![App Screenshot](https://i.postimg.cc/Kc3fjN08/image.png)
