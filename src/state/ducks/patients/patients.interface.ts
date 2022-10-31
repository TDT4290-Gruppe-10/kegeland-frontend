export type Session = {
  id: string;
  sensor: string;
  userId: string;
  data: Record<string, (number | null)[]>;
  date: string
};

export type GetAllPatientSessionsResponse = Session[];

export type PatientsState = {
  patientData: Session[];
  loading: boolean;
  error: string | undefined;
  patientInformation: any;
};
