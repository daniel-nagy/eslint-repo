import { foo } from "a/build";
// this works
// import { foo } from "../../../node_modules/a/build";

const _copy = foo;
//    ^? const _copy: "hi"
