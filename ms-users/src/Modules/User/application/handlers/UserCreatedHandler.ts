import { UserCreatedEvent } from "@Modules/User/model/events/UserCreatedEvent";

export const handleUserCreated = (event: UserCreatedEvent) => {
  console.log(`✅ Usuario creado: ${event.uuid} (${event.email})`);
};
