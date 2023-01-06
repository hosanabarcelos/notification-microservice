import { Notification } from "@application/entities/notification";
export declare class NotificationViewModel {
    static toHTTP(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date;
        createdAt: Date;
    };
}
