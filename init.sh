#!/bin/bash

set -e

echo "🟡 Esperando a que los servicios estén completamente levantados..."
sleep 10 

echo "🔄 Ejecutando migraciones dentro del contenedor ms-users..."
docker exec -it ms-users npx prisma migrate dev --name init --skip-seed
echo "✅ Migraciones ejecutadas."

echo "🌱 Ejecutando seed.ts dentro del contenedor..."
docker exec -it ms-users npx ts-node prisma/seed.ts
echo "✅ Seeder ejecutado."

echo "📦 Creando tópico Kafka 'user-events'..."
docker exec -it kafka \
  kafka-topics --create \
  --topic user-events \
  --bootstrap-server kafka:9092 \
  --replication-factor 1 \
  --partitions 1 || echo "⚠️ El tópico ya existe o hubo un error menor."

echo "✅ Tópico 'user-events' creado."

echo "🎉 Todos los pasos completados correctamente."
