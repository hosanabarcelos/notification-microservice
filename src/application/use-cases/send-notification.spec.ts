import { SendNotification } from './send-notification';
import { inMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';


describe('Send Notification', () => {
    test('should be able to send a notification', async () => {
        const notificationsRepository = new inMemoryNotificationsRepository();
        const sendNotification = new SendNotification(notificationsRepository);

        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'my-recipient-id',
        });

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    });
});