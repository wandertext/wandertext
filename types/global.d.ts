// Types for compiled templates
declare module "wandertext/templates/*" {
  import { TemplateFactory } from "htmlbars-inline-precompile";

  const tmpl: TemplateFactory;
  export default tmpl;
}
