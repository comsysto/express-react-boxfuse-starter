# express-react-boxfuse-starter

Express-Server Starter Template with HTTPS Server and React Application to use with [Boxfuse](https://boxfuse.com/).
See the [BlogPost about Microservices with Boxfuse](https://comsysto.com/blog-post/selbstskalierende-scs-self-contained-service-infrastruktur-mit-boxfuse-auf-aws-part-3).

[![](https://comsysto.github.io/express-react-boxfuse-starter/img/frontend-app-structure---embedded-css-webfont.svg?v2)](https://comsysto.com/blog-post/selbstskalierende-scs-self-contained-service-infrastruktur-mit-boxfuse-auf-aws-part-3)

-----

&nbsp;

### Quickstart

```bash
# CLONE
git clone https://github.com/comsysto/express-react-boxfuse-starter.git
cd express-react-boxfuse-starter

# Install Frontend + Server Dependencies
npm install

cd server
      # START APP INSTANCE
      boxfuse run -ports.https=10444 -live
## OR
      # START APP INSTANCE - with some env vars 
      boxfuse run -ports.https=10444 -live -envvars.BACKEND=dev

# BUILD JS+CSS BUNDLE AND WATCH FOR CHANGES
cd ../
npm run develop
```

Now go to **[https://localhost:10444](https://localhost:10444)** and accept the self signed certificate.

You should see something like this:

<p align="center">
    <img src="https://comsysto.github.io/express-react-boxfuse-starter/img/localhost-10444.png?v2" width="80%" />
</p>

-----


&nbsp;

### SSL Certificate

There is already one self signed certificate residing in `./server/ssl/`.
You **should put a wildcard SSL Certificates to `./server/ssl/` see `./server/server.js` on how to configure SSL.

How to generate self signed certificate:

```bash
cd express-react-boxfuse-starter/server/ssl
openssl req  -nodes -new -x509  -keyout app.key -out app.crt

# Country Name (2 letter code) [AU]:DE
# State or Province Name (full name) [Some-State]:DE
# Locality Name (eg, city) []:DE
# Organization Name (eg, company) [Internet Widgits Pty Ltd]:DE
# Organizational Unit Name (eg, section) []:DE
# Common Name (e.g. server FQDN or YOUR name) []:localhost
# Email Address []:foo@bar.de
```




-----


&nbsp;

## License

[MIT](./LICENSE) © [Bernhard Grünewaldt](https://github.com/clouless)
