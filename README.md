### node-hello

Default Port: `8080`

A Nodejs demo web application for show login user and hostname

**Attention! Donot use it in a production environment.**

use with docker:

```
docker pull leafney/node-hello
```

use for k8s/k3s:

```
apiVersion: v1
kind: Pod
metadata:
  name: nodejs-pod
  labels:
    app: Pod
spec:
  containers:
  - name: nodejs
    image: leafney/node-hello
    ports:
    - containerPort: 8080
```
