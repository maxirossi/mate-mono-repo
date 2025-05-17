import { DomainEvent } from "@Shared/domain/DomainEvent";

export class UserCreatedEvent implements DomainEvent {
  occurredOn: Date = new Date();

  constructor(
    public readonly uuid: string,
    public readonly email: string
  ) {}
}
