# Etapa 1: Build da aplicação
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servir com http-server
FROM node:18-alpine AS runner

RUN npm install -g http-server

WORKDIR /app

COPY --from=builder /app/dist .

EXPOSE 3001

CMD ["http-server", "-p", "3001"]