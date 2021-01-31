import { Subjects, Publisher, ExpirationCompleteEvent } from '@kftickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent>{
    readonly subject = Subjects.ExpirationComplete;
};