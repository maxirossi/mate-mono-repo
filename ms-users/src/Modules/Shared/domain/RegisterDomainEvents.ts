import { DomainEventDispatcher } from '@Shared/DomainEventDispatcher';
import { UserCreatedEvent } from '@Modules/User/model/events/UserCreatedEvent';
import { handleUserCreated } from '@Modules/User/application/handlers/UserCreatedHandler';
export const registerDomainEvents = (): void => {
  DomainEventDispatcher.register<UserCreatedEvent>('UserCreatedEvent', handleUserCreated);
};
