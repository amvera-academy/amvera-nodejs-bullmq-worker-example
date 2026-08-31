# Общий BullMQ worker на Amvera

Простой пример деплоя BullMQ worker в [Amvera](https://amvera.ru).

Worker не зависит от обычного Node.js, Express, Next.js или NestJS. Он получает задачу `process_text` через Redis и возвращает переданную строку в верхнем регистре.

[ОБЩАЯ ИНСТРУКЦИЯ ПО BULLMQ](https://github.com/amvera-academy/amvera-nodejs-example/blob/main/BULLMQ.md) | [КАК ЗАПУСТИТЬ НА AMVERA](#деплой-в-amvera)

## Локальный запуск

```bash
npm install
export REDIS_URL=redis://localhost:6379/0
npm start
```

## Деплой в Amvera

Создайте Redis и отдельное приложение для worker в одном регионе, загрузите этот репозиторий и добавьте переменную `REDIS_URL`.

Полная схема подключения и пример отправки задачи описаны в общей [инструкции по BullMQ](https://github.com/amvera-academy/amvera-nodejs-example/blob/main/BULLMQ.md).
