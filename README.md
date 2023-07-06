# HomeSquad!

### Para deployear la db de json-server (hacer esto cada vez que se hagan cambios en `db.json`):

- ./deploy-server.sh

Pueden ver la db en [https://homesquad-json-server.fly.dev/](https://homesquad-json-server.fly.dev/)

### Para correr la app en development :

- yarn install
- npx expo start

Listo, easy peasy

### Para correr json server:
- npm install -g json-server
- json-server -p 3001 -w ./db/db.json
