
import { CancelNotification } from './cancel-notification';
import { inMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { makeNotification } from 'test/factories/notification-factory';


describe('Cancel Notification', () => {
    test('should be able to send a notification', async () => {
        const notificationsRepository = new inMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = makeNotification();        

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id,
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date));
    });
});