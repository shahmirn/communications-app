export interface Conversation {
    datetime: string;
    to: string;
    from: string;
    message?: string;
    type: 'sms' | 'voice';
}
