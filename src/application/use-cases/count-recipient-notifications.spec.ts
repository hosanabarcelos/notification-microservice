
import { CountRecipientNotifications } from './count-recipient-notifications';
import { inMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import { makeNotification } from 'test/factories/notification-factory';


describe('Count recipient notifications', () => {
    test('should be able to count reipietnt notifications', async () => {
        const notificationsRepository = new inMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({recipientId: 'example-recipient-id'}));

        await notificationsRepository.create(makeNotification({recipientId: 'example-recipient-id'}));

        await notificationsRepository.create(makeNotification({recipientId: 'example-recipient-id-2'}));

        const { count } = await countRecipientNotifications.execute({
            recipientId: 'example-recipient-id',
        });

        expect(count).toEqual(2);
    });
});