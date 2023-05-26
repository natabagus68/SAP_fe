import { TraceabilityPreventive } from "@domain/models/traceability/traceability-preventive";

export interface TraceabilityPreventiveRepository {
    getById(id: string): Promise<TraceabilityPreventive>;
}
