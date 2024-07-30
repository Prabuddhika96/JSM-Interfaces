export interface IConfigReader {
  readConfigValue(project: any, key: string): any;
  getProject(key: string, value: string): any;
}
