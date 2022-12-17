"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationsRepository = void 0;
class PrismaNotificationsRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(notification) {
        await this.prismaService.notification.create({
            data: {
                id: notification.id,
                category: notification.category,
                content: notification.content.value,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
            }
        });
    }
}
exports.PrismaNotificationsRepository = PrismaNotificationsRepository;
//# sourceMappingURL=prisma-notifications-repository.js.map