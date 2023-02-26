type ctx = {
  [name: string]: any;
  _runnable: {
    title: string;
    [name: string]: any;
  };
}

export declare namespace DispatcherEmit {
  export namespace step {
    type base = {
      actor: string;
      name: string;
      helperMethod: string;
      metaStep: Record<string, any>;
      args: Array<any>;
      ctx: ctx;
      id?: string;
    }

    export type before = base & {
      status: 'queued';
    }

    export type after = base & {
      status: 'failed' | 'success' | 'skipped';
      startTime: string;
      endTime: string;
    }

    export type passed = base & {
      status: 'success';
      startTime: string;
      endTime: string;
    }

    export type failed = base & {
      status: 'failed';
      startTime: string;
      endTime: string;
    }
  }

  export namespace suite {
    type base = {
      title: string;
      root: boolean;
      file: string;
      opts?: Record<string, any>;
      parent?: base;
      fullTitle?: () => string;
      ctx: ctx;
      id?: string;
    }

    export type before = base & {
      tests: Array<test.before>;
    }

    export type after = base &  {
      tests: Array<test.after>;
    }
  }

  export namespace test {
    type base = {
      title: string;
      body: string;
      async: boolean;
      fullTitle: () => string;
      file: string;
      inject: Record<any, any>;
      pending: boolean;
      tags?: string[];
      uuid?: string;
      ctx: ctx;
      opts: Record<string, any>;
      id?: string;
    }

    export type before = base & {
      parent: suite.before;
      steps: Array<step.before>;
    }

    export type after = base & {
      status: 'failed' | 'success' | 'skipped';
      parent: suite.after;
      steps: Array<step.after>;
    }

    export type error = Error | Error & {
      actual: string;
      expected: string;
    }
  }
}

type withId = {
  id: string;
}

export declare namespace BaseEvents {
  export namespace step {
    export type base = DispatcherEmit.step.base & withId
    export type before = DispatcherEmit.step.before & withId
    export type after = DispatcherEmit.step.after & withId
    export type passed = DispatcherEmit.step.passed & withId
    export type failed = DispatcherEmit.step.failed & withId
  }

  export namespace suite {
    export type base = DispatcherEmit.suite.base & withId
    export type before = DispatcherEmit.suite.before & withId
    export type after = DispatcherEmit.suite.after & withId
  }

  export namespace test {
    export type base = DispatcherEmit.test.base & withId
    export type before = DispatcherEmit.test.before & withId
    export type after = DispatcherEmit.test.after & withId
    export type error = DispatcherEmit.test.error
  }
}
