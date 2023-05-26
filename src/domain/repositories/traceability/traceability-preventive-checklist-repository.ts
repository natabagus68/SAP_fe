import { TraceabilityPreventiveChecklist } from "@domain/models/traceability/traceability-preventive-checklist";

export interface TraceabilityPreventiveChecklistRepository {
    getById(id: string, type: string): Promise<TraceabilityPreventiveChecklist>;
}
