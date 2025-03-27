export interface leftPanelDataInterface {
    id: number;
    primaryLabel: string;
    secondaryLabel: string;
    tooltip: string
}

export interface staffDataInterface {
    tid: number;
    name: string;
    position: string;
    contactNumber: string;
    monthLeaves: number;
    annualLeaves: number;
}

export interface memberDataInterface {
    id: number;
    name: string;
    contactNumber: number | string;
    address: string;
    physiqueGoal: string;
    expertiseLevel: string;
    trainer: string;
    joiningDate: string;
    subscriptionMonth: number;
    subscriptionEndDate: string;
    paymentRemark: string;
    remarks: string;
    hasLeftGym: boolean;
    leftGymDate?: null | string;
};

export interface taskDataInterface {
    id: number;
    taskDesc: string
    dueDate: string;
    highPriority: boolean;
    status: string;
    creationDate: string
};