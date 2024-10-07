# Використовуємо офіційний образ Node.js версії 21
FROM node:21

# Встановимо Vite глобально
RUN npm install -g vite

# Встановимо останню версію npm
RUN npm install -g npm@latest

# Встановимо робочу директорію для додатка
WORKDIR /app

# Копіюємо package.json та package-lock.json (або yarn.lock) в робочу директорію
COPY . .

# Встановимо залежності проекту
RUN npm install

# Відкриваємо порт (наприклад, 3000 для роботи з Vite)
EXPOSE 80

# Команда для запуску додатка
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "80"]
