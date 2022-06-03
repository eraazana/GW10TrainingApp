package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class VendorEvaluationDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($aVendorEvaluation :  VendorEvaluation) : void {
    __widgetOf(this, pcf.VendorEvaluationDV, SECTION_WIDGET_CLASS).setVariables(false, {$aVendorEvaluation})
  }
  
  function refreshVariables ($aVendorEvaluation :  VendorEvaluation) : void {
    __widgetOf(this, pcf.VendorEvaluationDV, SECTION_WIDGET_CLASS).setVariables(true, {$aVendorEvaluation})
  }
  
  
}