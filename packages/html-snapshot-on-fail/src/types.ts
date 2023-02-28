export declare namespace HTMLOnFailPlugin {
  export type userSettings = {
    enabled: boolean;
    require: string;
    dirname?: string;
    rootDir?: string;
    uniqNames?: boolean;
    writeFile?: boolean;
    reporter?: string;
  }

  export type config = {
    enabled: boolean;
    require: string;
    dirname: string;
    rootDir: string;
    dirpath: string;
    uniqNames: boolean;
    writeFile: boolean;
    reporter?: string;
  }

  export type bus = {
    driver: any;
    reporter?: Record<string & 'addAttachment', any>;
  }
}
