export declare namespace HTMLOnFailPlugin {
  export type userSettings = {
    enabled: boolean;
    require: string;
    dirname?: string;
    rootDir?: string;
    uniqNames?: boolean;
    wrightFile?: boolean;
  }

  export type config = {
    enabled: boolean;
    require: string;
    dirname: string;
    rootDir: string;
    dirpath: string;
    uniqNames: boolean;
    wrightFile: boolean;
  }

  export type bus = {
    driver: any;
    reporter: any;
  }
}
