import { Publisher, Subjects, TicketUpdatedEvent } from '@kftickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}