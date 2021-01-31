import { Publisher, OrderCancelledEvent, Subjects } from '@kftickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}