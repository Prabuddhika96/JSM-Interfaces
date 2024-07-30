import { Request } from "express";
import { IClientTransformedIssue } from "./IClientTransformedIssue";

export interface ITrackingSystemIncomingIssueHandler {
  handleIncomingIssue(req: Request): Promise<IClientTransformedIssue>;
  validateRequest(req: Request): boolean;
}
