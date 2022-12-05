export interface Task {
    id: string;
    title: string;
    description: string;
    done: boolean;
    muted: boolean;
    modified: Date;
    alarmBefore: number;
    targetDate: Date;
}