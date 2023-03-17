FROM node:lts

# Install your app
WORKDIR /gluestack/frontend
COPY package*.json ./
RUN ["npm", "install"]
COPY . .
EXPOSE 9000

# Install npm dependencies
RUN ["npm", "install"]

# Run the app
CMD ["sh", "-c", "npm run dev -- -p 9000"]
