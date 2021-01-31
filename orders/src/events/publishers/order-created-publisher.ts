import { Publisher, OrderCreatedEvent, Subjects } from '@kftickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated;
}