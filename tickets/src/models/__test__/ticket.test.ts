import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async (done) => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 5,
        userId: '123'
    });

    await ticket.save();

    const firstInstance = await Ticket.findById(ticket.id);
    const secondInstance = await Ticket.findById(ticket.id);

    firstInstance!.set({ price: 10 });
    

    await firstInstance!.save();

    try{
        await secondInstance!.save();
    } catch(err){
        return done();
    }

    throw new Error('Should not reach this point');
});

it('increments the version number on multiples saves', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123'
    });

    await ticket.save();
    expect(ticket.version).toEqual(0);
    await ticket.save();
    expect(ticket.version).toEqual(1);
    await ticket.save();
    expect(ticket.version).toEqual(2);
});