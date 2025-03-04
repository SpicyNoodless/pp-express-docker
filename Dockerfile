# Use an official Node.js image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml (or package-lock.json if using npm)
# Install dependencies
RUN corepack enable pnpm
# Copy the rest of the application files
COPY . .

# Use a minimal Node.js runtime for production
FROM node:18-alpine AS runtime

# Set the working directory
WORKDIR /app

# Copy dependencies and built files from the builder stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages

WORKDIR /app/packages/server

# Set environment variables
ENV NODE_ENV=production

# Expose the application port
EXPOSE 3000


# Start the application
CMD ["node", "dist/index.js"]
