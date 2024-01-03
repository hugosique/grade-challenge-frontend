export interface IDialogState {
    show: boolean;
    inputValue: string,
    selectedGrade: any;
}

export interface IDialogProps {
    bimesterNumber: number;
    gradeData: any;
}