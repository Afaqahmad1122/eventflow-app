export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  USERS_SERVICE: 'users-service',
  EVENTS_SERVICE: 'events-service',
  TICKETS_SERVICE: 'tickets-service',
  PAYMENTS_SERVICE: 'payments-service',
  NOTIFICATIONS_SERVICE: 'notifications-service',
} as const;

export const SERVICES_PORTS = {
  [SERVICES.API_GATEWAY]: process.env.API_GATEWAY_PORT ?? 3000,
  [SERVICES.AUTH_SERVICE]: process.env.AUTH_SERVICE_PORT ?? 3001,
  [SERVICES.USERS_SERVICE]: process.env.USERS_SERVICE_PORT ?? 3002,
  [SERVICES.EVENTS_SERVICE]: process.env.EVENTS_SERVICE_PORT ?? 3003,
  [SERVICES.TICKETS_SERVICE]: process.env.TICKETS_SERVICE_PORT ?? 3004,
  [SERVICES.PAYMENTS_SERVICE]: process.env.PAYMENTS_SERVICE_PORT ?? 3005,
  [SERVICES.NOTIFICATIONS_SERVICE]:
    process.env.NOTIFICATIONS_SERVICE_PORT ?? 3006,
} as const;
