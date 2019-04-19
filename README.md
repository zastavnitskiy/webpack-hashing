# Problem

When using webpack.HashedModuleIdsPlugin, module identifiers depend on the absolute path of the module.

As mentioned [here](https://github.com/webpack/docs/wiki/how-to-write-a-loader#should-not-embed-absolute-paths), absolute hashing 
can break hashing when project root is moved.

This case is reproducing by running `yarn reproduce` and comparing produced build.js files for each of the source code: build files will have different module ids.

As a possible solution, we can use relative path as the seed for generating module hash. A prototype is available in `customHashedModuleIdsPlugin.js`

Is it a feasible approach? What would be the downsides of this approach?