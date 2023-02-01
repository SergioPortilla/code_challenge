FROM node:14

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Files required by pnpm install
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

# Bundle app source
COPY . .

EXPOSE 3000

ENTRYPOINT ["sh", "/usr/src/app/docker-entrypoint.sh"]

CMD pnpm run start --stream --host
