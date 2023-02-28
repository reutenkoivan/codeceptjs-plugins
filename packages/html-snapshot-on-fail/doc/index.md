---
title: html-snapshot-on-fail
sidebar_label: Details
slug: /
---

Plugin for CodeceptJS that makes a snapshot of the entire html tree and saves it to a file with the html extension.
The artifact is saved in the default output directory, or if the output directory is specified then in the specified directory.

Why do you need it? When the test fails, the html snapshot is saved, which allows you to see the entire html structure at the time of the crash and analyze:

-  what elements were on the page
-  what attributes were on the elements
-  what styles were on the elements.

Since this is an html file, you can check xpath/css locators on it (if the crash was caused by the absence of an element)
and thus localize the problem either in the test tool or in the locator, application.

### Configuration

```js
exports.config = {
  plugins: {
    htmlSnapshotOnFail: {
      require: "@codeceptjs-plugins/html-snapshot-on-fail",
      enabled: false,                                       // default: false
      dirname: 'html-snapshots-on-fail',                    // default: 'html-snapshots-on-fail'
      rootDir: global.output_dir,                           // default: global.output_dir
      uniqNames: false,                                     // default: false
      writeFile: true,                                      // default: true
      reporter: 'allure'                                    // default: undefined
    }
  }
}
```
