

FROM mcr.microsoft.com/playwright:v1.54.2-noble

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

#CMD ["npx","playwright","test","practise.spec.js"]
CMD ["npx","playwright","test"]