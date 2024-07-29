import { Request } from "express";
import { IClientTransformedIssue } from "./IClientTransformedIssue";

export interface ITrackingSystemIncomingIssueHandler {
  handleIncomingIssue(req: Request): IClientTransformedIssue;
}
