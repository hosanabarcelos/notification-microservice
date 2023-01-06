import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
export declare class NotificationsController {
    private sendNotification;
    constructor(sendNotification: SendNotification);
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            category: string;
            content: string;
            recipientId: string;
            readAt: Date;
            createdAt: Date;
        };
    }>;
}
